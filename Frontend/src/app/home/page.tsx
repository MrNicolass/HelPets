"use client";

import PageTitle from "@/components/PageTitle";
import PetCard from "@/components/PetCard";
import { useState } from "react";

type PetStatus = "em adoção" | "adotado" | "falecido";

interface Pet {
  name: string;
  age: string;
  imageUrl: string;
  location: string;
  status: PetStatus;
}

const initialPets: Pet[] = [
  {
    name: "Juca",
    age: "1 ano",
    imageUrl: "/images/pets/juca.jpg",
    location: "Filial Jaraguá do Sul",
    status: "em adoção",
  },
  {
    name: "Caramelo",
    age: "8 meses",
    imageUrl: "/images/pets/caramelo.jpg",
    location: "Filial Joinville",
    status: "adotado",
  },
  {
    name: "Luna",
    age: "3 anos",
    imageUrl: "/images/pets/luna.jpg",
    location: "Filial Blumenau",
    status: "falecido",
  },
];

export default function HomePage() {
  const [pets, setPets] = useState<Pet[]>(initialPets);

  const updateStatus = (index: number, newStatus: PetStatus) => {
    const updated = [...pets];
    updated[index].status = newStatus;
    setPets(updated);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <PageTitle title="Bem-vindo(a)!" />

      <p className="text-gray-600 text-lg mt-2">
        Veja abaixo os animais atualmente cadastrados em nossas filiais.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {pets.map((pet, index) => (
          <PetCard
            key={index}
            {...pet}
            onStatusChange={(newStatus) => updateStatus(index, newStatus)}
          />
        ))}
      </div>
    </div>
  );
}