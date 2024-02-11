import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12 text-center">
      <h1 className="text-4xl font-extrabold">Trainer Engagement Platform</h1>
      <div className="mt-4">
        <h3 className="text-lg text-red-400">
          "Embark on a Transformative Learning Journey: Explore a Diverse Range of Skills with Expert Trainers, Tailored to Your Unique Path – Your Gateway to Personal Growth and Success on Platform."
        </h3>
      </div>
    </div>

    <div className="divide container mx-auto my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="trainer bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">For Trainers</h2>
        <button className="btn bg-blue-500 text-white py-2 px-4 mb-2 hover:bg-blue-600 transition duration-300 ease-in-out">
          <Link to="/sign-in">Login</Link>
        </button>
        <p className="text-gray-600">Don't have an account?</p>
        <Link to="/trainer-register" className="text-blue-500 hover:underline">
          Register Now
        </Link>
      </div>

      <div className="company bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">For Company</h2>
        <button className="btn bg-blue-500 text-white py-2 px-4 mb-2 hover:bg-blue-600 transition duration-300 ease-in-out">
          <Link to="/sign-in">Login</Link>
        </button>
        <p className="text-gray-600">Don't have an account?</p>
        <Link to="/business-register" className="text-blue-500 hover:underline">
          Register Now
        </Link>
      </div>
    </div>

    <div className="subfooter bg-gray-100 p-8 text-center">
      <p className="text-lg">"Finding skilled trainers has never been this easy! Our Platform made it super easy."</p>
      <p className="text-lg">"We connect required companies with fantastic trainers within days!"</p>
    </div>

    <div className="contact bg-blue-500 text-white p-8 text-center">
      <p className="text-lg">Contact Us: 9527218479</p>
      <p className="text-lg">Email: support@sharathinfotech.com</p>
      <p className="text-lg">Phone: 20087654</p>
    </div>
  </>
  )
}

export default Home