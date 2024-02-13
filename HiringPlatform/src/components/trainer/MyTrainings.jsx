// import React, { useState, useEffect } from 'react';

// const MyTrainings = ({email}) => {
//   const [trainings, setTrainings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTrainings = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/training-orders/${email}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch training orders');
//         }
//         const data = await response.json();
//         setTrainings(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching training orders:', error);
//         setError('Failed to fetch training orders');
//         setLoading(false);
//       }
//     };

//     fetchTrainings();
//   }, []);

//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-5">My Trainings</h1>
//       {loading && <div className="text-center">Loading...</div>}
//       {error && <div className="text-red-500">{error}</div>}
//       {!loading && !error && (
//         <div>
//           {trainings.map(training => (
//             <div key={training._id} className="border shadow-md p-4 rounded-md mb-4">
//               <div>Training ID: {training.trainingId}</div>
//               <div>Trainer Email: {training.trainerEmail}</div>
//               <div>Location: {training.location}</div>
//               <div>Date: {new Date(training.date).toLocaleDateString()}</div>
//               <div>Time: {training.time}</div>
//               <div>Duration: {training.duration}</div>
//               <div>Cost: {training.cost}</div>
//               {/* Remove the status field */}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyTrainings;
import React, { useState, useEffect } from 'react';

const MyTrainings = ({email}) => {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const response = await fetch(`http://localhost:3001/training-orders/${email}`);
        if (!response.ok) {
          throw new Error('Failed to fetch training orders');
        }
        const data = await response.json();
        setTrainings(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching training orders:', error);
        setError('Failed to fetch training orders');
        setLoading(false);
      }
    };

    fetchTrainings();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">My Trainings</h1>
      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {!loading && !error && (
        <div>
          {trainings.map(training => (
            <div key={training._id} className="border shadow-md p-4 rounded-md mb-4">
              <div>Training ID: {training._id}</div>
              <div>Business ID: {training.businessId}</div>
              <div>Trainer Email: {training.trainerEmail}</div>
              <div>Amount: {training.amount}</div>
              <div>Start Date: {new Date(training.startDate).toLocaleDateString()}</div>
              <div>End Date: {new Date(training.endDate).toLocaleDateString()}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTrainings;
