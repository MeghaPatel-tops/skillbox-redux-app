import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDoc, getDocs, query,doc,deleteDoc,where } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import  sign  from "jwt-encode";

export const checkUserAuth = async(userData)=>{
  const q = query(collection(db, "user_token"), where("uid", "==",userData.uid),where("user_token","==",userData.token ));
  const querySnapshot = await getDocs(q);

  console.log("Docs found:", querySnapshot.size);

  if (querySnapshot.empty) {
    console.log("No token found for this UID.");
    return false;
  }
  else{
       return true;
  }
}

const findUserToken = async (uid) => {
  console.log("Running findUserToken(), UID:", uid);

  const q = query(collection(db, "user_token"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);

  console.log("Docs found:", querySnapshot.size);

  if (querySnapshot.empty) {
    console.log("No token found for this UID.");
    return false;
  }

  for (const doc1 of querySnapshot.docs) {
    console.log("Found doc:", doc1.id, "=>", doc1.data());
    await deleteDoc(doc(db,"user_token",doc1.id))
  }

  return true;
};

export const userLogin = createAsyncThunk('userLogin',async(loggedData)=>{
    try {
    const q = query(
      collection(db, "users"),
      where('email', '==', loggedData.email),
      where('pwd', '==', loggedData.pwd)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No user found or invalid credentials");
    } else {
      querySnapshot.forEach(async(doc) => {
      const flag =await  findUserToken(doc.id);
      
      const secret = "tops";
      const jwt =sign(doc.data,secret);
      console.log(jwt);
      let tokenStore = await addDoc(collection(db,"user_token"),{uid:doc.id,token:jwt});
        console.log(tokenStore);
        localStorage.setItem('firebaseUID',doc.id);
        localStorage.setItem('firebaseTOKEN',jwt);
        
        console.log("User found:", doc.id, doc.data());
        
      });
      return {
            'msg':"Loging successfully"
        }
    }
  } catch (error) {
       return error
  }
})


export const createUser = createAsyncThunk('createUser',async(userData)=>{
     try {
        const docRef = collection(db,"users");
     const res = await addDoc(docRef,userData);
     if(res){
        return {
            'msg':"Register successfully"
        }
     }
     } catch (error) {
        return error
     }
})


export const userSlice = createSlice({
    name:'users',
    initialState:{
        singleUser:{},
        userMsg:null,
        userError:null,
        isLoading:false,
        islogin:false,
        loginMsg:null
    },
    reducers:{

    },
    extraReducers:(builder)=>{
            builder.addCase(createUser.pending,(state,action)=>{
                state.isLoading=true
            })
            .addCase(createUser.fulfilled,(state,action)=>{
                state.isLoading=false,
                state.userMsg=action.payload.msg
            })
            .addCase(createUser.rejected,(state,action)=>{
                state.userError=action.payload
            })
            .addCase(userLogin.pending,(state,action)=>{
                state.islogin=true;
            })
            .addCase(userLogin.fulfilled,(state,action)=>{
                state.islogin=false;
                state.loginMsg=action.payload.msg
            })
            .addCase(userLogin.rejected,(state,action)=>{
                state.userError=action.payload
            })
    }
})

export default userSlice.reducer