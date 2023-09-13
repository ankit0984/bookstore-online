import React from 'react'

export default function Home() {
  return (
    <>
    <div className="hero min-h-screen bg-blue-200">
  <div className="hero-content text-center">
    <div className="max-w-lg">
      <h1 className="text-5xl font-bold text-black">Welcome to Your Source for Tech and Medical Knowledge!</h1>
      <p className="py-6 text-black">Discover a world of cutting-edge information and life-saving expertise at our bookstore. We're your premier destination for a vast collection of technology and medical books that cater to both seasoned professionals and enthusiastic learners alike.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Register or Login for getting best stuff of books on our platform let&apos;s get started, toward&apos;s a new journey of book&apos;s.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
<section>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="/Images/ml.jpg" className="max-w-sm rounded-lg shadow-2xl h-96 w-96" />
    <div className='px-10'>
      <h1 className="text-5xl font-bold">Edu-tech books!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
</section>

</>
  )
}
