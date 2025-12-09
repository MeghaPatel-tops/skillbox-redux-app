import { checkUserAuth } from "../Slice/User";
import { addDoc, collection, getDoc, getDocs, query,doc,deleteDoc,where } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export  const  checkUserLoginAuth = async()=>{
     try {
          let userData ={
        uid:localStorage.getItem('firebaseUID'),
        token:localStorage.getItem('firebaseTOKEN') 
    }
    console.log(userData);
    
     const q = query(collection(db, "user_token"), where("uid", "==",userData.uid),where("token","==",userData.token ));
      const querySnapshot = await getDocs(q);
    
      console.log("Docs found:", querySnapshot.size);
    
      if (querySnapshot.empty) {
        console.log("No token found for this UID.");
        return false;
      }
      else{
           return true;
      }
     } catch (error) {
          console.log("error",error);
          
     }
}