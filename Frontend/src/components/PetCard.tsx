"use client";

import { useState } from "react";

interface PetCardProps {
  name: string;
  age: string;
  imageUrl: string;
  location: string;
  status: "em adoção" | "adotado" | "falecido";
  onStatusChange?: (newStatus: "em adoção" | "adotado" | "falecido") => void;
}

const statusColorMap = {
  "em adoção": "bg-yellow-100 text-yellow-800",
  "adotado": "bg-green-100 text-green-800",
  "falecido": "bg-red-100 text-red-800",
};

const statusList: PetCardProps["status"][] = [
  "em adoção",
  "adotado",
  "falecido",
];

export default function PetCard({
  name,
  age,
  imageUrl,
  location,
  status,
  onStatusChange,
}: PetCardProps) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="rounded-xl shadow-sm bg-white overflow-visible flex flex-col border border-gray-200 hover:shadow-md transition-shadow relative">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />

      <div className="p-4 flex flex-col justify-between flex-1 relative">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {name}, {age}
          </h3>
          <p className="text-sm text-gray-600">{location}</p>
        </div>

        <div className="mt-3 relative z-10">
          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className={`text-xs px-3 py-1 rounded-full font-semibold ${statusColorMap[status]} hover:brightness-95 transition`}
          >
            {status.toUpperCase()}
          </button>

          {openDropdown && (
            <div
              className="absolute left-0 mt-2 w-max bg-white border border-gray-300 rounded-md shadow-lg z-50"
              style={{ minWidth: "150px" }}
            >
              {statusList.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    onStatusChange?.(s);
                    setOpenDropdown(false);
                  }}
                  className="block w-full text-left text-sm px-4 py-2 hover:bg-gray-100"
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}