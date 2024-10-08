import React, { useState, useEffect } from 'react';
import { getRelayStatus, toggleRelay } from '../Services/Api';

const RelayControl = () => {
  const [status, setStatus] = useState(null);  // Relay status (on/off)
  const [error, setError] = useState(null);    // For handling errors

  // Fetch the initial relay status from the backend
  const fetchRelayStatus = async () => {
    try {
      const response = await getRelayStatus();
      if (response && response.status !== undefined) {
        setStatus(response.status);  // Update state with relay status
        setError(null);  // Clear any previous errors
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      console.error('Error fetching relay status:', err);
      setError('Failed to fetch relay status');
      setStatus(null);  // Reset the status if error occurs
    }
  };

  useEffect(() => {
    fetchRelayStatus();  // Fetch status when component mounts
  }, []);

  // Handle the toggle action (status change)
  const handleToggle = async () => {
    try {
      const response = await toggleRelay();
      if (response && response.status !== undefined) {
        setStatus(response.status);  // Update status based on the backend response
        setError(null);  // Clear any errors
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      console.error('Error toggling relay:', err);
      setError('Failed to toggle relay');
    }
  };

  return (
<div className=" w-full mx-auto  ">
  
<img className='w-full rounded-xl'  src="https://i.imghippo.com/files/9Xakt1727799565.jpg" alt="" />
    
    <div className='justify-center items  center text-center w-full  flex-col   mx-auto my-7 '>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-900 font-bold ubuntu mb-3">Control at Your Fingertips</h2>
              <p className="text-sm sm:text-base lg:text-lg text-blue-900 ubuntu ">Effortlessly manage your home's lighting and appliances with a single tap.</p>
              </div>


        <div className=" p-7 mx-auto h-[550px] gap-7 justify-center items-center flex w-full bg-zinc-50  rounded-xl ">
        <div>
 
      <span className="text-blue-700 text-2xl font-bold">
        {status === 'on' ? (
          <img className='w-auto  rounded-xl' src="https://i.imghippo.com/files/WApTi1726261614.png" alt="Status On" />
        ) : (
          <img className='w-auto  rounded-xl' src="https://i.imghippo.com/files/U3drv1727826756.png" alt="Status Off" />
        )}
      </span>
    

</div>


     

      <div className=" ">
          <div className="flex flex-col gap-4 absolute">

            <div className="flex flex-row gap-2 items-center">
              <h1 className="text-2xl font-semibold">Toggle </h1>
              <input
                type="checkbox"
                className={`toggle toggle-lg ${status === 'on'?'bg-indigo-700':'bg-gray-300'}`}
                checked={status === 'on'}  
                onChange={handleToggle}    
              />
            </div>

            {/* Status/Error Display */}
            <div>
              {error ? (
                <p className="text-red-600">Error: {error}</p>
              ) : status === null ? (
                <p>Loading...</p>
              ) : (
                <p className="text-xl font-bold ">
                  Current Status:
                  <span className="text-blue-700 text-2xl font-bold">
                    {status === 'on' ? ' ON' : ' OFF'}
                  </span>
                </p>
              )}
            </div>

            {/* Refresh Button */}
            <button onClick={fetchRelayStatus} className="btn btn-primary w-auto">
              Refresh Status
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default RelayControl;
