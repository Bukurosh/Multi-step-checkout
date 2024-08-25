
import React, { useState } from 'react';

const Step4 = () => {
  const [inputFields, setInputFields] = useState([
    {
      value: '',
      responsibility: '',
      time: '',
      finances: '',
      consequence: '',
      feelings: ''
    }
  ]);

  const handleAddField = () => {
    setInputFields([
      ...inputFields,
      { value: '', responsibility: '', time: '', finances: '', consequence: '', feelings: '' }
    ]);
  };

  const handleDeleteField = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleChange = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  return (
    <div>
      {inputFields.map((inputField, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center mb-2">
            <input
              type="text"
              name="value"
              className="w-full p-2 border border-gray-300 rounded mr-2"
              value={inputField.value}
              onChange={(e) => handleChange(index, e)}
            />
            {index !== 0 && (
              <button
                onClick={() => handleDeleteField(index)}
                className="bg-red-500 text-white px-3 py-2 rounded"
              >
                Delete
              </button>
            )}
          </div>
          <div className="flex items-center mb-2">
            <label className="w-1/4">Responsibilities:</label>
            <select
              name="responsibility"
              value={inputField.responsibility}
              onChange={(e) => handleChange(index, e)}
              className="w-3/4 p-2 border border-gray-300 rounded"
            >
              <option value="">Choose option</option>
              <option value="alone">Alone</option>
              <option value="withSomeone">With Someone</option>
            </select>
          </div>
          <div className="flex items-center mb-2">
            <label className="w-1/4">Time:</label>
            <select
              name="time"
              value={inputField.time}
              onChange={(e) => handleChange(index, e)}
              className="w-3/4 p-2 border border-gray-300 rounded"
            >
              <option value="">Choose option</option>
              <option value="immediately">Immediately</option>
              <option value="afterDays">After x days</option>
              <option value="afterMonths">After x months</option>
              <option value="afterYears">After x years</option>
            </select>
          </div>
          <div className="flex items-center mb-2">
            <label className="w-1/4">Finances:</label>
            <select
              name="finances"
              value={inputField.finances}
              onChange={(e) => handleChange(index, e)}
              className="w-3/4 p-2 border border-gray-300 rounded"
            >
              <option value="">Choose option</option>
              <option value="low">Low</option>
              <option value="med">Med</option>
              <option value="high">High</option>
              <option value="critic">Critic</option>
            </select>
          </div>
          <div className="flex items-center mb-2">
            <label className="w-1/4">Consequence:</label>
            <select
              name="consequence"
              value={inputField.consequence}
              onChange={(e) => handleChange(index, e)}
              className="w-3/4 p-2 border border-gray-300 rounded"
            >
              <option value="">Choose option</option>
              <option value="futureAffectations">Future Affectations</option>
            </select>
          </div>
          <div className="flex items-center mb-2">
            <label className="w-1/4">Feelings:</label>
            <select
              name="feelings"
              value={inputField.feelings}
              onChange={(e) => handleChange(index, e)}
              className="w-3/4 p-2 border border-gray-300 rounded"
            >
              <option value="">Choose option</option>
              <option value="flustrated">Flustrated</option>
              <option value="sad">Sad</option>
              <option value="extra">Extra</option>
            </select>
          </div>
        </div>
      ))}
      <button
        onClick={handleAddField}
        className="bg-blue-500 text-white px-3 py-2 rounded mt-2"
      >
        Add option
      </button>
    </div>
  );
};

export default Step4;


