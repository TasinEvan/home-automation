import React from 'react';

const Banner = () => {
    return (
        <div className='rounded-3xl'>
            <div
  className=" rounded-2xl min-h-screen hero"
  style={{
    backgroundImage: "url('https://i.postimg.cc/PqBXJLGB/jakub-zerdzicki-NLSC3r-Bj-YPg-unsplash.jpg'",
  }}>
  <div className="rounded-2xl hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Control Your Home Anytime Anywhere</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;