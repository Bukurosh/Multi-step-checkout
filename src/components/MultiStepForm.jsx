import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import ProgressIndicator from './ProgressIndicator';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <>
            <Step1 formData={formData} setFormData={setFormData} />
            <div className="flex justify-end mt-4">
              <button onClick={nextStep} className="px-4 py-2 bg-green-500 text-white rounded">
                Next
              </button>
            </div>
          </>
        );
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} />;
      case 3:
        return <Step3 formData={formData} setFormData={setFormData} />;
      case 4:
        return <Step4 formData={formData} />;
      case 5:
        return <Step5 />;
      case 6:
        return <Step6 />;
      default:
        return <Step1 formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="w-full md:max-w-xl p-9 bg-white shadow-lg rounded-lg">
      <ProgressIndicator step={step} />
      {renderStep()}
      <div className="flex flex-col mt-4">
        <div className="flex justify-between">
          {step > 1 && (
            <button onClick={prevStep} className="px-4 py-2 bg-gray-500 text-white rounded">
              Back
            </button>
          )}
          {step > 1 && step < 6 && (
            <button onClick={nextStep} className="px-4 py-2 bg-green-500 text-white rounded">
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MultiStepForm;




