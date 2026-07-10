import React from "react";
function card({username,mail="not known"}){
    return(
       <>
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500"
          alt="Profile"
          className="w-full h-48 object-cover"
        />

        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-800">
            {username}
          </h2>

          <p className="text-blue-600 font-medium">@johndoe</p>

          <p className="mt-2 text-gray-600">
            Frontend Developer | React & Tailwind CSS Enthusiast
          </p>

          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p>📧{mail}</p>
            <p>📍 New Delhi, India</p>
            <p>💼 Experience: 3 Years</p>
            <p>👥 Followers: 2.5K</p>
          </div>

          <div className="flex justify-between mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Follow
            </button>

            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
       </>
    )
}
export default card