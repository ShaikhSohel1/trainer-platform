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

// completly working code dont touch this
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
//   }, [email]);

//   useEffect(() => {
//     const fetchInvoices = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/invoices/${email}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch invoices');
//         }
//         const invoices = await response.json();
//         const updatedTrainings = trainings.map(training => {
//           const invoice = invoices.find(inv => inv.poId === training._id);
//           return invoice ? { ...training, raiseStatus: true } : training;
//         });
//         setTrainings(updatedTrainings);
//       } catch (error) {
//         console.error('Error fetching invoices:', error);
//       }
//     };
  
//     // Fetch invoices only if trainings or email changes
//     if (trainings.length > 0) {
//       fetchInvoices();
//     }
//   }, [email, trainings]);

//   const handleRaiseInvoice = async (trainingId, endDate) => {
//     try {
//       if (new Date(endDate) < new Date()) {
//         const response = await fetch(`http://localhost:3001/raise-invoice/${trainingId}`, {
//           method: 'PUT',
//         });
//         if (response.ok) {
//           setTrainings(prevTrainings => {
//             return prevTrainings.map(training =>
//               training._id === trainingId ? { ...training, raiseStatus: true } : training
//             );
//           });
//         }
//       }
//     } catch (error) {
//       console.error('Error raising invoice:', error);
//       // Handle error if necessary
//     }
//   };

//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-5">My Trainings</h1>
//       {loading && <div className="text-center text-gray-500">Loading...</div>}
//       {error && <div className="text-red-500">{error}</div>}
//       {!loading && !error && (
//         <div>
//           {trainings.map(training => (
//             <div key={training._id} className="border shadow-md p-4 rounded-md mb-4">
//               <div className="text-lg font-semibold mb-2">Business ID: {training.businessId}</div>
//               <div>Trainer Email: {training.trainerEmail}</div>
//               <div>Amount: ${training.amount}</div>
//               <div>Status: {training.status ? 'Accepted' : 'Not Accepted'}</div>
//               <div>Start Date: {new Date(training.startDate).toLocaleDateString()}</div>
//               <div>End Date: {new Date(training.endDate).toLocaleDateString()}</div>
//               <div className="mt-4">
//                 {training.raiseStatus ? (
//                   <div className="text-green-500">Invoice Raised</div>
//                 ) : (
//                   new Date(training.endDate) < new Date() && training.status && (
//                     <button
//                       onClick={() => handleRaiseInvoice(training._id, training.endDate)}
//                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                     >
//                       Raise Invoice
//                     </button>
//                   )
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyTrainings;

// completly working code dont touch this is updated one
// import React, { useState, useEffect } from 'react';
// import { Document, Page, Text, View, PDFDownloadLink, pdf } from '@react-pdf/renderer';

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
//   }, [email]);

//   useEffect(() => {
//     const fetchInvoices = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/invoices/${email}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch invoices');
//         }
//         const invoices = await response.json();
//         const updatedTrainings = trainings.map(training => {
//           const invoice = invoices.find(inv => inv.poId === training._id);
//           return invoice ? { ...training, raiseStatus: true, invoiceId: invoice._id } : training;
//         });
//         setTrainings(updatedTrainings);
//       } catch (error) {
//         console.error('Error fetching invoices:', error);
//       }
//     };
  
//     // Fetch invoices only if trainings or email changes
//     if (trainings.length > 0) {
//       fetchInvoices();
//     }
//   }, [email, trainings]);

//   const handleRaiseInvoice = async (trainingId, endDate) => {
//     try {
//       if (new Date(endDate) < new Date()) {
//         const response = await fetch(`http://localhost:3001/raise-invoice/${trainingId}`, {
//           method: 'PUT',
//         });
//         if (response.ok) {
//           setTrainings(prevTrainings => {
//             return prevTrainings.map(training =>
//               training._id === trainingId ? { ...training, raiseStatus: true } : training
//             );
//           });
//         }
//       }
//     } catch (error) {
//       console.error('Error raising invoice:', error);
//       // Handle error if necessary
//     }
//   };
  
//   const Invoice = ({ invoiceData }) => (
//     <Document>
//       <Page>
//         <View>
//           <Text>Invoice ID: {invoiceData._id}</Text>
//           <Text>Amount: {invoiceData.amount}</Text>
//           <Text>Purchase Order Id: {invoiceData.poId}</Text>
//           <Text>Trainer Id: {invoiceData.trainerId}</Text>
//           <Text>Business Id: {invoiceData.businessId}</Text>
//           <Text>Trainer Name: {invoiceData.name}</Text>
//           <Text>Trainer Email: {invoiceData.email}</Text>
//           <Text>Contact: {invoiceData.contactNumber}</Text>
//           <Text>Training Start Date: {invoiceData.startDate}</Text>
//           <Text>Training End Date: {invoiceData.endDate}</Text>
//         </View>
//       </Page>
//     </Document>
//   );

