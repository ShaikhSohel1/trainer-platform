// import React, { useState, useEffect } from 'react';

// const MyProfile = () => {
//   const [userData, setUserData] = useState({});
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     // Fetch user data from your API
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch('your-api-endpoint');
//         const data = await response.json();
//         setUserData(data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleEditClick = () => {
//     // Toggle the editing state
//     setIsEditing(!isEditing);
//   };

//   const handleSaveClick = async () => {
//     try {
//       // Send updated user data to your API for saving changes
//       const response = await fetch('your-api-endpoint', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData), // You may need to format the data accordingly
//       });

//       if (response.ok) {
//         setIsEditing(false);
//         // Optionally, you can refetch the user data after a successful update
//         // const updatedData = await response.json();
//         // setUserData(updatedData);
//       } else {
//         console.error('Error updating user data');
//       }
//     } catch (error) {
//       console.error('Error saving user data:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <h1 className="text-3xl font-semibold mb-4">My Profile</h1>
//       <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//             Username
//           </label>
//           <input
//             className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//             id="username"
//             type="text"
//             value={userData.username}
//             readOnly={!isEditing}
//             onChange={(e) => setUserData({ ...userData, username: e.target.value })}
//           />
//         </div>
//         {/* Add more fields as needed */}
//         {isEditing ? (
//           <div className="flex items-center justify-end">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
//               onClick={handleSaveClick}
//             >
//               Save
//             </button>
//             <button
//               className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               onClick={handleEditClick}
//             >
//               Cancel
//             </button>
//           </div>
//         ) : (
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             onClick={handleEditClick}
//           >
//             Edit
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyProfile;
// import React, { useState, useEffect } from 'react';

// const MyProfile = ({email}) => {
//   const [userData, setUserData] = useState({});
//   const [isEditing, setIsEditing] = useState(false);
//   const [emailId,setEmailId] = useState(email)
//   console.log(email)

//   useEffect(() => {
//     if (emailId) {
//       // Fetch user data from your API
//       const fetchUserData = async () => {
//         try {
//           const response = await fetch(`http://localhost:3001/trainers/${emailId}`);
//           const data = await response.json();
//           console.log(data)
//           setUserData(data);
//         } catch (error) {
//           console.error('Error fetching user data:', error);
//         }
//       };

//       fetchUserData();
//     }
//   }, [emailId]);

//   useEffect(() => {
//     setEmailId(email);
//   }, [email]);



//   const handleEditClick = () => {
//     // Toggle the editing state
//     setIsEditing(!isEditing);
//   };

//   const handleSaveClick = async () => {
//     try {
//       // Send updated user data to your API for saving changes
//       const response = await fetch('your-api-endpoint', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (response.ok) {
//         setIsEditing(false);
//         // Optionally, you can refetch the user data after a successful update
//         // const updatedData = await response.json();
//         // setUserData(updatedData);
//       } else {
//         console.error('Error updating user data');
//       }
//     } catch (error) {
//       console.error('Error saving user data:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <h1 className="text-3xl font-semibold mb-4">My Profile</h1>
//       <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//             Username
//           </label>
//           <input
//             className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//             id="username"
//             type="text"
//             value={userData.username}
//             readOnly={!isEditing}
//             onChange={(e) => setUserData({ ...userData, username: e.target.value })}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             Name
//           </label>
//           <input
//             className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//             id="name"
//             type="text"
//             value={userData.name}
//             readOnly={!isEditing}
//             onChange={(e) => setUserData({ ...userData, name: e.target.value })}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//             id="email"
//             type="text"
//             value={userData.email}
//             readOnly={!isEditing}
//             onChange={(e) => setUserData({ ...userData, email: e.target.value })}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
//             contact 
//           </label>
//           <input
//             className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//             id="contact"
//             type="number"
//             value={userData.contact}
//             readOnly={!isEditing}
//             onChange={(e) => setUserData({ ...userData, contact: e.target.value })}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             skills 
//           </label>
//           <input
//             className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//             id="skills"
//             type="text"
//             value={userData.skills}
//             readOnly={!isEditing}
//             onChange={(e) => setUserData({ ...userData, skills: e.target.value })}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             City 
//           </label>
//           <input
//             className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//             id="city"
//             type="text"
//             value={userData.city}
//             readOnly={!isEditing}
//             onChange={(e) => setUserData({ ...userData, city: e.target.value })}
//           />
//         </div>
//                 <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="chargeperday">
//             Charge Per Day
//         </label>
//         <input
//             className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//             id="chargeperday"
//             type="number"
//             value={userData.chargeperday}
//             readOnly={!isEditing}
//             onChange={(e) => setUserData({ ...userData, chargeperday: e.target.value })}
//             required  // <-- Add the required attribute
//         />
//         </div>


