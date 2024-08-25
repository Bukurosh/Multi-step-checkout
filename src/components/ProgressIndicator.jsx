import React from 'react';

const ProgressIndicator = ({ step }) => {
  const steps = ['Defination', 'Events', 'Impact', 'Define my option', 'Confirmation', 'Complete'];

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white  sm:p-6 md:p-8">
        <div className="text-center ">
          <div className={`rounded-full h-16 mx-12 w-16 flex items-center justify-center ${step === 6 ? 'bg-green-500' : 'bg-green-500'}`}>
            {step === 6 ? (
              <svg className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <span className="text-white">{step}</span>
            )}
          </div>
          <div className="mt-2 text-xl font-bold">
            {steps[step - 1]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
  