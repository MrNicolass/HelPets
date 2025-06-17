"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPass() {
  const [senha, setSenha] = useState("");
  const [novSenha, setNovaSenha] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (senha !== novSenha) {
      setError("As senhas não coincidem.");
      return;
    }
    setError("");
    console.log("Senha alterada");
    router.push("/");
  }

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col w-2/6 p-10 rounded-2xl shadow-md bg-white">
        <div className="flex gap-4 justify-center">
          <h2 className="text-3xl font-bold text-base-color">
            Nova senha
          </h2>
        </div>

        <p className="mt-[1rem] text-gray-600">
          Insira sua nova senha para completar. Tenha certeza que a nova senha é diferente da sua antiga, para a sua segurança.
        </p>

        <form onSubmit={handleSubmit} className="mt-[1rem] rounded-2xl">
          <div className="mt-4">
            <label className="block mb-[0.5rem] text-base-color">
              Nova Senha:
            </label>
            <input
              onChange={e => setSenha(e.target.value)}
              className="w-full h-12 border border-gray-300 rounded px-3"
              type="password"
              placeholder="Nova senha"/>
          </div>

          <div className="mt-4">
            <label className="block mb-[0.5rem] text-base-color">
              Confirme a Senha:
            </label>
            <input
              onChange={e => setNovaSenha(e.target.value)}
              className="w-full h-12 border border-gray-300 rounded px-3"
              type="password"
              placeholder="Confirme sua Senha"/>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div className="flex justify-center items-center mt-6">
              <button
                className="bg-blue-950 text-white px-6 py-2 rounded hover:bg-green-600 cursor-pointer"
                type="submit">
                Enviar
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}