//         <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="trainertype">
//             Trainer Type
//         </label>
//         <select
//             className={`block appearance-none w-full bg-white border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//             id="trainertype"
//             value={userData.trainertype}
//             disabled={!isEditing}
//             onChange={(e) => setUserData({ ...userData, trainertype: e.target.value })}
//         >
//             <option value="Select">Select</option>
//             <option value="Part Time">Part Time</option>
//             <option value="Full Time">Full Time</option>
//         </select>
//         </div>

//         <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="opentotravel">
//            Open To Travel
//         </label>
//         <select
//             className={`block appearance-none w-full bg-white border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//             id="opentotravel"
//             value={userData.opentotravel}
//             disabled={!isEditing}
//             onChange={(e) => setUserData({ ...userData, opentotravel: e.target.value })}
//         >
//             <option value="Select">Select</option>
//             <option value="Part Time">Yes</option>
//             <option value="Full Time">No</option>
//         </select>
//         </div>

//         <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deliverymode">
//            Delivery Mode
//         </label>
//         <select
//             className={`block appearance-none w-full bg-white border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//             id="deliverymode"
//             value={userData.deliverymode}
//             disabled={!isEditing}
//             onChange={(e) => setUserData({ ...userData, deliverymode: e.target.value })}
//         >
//             <option value="Select">Select</option>
//             <option value="Part Time">Yes</option>
//             <option value="Full Time">No</option>
//         </select>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clients">
//             Clients
//           </label>
//           <input
//             className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//             id="clients"
//             type="text"
//             value={userData.clients}
//             readOnly={!isEditing}
//             onChange={(e) => setUserData({ ...userData, clients: e.target.value })}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
//             Role
//           </label>
//           <input
//             className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//             id="role"
//             type="text"
//             value={userData.role}
//             readOnly={!isEditing}
//             onChange={(e) => setUserData({ ...userData, role: e.target.value })}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="education">
//             Education
//           </label>
//           <input
//             className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//             id="education"
//             type="text"
//             value={userData.education}
//             readOnly={!isEditing}
//             onChange={(e) => setUserData({ ...userData, education: e.target.value })}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="links">
//             Links
//           </label>
//           <input
//             className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//             id="links"
//             type="text"
//             value={userData.links}
//             readOnly={!isEditing}
//             onChange={(e) => setUserData({ ...userData, links: e.target.value })}
//           />
//         </div>

//         {/* Add more fields as needed */}

//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={isEditing ? handleSaveClick : handleEditClick}
//         >
//           {isEditing ? 'Save' : 'Edit'}
//         </button>

//         {isEditing && (
//           <button
//             className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
//             onClick={handleEditClick}
//           >
//             Cancel
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyProfile;

// import React, { useState, useEffect } from 'react';

// const MyProfile = ({ email }) => {
//   const [userData, setUserData] = useState({});
//   const [isEditing, setIsEditing] = useState(false);
//   const [emailId, setEmailId] = useState(email);

//   useEffect(() => {
//     if (emailId) {
//       const fetchUserData = async () => {
//         try {
//           const response = await fetch(`http://localhost:3001/trainers/${emailId}`);
//           const data = await response.json();
//           setUserData(data);
//         } catch (error) {
//           console.error('Error fetching user data:', error);
//         }
//       };

//       fetchUserData();
//     }
//   }, [emailId]);

//   useEffect(() => {
//     setEmailId(email);
//   }, [email]);

//   const handleEditClick = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleSaveClick = async () => {
//     try {
//       const response = await fetch(`http://localhost:3001/trainers/${emailId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (response.ok) {
//         setIsEditing(false);
//       } else {
//         console.error('Error updating user data');
//       }
//     } catch (error) {
//       console.error('Error saving user data:', error);
//     }
//   };

