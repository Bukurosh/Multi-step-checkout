import React from 'react';

const Step1 = ({ formData, setFormData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">What is your goal?</h2>
      <div className="mb-4">
        
        <input 
          type="text" 
          className="w-full p-2 border border-gray-300 rounded" 
          value={formData.name} 
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
        />
      </div>
      <div className="mb-4">
       
        
      </div>
    </div>
  );
}

export default Step1;
