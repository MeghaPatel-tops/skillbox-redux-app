import React from 'react'

function Hero() {
  return (
    <div>
      <section class="bg-white text-black py-16">
        <div class="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6"> 
            <div class="flex-1">
            <h1 class="text-4xl font-bold mb-4">Minimalist Hero Section</h1>
            <p class="text-lg mb-6">Clean and bold layout with perfect contrast.</p>
            <button className="text-xl bg-black text-white px-5 py-2 rounded-full hover:bg-gray-200 hover:text-black">Learn More</button>
            </div>

            
            <div class="flex-1">
            <img src="https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg" alt="Hero" class="w-full rounded-xl shadow-lg" />
            </div>

        </div>
        </section>

    </div>
  )
}

export default Hero