//   const handleChange = (key, value) => {
//     setUserData({ ...userData, [key]: value });
//   };

//   // Fields to exclude from rendering
//   const excludedFields = ['_id', 'password','__v'];

//   return (
//     <div className="container mx-auto mt-8">
//       <h1 className="text-3xl font-semibold mb-4">My Profile</h1>
//       <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         {Object.entries(userData).map(([key, value]) => {
//           if (excludedFields.includes(key)) {
//             return null; // Exclude the field from rendering
//           }
//           return (
//             <div className="mb-4" key={key}>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
//                 {key.charAt(0).toUpperCase() + key.slice(1)} {/* Capitalize the first letter of the key */}
//               </label>
//               <input
//                 className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//                 id={key}
//                 type={typeof value === 'number' ? 'number' : 'text'} // Set the input type based on the value type
//                 value={value}
//                 readOnly={!isEditing}
//                 onChange={(e) => handleChange(key, e.target.value)}
//               />
//             </div>
//           );
//         })}

//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={isEditing ? handleSaveClick : handleEditClick}
//         >
//           {isEditing ? 'Save' : 'Edit'}
//         </button>

//         {isEditing && (
//           <button
//             className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
//             onClick={handleEditClick}
//           >
//             Cancel
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyProfile;

import React, { useState, useEffect } from 'react';

const MyProfile = ({ email }) => {
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [emailId, setEmailId] = useState(email);

  useEffect(() => {
    if (emailId) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(`http://localhost:3001/trainers/${emailId}`);
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }
  }, [emailId]);

  useEffect(() => {
    setEmailId(email);
  }, [email]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`http://localhost:3001/trainers/${emailId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setIsEditing(false);
      } else {
        console.error('Error updating user data');
      }
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  const handleChange = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  // Define the schema fields to exclude from rendering
  const excludedFields = ['_id', 'password', '__v', 'role'];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">My Profile</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {Object.entries(userData).map(([key, value]) => {
          if (excludedFields.includes(key)) {
            return null; // Exclude the field from rendering
          }
          return (
            <div className="mb-4" key={key}>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)} {/* Capitalize the first letter of the key */}
              </label>
              {/* Render input fields based on the type of the value */}
              {key === 'email' || key === 'username' ? (
                <input
                  className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  id={key}
                  type="text"
                  value={value}
                  readOnly={!isEditing}
                  onChange={(e) => handleChange(key, e.target.value)}
                />
              ) : typeof value === 'boolean' ? (
                <select
                  className={`block appearance-none w-full bg-white border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  id={key}
                  value={value.toString()} // Convert boolean to string for select option
                  disabled={!isEditing}
                  onChange={(e) => handleChange(key, e.target.value === 'true')}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              ) : (
                <input
                  className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  id={key}
                  type={typeof value === 'number' ? 'number' : 'text'} // Set the input type based on the value type
                  value={value}
                  readOnly={!isEditing}
                  onChange={(e) => handleChange(key, e.target.value)}
                />
              )}
            </div>
          );
        })}

        {/* Render input fields for education */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="education">
            Education
          </label>
          {userData.education && userData.education.map((edu, index) => (
            <div key={index} className="flex flex-col mb-2">
              <input
                className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                type="text"
                placeholder="Degree"
                value={edu.degree}
                readOnly={!isEditing}
                onChange={(e) => handleChange(`education[${index}].degree`, e.target.value)}
              />
              <input
                className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2`}
                type="text"
                placeholder="Institution"
                value={edu.institution}
                readOnly={!isEditing}
                onChange={(e) => handleChange(`education[${index}].institution`, e.target.value)}
              />
              <input
                className={`shadow appearance-none border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2`}
                type="number"
                placeholder="Year"
                value={edu.year}
                readOnly={!isEditing}
                onChange={(e) => handleChange(`education[${index}].year`, parseInt(e.target.value))}
              />
            </div>
          ))}
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={isEditing ? handleSaveClick : handleEditClick}
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>

        {isEditing && (
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
            onClick={handleEditClick}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;




