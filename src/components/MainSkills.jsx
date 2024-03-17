import React from 'react';

const MainSkills = () => {
  return (
    <div>
      <div>
        <h3>Backend Development</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{ width: '80%' }}></div>
        </div>
      </div>
      <div>
        <h3>Frontend Development</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{ width: '70%' }}></div>
        </div>
      </div>
      <div>
        <h3>UI/UX Designing</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{ width: '90%' }}></div>
        </div>
      </div>
    </div>
  );
}

export default MainSkills;
