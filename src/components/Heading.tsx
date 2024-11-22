import React from 'react';

// Define 'type' and 'title' as required props in the interface
interface proptype {
  type?: string;  // Make 'type' optional
  title: string; // Required prop 'title'
}

const Heading: React.FC<proptype> = ({ type, title }) => {
  return (
    <div className={`text-center text-4xl pb-8 ${type ? type : ''}`}>
      {/* Display the 'title' prop */}
      <p className='border-b-4 inline-block pb-2'>{title}</p>
    </div>
  );
}

export default Heading;



