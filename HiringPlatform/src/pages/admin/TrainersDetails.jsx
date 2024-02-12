import React, { useEffect, useState } from "react";
import axios from "axios";

function TrainersDetails() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/trainers");
      setTrainers(response.data);
    } catch (error) {
      console.error("Error fetching trainers:", error);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Trainers Details</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border border-gray-300">Username</th>
            <th className="p-3 border border-gray-300">Name</th>
            <th className="p-3 border border-gray-300">Email</th>
            <th className="p-3 border border-gray-300">Contact Number</th>
            <th className="p-3 border border-gray-300">Skills</th>
            <th className="p-3 border border-gray-300">Address</th>
            <th className="p-3 border border-gray-300">Charge/day</th>

            {/* Add other headers for additional trainer details */}
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer) => (
            <tr key={trainer._id} className="bg-white">
              <td className="p-3 border border-gray-300">{trainer.username}</td>
              <td className="p-3 border border-gray-300">{trainer.name}</td>
              <td className="p-3 border border-gray-300">{trainer.email}</td>
              <td className="p-3 border border-gray-300">
                {trainer.contactNumber}
              </td>
              <td className="p-3 border border-gray-300">{trainer.skills}</td>
              <td className="p-3 border border-gray-300">{trainer.address}</td>
              <td className="p-3 border border-gray-300">
                {trainer.chargePerDay}
              </td>

              {/* Add other cells for additional trainer details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainersDetails;
