import React from "react";
import {PaginatedAdvocates} from "@/types/Advocate";
import {formatPhoneNumber} from "@/app/helpers/format";
import Pagination from "@/app/components/Pagination";

export default function AdvocatesTable({data, page, onPageChange}: {
  data: PaginatedAdvocates,
  page: number,
  onPageChange: (page: number) => void
}) {
  return <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th className="px-6 py-3">First Name</th>
        <th className="px-6 py-3">Last Name</th>
        <th className="px-6 py-3">City</th>
        <th className="px-6 py-3">Degree</th>
        <th className="px-6 py-3">Specialties</th>
        <th className="px-6 py-3">Years of Experience</th>
        <th className="px-6 py-3">Phone Number</th>
      </tr>
      </thead>
      <tbody>
      {data.items.map((advocate) => {
        return (
          <tr key={advocate.id} className="bg-white border-b">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {advocate.firstName}
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{advocate.lastName}</td>
            <td className="px-6 py-4">{advocate.city}</td>
            <td className="px-6 py-4">{advocate.degree}</td>
            <td className="px-6 py-4">
              {advocate.specialties.map((s, index) => (
                <div key={index}>{s}</div>
              ))}
            </td>
            <td className="px-6 py-4">{advocate.yearsOfExperience}</td>
            <td className="px-6 py-4">{formatPhoneNumber(advocate.phoneNumber)}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
    <Pagination page={page} onChange={onPageChange} meta={data.meta}/>
  </div>
}