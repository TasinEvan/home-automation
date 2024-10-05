import React, { useRef } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Banner = () => {
    const scrollRef = useRef(null);

    const scrollToSection = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="p-2 lg:p-0">

            {/* Banner Section */}
            <div className="rounded-3xl">
                <div
                    className="rounded-2xl hero min-h-[50vh] lg:min-h-screen bg-cover bg-center bg-no-repeat" 
                    style={{
                        backgroundImage: "url('https://i.postimg.cc/PqBXJLGB/jakub-zerdzicki-NLSC3r-Bj-YPg-unsplash.jpg')",
                    }}
                >
                    <div className="rounded-2xl hero-overlay bg-opacity-20"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className=" w-2/3 lg:w-full max-w-lg mx-auto px-4">
                            <h1 className="mb-5 space-y-2 text-lg lg:text-5xl font-bold ubuntu ">Control Your Home <br /> Anytime Anywhere</h1>
                            <p className="mb-5 text-sm lg:text-lg ubuntu">
                                Simplify your life with ubuntuour all-in-one home automation platform. Control lights, security, and appliances effortlessly from your phone or tablet.
                            </p>
                            {/* Button to trigger scrolling */}
                            <button onClick={scrollToSection} className="btn btn-primary">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Placeholder for spacing */}
            <div className=" spa my-7 mx-auto w- w-fit">
                <img src="https://i.imghippo.com/files/nxgdC1727763615.jpg" alt="" />
            </div>

            {/* Content Section */}
            <div ref={scrollRef} className="p-5 lg:p-10  ">
                <div className='justify-center items center text-center w-full fflex flex-col  mx-auto   '>
                  
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-900 font-bold ubuntu mb-3">Welcome to the Smart Home Experience</h2>
                <p className="text-sm sm:text-base lg:text-lg text-blue-900 ubuntu ">This is where we will take you through the features and setup process.</p>
                </div>
            </div>

            <Outlet />

          
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
          <NavLink  to={'/relaycontrol'}>
                <div className="relative ">
                    <figure className="relative  rounded-2xl">
                        <img
                            src="https://i.imghippo.com/files/dgCZX1727770566.png"
                            alt="Relay control"
                            className="w-full h-auto max-w-full"
                        />
                        {/* Dining Room Text - Centered and responsive */}
                        <h4 className="absolute top-[50%] left-[50%] transform -translate-x-1/2  playfair -translate-y-1/2 font-extrabold text-fuchsia-400 text-xl lg:text-2xl">
                           Living room
                        </h4>

                        {/* Hover effect text */}
                        <h4 className="absolute inset-0 flex items-end justify-center rounded-2xl font-semibold playfair bg-blue-300 bg-opacity-40 text-gray-900 text-sm pb-3 opacity-0 hover:opacity-100 transition-opacity duration-300">Click to switch
                        </h4>
                    </figure>
                </div>
            </NavLink>
         
          <NavLink  to={'/relaycontrol'}>
                <div className="relative ">
                    <figure className="relative shadow-none rounded-2xl">
                        <img
                            src="https://i.imghippo.com/files/Wd9rA1727770704.png"
                            alt="Relay control"
                            className="w-full h-auto max-w-full"
                        />
                        {/* Dining Room Text - Centered and responsive */}
                        <h4 className="absolute top-[50%] left-[50%] transform -translate-x-1/2 playfair  -translate-y-1/2 font-extrabold  text-fuchsia-400 text-xl lg:text-2xl">
                            Bed room
                        </h4>

                        {/* Hover effect text */}
                        <h4 className="absolute inset-0 flex items-end justify-center rounded-2xl font-semibold playfair bg-blue-300 bg-opacity-40 text-gray-900 text-sm pb-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Click to switch
                        </h4>
                    </figure>
                </div>
            </NavLink>
          <NavLink  to={'/relaycontrol'}>
                <div className="relative ">
                    <figure className="relative shadow-none rounded-2xl">
                        <img
                            src="https://i.imghippo.com/files/8rWPM1726220762.png"
                            alt="Relay control"
                            className="w-full h-auto max-w-full"
                        />
                        {/* Dining Room Text - Centered and responsive */}
                        <h4 className="absolute top-[50%] left-[50%] transform -translate-x-1/2 playfair -translate-y-1/2 font-extrabold text-fuchsia-400 text-xl lg:text-2xl">
                            Dining Room
                        </h4>

                        {/* Hover effect text */}
                        <h4 className="absolute inset-0 flex items-end justify-center rounded-2xl font-semibold playfair bg-blue-300 bg-opacity-40 text-gray-900 text-sm pb-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Click to switch
                        </h4>
                    </figure>
                </div>
            </NavLink>
          <NavLink  to={'/relaycontrol'}>
                <div className="relative ">
                    <figure className="relative  rounded-2xl">
                        <img
                            src="https://i.imghippo.com/files/nmudd1727770900.png"
                            alt="Relay control"
                            className="w-full h-auto max-w-full"
                        />
                        {/* Dining Room Text - Centered and responsive */}
                        <h4 className="absolute top-[50%] left-[50%] transform -translate-x-1/2 playfair -translate-y-1/2 font-extrabold text-fuchsia-400 text-xl lg:text-2xl">
                        kitchen cabinet
                        </h4>

                        {/* Hover effect text */}
                        <h4 className="absolute inset-0 flex items-end justify-center rounded-2xl font-semibold playfair bg-blue-300 bg-opacity-40 text-gray-900 text-sm pb-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Click to switch
                        </h4>
                    </figure>
                </div>
            </NavLink>
          </div>

          <section className="">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row-reverse lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://i.imghippo.com/files/1EcDb1728072196.jpg" alt="" className=" rounded-full object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none playfair sm:text-6xl"> Schedule <br /> Your device 
				
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Easily schedule your device to perform tasks automatically 
				<br  className="hidden md:inline lg:hidden" />at specified dates and times, ensuring seamless automation and timely execution.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<NavLink rel="noopener noreferrer" href="#" to={"/Schedule"} className="px-8 py-3 text-lg font-semibold rounded bg-indigo-700 dark:text-gray-50">Get Started</NavLink>
			
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Banner;
