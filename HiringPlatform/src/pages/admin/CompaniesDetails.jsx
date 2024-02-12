import React, { useEffect, useState } from "react";
import axios from "axios";

function CompaniesDetails() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await axios.get("http://localhost:3001/companies");
      setCompanies(response.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Companies Details</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border border-gray-300">Unique ID</th>
            <th className="p-3 border border-gray-300">Company Name</th>
            <th className="p-3 border border-gray-300">Location</th>
            <th className="p-3 border border-gray-300">Email</th>
            <th className="p-3 border border-gray-300">Phone</th>
            <th className="p-3 border border-gray-300">Domain</th>

            {/* Add other headers for additional company details */}
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company._id} className="bg-white">
              <td className="p-3 border border-gray-300">{company.uniqueId}</td>

              <td className="p-3 border border-gray-300">
                {company.companyName}
              </td>
              <td className="p-3 border border-gray-300">{company.location}</td>
              <td className="p-3 border border-gray-300">{company.email}</td>
              <td className="p-3 border border-gray-300">{company.phone}</td>
              <td className="p-3 border border-gray-300">{company.domain}</td>

              {/* Add other cells for additional company details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompaniesDetails;