//   const handleDownloadInvoice = async (invoiceId) => {
//     try {
//       const response = await fetch(`http://localhost:3001/invoices/${invoiceId}/download`);
//       if (!response.ok) {
//         throw new Error('Failed to download invoice');
//       }
//       const invoiceData = await response.json();

//       // Render PDF
//       const pdfContent = <Invoice invoiceData={invoiceData} />;
//       const blob = await pdf(pdfContent).toBlob();

//       // Create URL for the blob
//       const url = URL.createObjectURL(blob);

//       // Create a link element and trigger the download
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'invoice.pdf';
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);

//       // Clean up URL object
//       URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error('Error downloading invoice:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-5">My Trainings</h1>
//       {loading && <div className="text-center text-gray-500">Loading...</div>}
//       {error && <div className="text-red-500">{error}</div>}
//       {!loading && !error && (
//         <div>
//           {trainings.map(training => (
//             <div key={training._id} className="border shadow-md p-4 rounded-md mb-4">
//               <div className="text-lg font-semibold mb-2">Business ID: {training.businessId}</div>
//               <div>Trainer Email: {training.trainerEmail}</div>
//               <div>Amount: ${training.amount}</div>
//               <div>Status: {training.status ? 'Accepted' : 'Not Accepted'}</div>
//               <div>Start Date: {new Date(training.startDate).toLocaleDateString()}</div>
//               <div>End Date: {new Date(training.endDate).toLocaleDateString()}</div>
//               <div className="mt-4">
//                 {training.raiseStatus ? (
//                   <>
//                     <div className="text-green-500">Invoice Raised</div>
//                     <button
//                       onClick={() => handleDownloadInvoice(training.invoiceId)}
//                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
//                     >
//                       Download Invoice
//                     </button>
//                   </>
//                 ) : (
//                   new Date(training.endDate) < new Date() && training.status && (
//                     <button
//                       onClick={() => handleRaiseInvoice(training._id, training.endDate)}
//                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                     >
//                       Raise Invoice
//                     </button>
//                   )
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyTrainings;


import React, { useState, useEffect } from 'react';
import { Document, Page, Text, View, PDFDownloadLink, pdf,StyleSheet } from '@react-pdf/renderer';

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
          return invoice ? { ...training, raiseStatus: true, invoiceId: invoice._id } : training;
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
  
  const styles = StyleSheet.create({
    page: {
      fontFamily: 'Times-Roman',
      fontSize: 12,
      padding: 20,
    },
    section: {
      marginBottom: 10,
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    label: {
      fontWeight: 'bold',
    },
    value: {
      marginLeft: 10,
    },
  });
  
  const Invoice = ({ invoiceData }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Invoice</Text>
          <View style={styles.section}>
            <Text style={styles.label}>Invoice ID:</Text>
            <Text style={styles.value}>{invoiceData._id}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Amount:</Text>
            <Text style={styles.value}>{invoiceData.amount}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Purchase Order Id:</Text>
            <Text style={styles.value}>{invoiceData.poId}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Trainer Id:</Text>
            <Text style={styles.value}>{invoiceData.trainerId}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Business Id:</Text>
            <Text style={styles.value}>{invoiceData.businessId}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Trainer Name:</Text>
            <Text style={styles.value}>{invoiceData.name}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Trainer Email:</Text>
            <Text style={styles.value}>{invoiceData.email}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Contact:</Text>
            <Text style={styles.value}>{invoiceData.contactNumber}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Training Start Date:</Text>
            <Text style={styles.value}>{invoiceData.startDate}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Training End Date:</Text>
            <Text style={styles.value}>{invoiceData.endDate}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  const handleDownloadInvoice = async (invoiceId) => {
    try {
      const response = await fetch(`http://localhost:3001/invoices/${invoiceId}/download`);
      if (!response.ok) {
        throw new Error('Failed to download invoice');
      }
      const invoiceData = await response.json();

      // Render PDF
      const pdfContent = <Invoice invoiceData={invoiceData} />;
      const blob = await pdf(pdfContent).toBlob();

      // Create URL for the blob
      const url = URL.createObjectURL(blob);

      // Create a link element and trigger the download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'invoice.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Clean up URL object
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading invoice:', error);
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
                  <>
                    <div className="text-green-500">Invoice Raised</div>
                    <button
                      onClick={() => handleDownloadInvoice(training.invoiceId)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                    >
                      Download Invoice
                    </button>
                  </>
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












