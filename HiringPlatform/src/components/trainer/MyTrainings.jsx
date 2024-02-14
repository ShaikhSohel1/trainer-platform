//Full Functional Code do not write it 
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

//------------------------------------------------------------------------------


//Partially correct but not implementing 
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
//               <div>Training ID: {training._id}</div>
//               <div>Business ID: {training.businessId}</div>
//               <div>Trainer Email: {training.trainerEmail}</div>
//               <div>Amount: {training.amount}</div>
//               <div>Start Date: {new Date(training.startDate).toLocaleDateString()}</div>
//               <div>End Date: {new Date(training.endDate).toLocaleDateString()}</div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyTrainings;

// import React, { useState, useEffect } from 'react';

// const MyTrainings = ({ email }) => {
//   const [trainings, setTrainings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchTrainings = async () => {
//     try {
//       const response = await fetch(`http://localhost:3001/training-orders/${email}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch training orders');
//       }
//       const data = await response.json();
//       setTrainings(data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching training orders:', error);
//       setError('Failed to fetch training orders');
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTrainings();
//   }, []);

//   const handleRaiseInvoice = async (orderId) => {
//     try {
//       const response = await fetch(`http://localhost:3001/purchase-orders/${orderId}/raise`, {
//         method: 'PUT',
//       });
//       if (!response.ok) {
//         throw new Error('Failed to raise invoice');
//       }
//       // Refresh the training orders after raising the invoice
//       fetchTrainings();
//     } catch (error) {
//       console.error('Error raising invoice:', error);
//       setError('Failed to raise invoice');
//     }
//   };

//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-5">My Trainings</h1>
//       {loading && <div className="text-center">Loading...</div>}
//       {error && <div className="text-red-500">{error}</div>}
//       {!loading && !error && (
//         <div>
//           {trainings.map(training => (
//             <div key={training._id} className="border shadow-md p-4 rounded-md mb-4">
//               <div>Training ID: {training._id}</div>
//               <div>Business ID: {training.businessId}</div>
//               <div>Trainer Email: {training.trainerEmail}</div>
//               <div>Amount: {training.amount}</div>
//               <div>Start Date: {new Date(training.startDate).toLocaleDateString()}</div>
//               <div>End Date: {new Date(training.endDate).toLocaleDateString()}</div>
//               {training.invoiceRaised ? (
//                 <div className="text-green-500">Invoice Raised</div>
//               ) : (
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2" onClick={() => handleRaiseInvoice(training._id)}>Raise Invoice</button>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyTrainings;

//-------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';

const MyTrainings = ({ email }) => {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    fetchTrainings();
  }, [email]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch(`http://localhost:3001/invoices/${email}`);
        if (!response.ok) {
          throw new Error('Failed to fetch invoices');
        }
        const invoices = await response.json();
        const updatedTrainings = trainings.map(training => {
          const invoice = invoices.find(inv => inv.poId === training._id);
          return invoice ? { ...training, raiseStatus: true } : training;
        });
        setTrainings(updatedTrainings);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };
  
    // Fetch invoices only if trainings or email changes
    if (trainings.length > 0) {
      fetchInvoices();
    }
  }, [email, trainings]);

  const handleRaiseInvoice = async (trainingId, endDate) => {
    try {
      if (new Date(endDate) < new Date()) {
        const response = await fetch(`http://localhost:3001/raise-invoice/${trainingId}`, {
          method: 'PUT',
        });
        if (response.ok) {
          setTrainings(prevTrainings => {
            return prevTrainings.map(training =>
              training._id === trainingId ? { ...training, raiseStatus: true } : training
            );
          });
        }
      }
    } catch (error) {
      console.error('Error raising invoice:', error);
      // Handle error if necessary
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">My Trainings</h1>
      {loading && <div className="text-center text-gray-500">Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {!loading && !error && (
        <div>
          {trainings.map(training => (
            <div key={training._id} className="border shadow-md p-4 rounded-md mb-4">
              <div className="text-lg font-semibold mb-2">Business ID: {training.businessId}</div>
              <div>Trainer Email: {training.trainerEmail}</div>
              <div>Amount: ${training.amount}</div>
              <div>Status: {training.status ? 'Accepted' : 'Not Accepted'}</div>
              <div>Start Date: {new Date(training.startDate).toLocaleDateString()}</div>
              <div>End Date: {new Date(training.endDate).toLocaleDateString()}</div>
              <div className="mt-4">
                {training.raiseStatus ? (
                  <div className="text-green-500">Invoice Raised</div>
                ) : (
                  new Date(training.endDate) < new Date() && training.status && (
                    <button
                      onClick={() => handleRaiseInvoice(training._id, training.endDate)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Raise Invoice
                    </button>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTrainings;









