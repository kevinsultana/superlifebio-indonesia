import React from "react";
import { FaStar } from "react-icons/fa";
import { leaderboard } from "../../data/leaderboard";

export default function Content() {
  return (
    <div>
      <div className="mx-4 md:mx-12 lg:mx-32 my-8">
        <h1 className="text-xl md:text-2xl font-bold uppercase text-center">
          Peringkat kepemimpinan
        </h1>
        <img
          src="/leadership.png"
          alt="leadership"
          className="my-6 md:my-8 rounded-2xl w-full max-w-4xl mx-auto"
        />
        <h1 className="text-xl md:text-2xl font-bold uppercase text-center text-red-700">
          super leaders of superlife
        </h1>
      </div>

      <div className="mx-2 md:mx-12 lg:mx-32 overflow-x-auto">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-200 text-xs md:text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 font-semibold uppercase">
            <tr>
              <th className="px-2 md:px-4 py-2 border-r">No.</th>
              <th className="px-2 md:px-4 py-2 border-r">Username</th>
              <th className="px-2 md:px-4 py-2 border-r">
                Leadership Rank Achieved
              </th>
              <th className="px-2 md:px-4 py-2">Rising Star</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="px-2 md:px-4 py-2 border-r">{index + 1}</td>
                <td className="px-2 md:px-4 py-2 border-r">{item.username}</td>
                <td className="px-2 md:px-4 py-2 border-r">{item.rank}</td>
                <td className="px-2 md:px-4 py-2">
                  {item.risingstar && (
                    <FaStar className="fill-yellow-500" size={18} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
