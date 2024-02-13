// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
// import { BarChart, Wallet, BellRing } from 'lucide-react';
// import MyProfile from '../../components/trainer/MyProfile';
// import MyTrainings from '../../components/trainer/MyTrainings';
// import PODetails from '../../components/trainer/PODetails';

// function TrainerDashboard() {
//   const location = useLocation(); // Use useLocation hook to access the current URL
//   const searchParams = new URLSearchParams(location.search);
//   const email = searchParams.get('email'); // Get the email from the URL parameter
//   console.log(email)

//   const [selectedLink, setSelectedLink] = useState('dashboard');

//   const renderComponent = () => {
//     switch (selectedLink) {
//       case 'dashboard':
//         return <MyProfile email={email} />; // Pass email as a prop to MyProfile component
//       case 'myTrainings':
//         return <MyTrainings />;
//       case 'myPO':
//         return <PODetails />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">
//         <div className="mt-6 flex flex-1 flex-col justify-between">
//           <nav className="-mx-3 space-y-6">
//             <div
//               onClick={() => setSelectedLink('dashboard')}
//               className={`flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 ${
//                 selectedLink === 'dashboard' ? 'bg-gray-100 text-gray-700' : ''
//               }`}
//             >
//               <BarChart className="h-5 w-5" aria-hidden="true" />
//               <span className="mx-2 text-sm font-medium">My Profile</span>
//             </div>
//             <div
//               onClick={() => setSelectedLink('myTrainings')}
//               className={`flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 ${
//                 selectedLink === 'myTrainings' ? 'bg-gray-100 text-gray-700' : ''
//               }`}
//             >
//               <Wallet className="h-5 w-5" aria-hidden="true" />
//               <span className="mx-2 text-sm font-medium">My Trainings</span>
//             </div>

//             <div
//               onClick={() => setSelectedLink('myPO')}
//               className={`flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 ${
//                 selectedLink === 'My PO' ? 'bg-gray-100 text-gray-700' : ''
//               }`}
//             >
//               <Wallet className="h-5 w-5" aria-hidden="true" />
//               <span className="mx-2 text-sm font-medium">Purchase Order</span>
//             </div>
//           </nav>
//         </div>
//       </aside>

//       <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
//         {renderComponent()}
//       </main>
//     </div>
//   );
// }

// export default TrainerDashboard;

import React, { useState, useEffect } from 'react';
import { BarChart, Wallet } from 'lucide-react';
import MyProfile from '../../components/trainer/MyProfile';
import MyTrainings from '../../components/trainer/MyTrainings';
import PODetails from '../../components/trainer/PODetails';

function TrainerDashboard() {
  const [email, setEmail] = useState(null);
  const [selectedLink, setSelectedLink] = useState('dashboard');

  useEffect(() => {
    // Parse the email from the URL
    const url = window.location.href;
    const emailStartIndex = url.lastIndexOf('/') + 1;
    const emailEndIndex = url.indexOf('@') + 1;
    const extractedEmail = url.slice(emailStartIndex, emailEndIndex);
    setEmail(extractedEmail + 'gmail.com'); // Append @gmail.com
  }, []);

  const renderComponent = () => {
    switch (selectedLink) {
      case 'dashboard':
        return <MyProfile email={email} />;
      case 'myTrainings':
        return <MyTrainings email={email}/>;
      case 'myPO':
        return <PODetails email={email}/>;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6">
            <div
              onClick={() => setSelectedLink('dashboard')}
              className={`flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 ${
                selectedLink === 'dashboard' ? 'bg-gray-100 text-gray-700' : ''
              }`}
            >
              <BarChart className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">My Profile</span>
            </div>
            <div
              onClick={() => setSelectedLink('myTrainings')}
              className={`flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 ${
                selectedLink === 'myTrainings' ? 'bg-gray-100 text-gray-700' : ''
              }`}
            >
              <Wallet className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">My Trainings</span>
            </div>

            <div
              onClick={() => setSelectedLink('myPO')}
              className={`flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 ${
                selectedLink === 'My PO' ? 'bg-gray-100 text-gray-700' : ''
              }`}
            >
              <Wallet className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Purchase Order</span>
            </div>
          </nav>
        </div>
      </aside>

      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        {renderComponent()}
      </main>
    </div>
  );
}

export default TrainerDashboard;

