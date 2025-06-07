"use client";

import { ArrowLeft } from "lucide-react";
import { FormEvent, useState } from "react";
import Link from 'next/link';
import CodigoNovaSenha  from "../../components/novaSenha/CodigoNovaSenha";

export default function Forget() {
  const [email, setEmail] = useState<string>("");
  const [showAlert, setShowAlert] = useState(false);
  const [showCodigo, setShowCodigo] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setShowAlert(true);
  };

  const handleAlert = () => {
    setShowAlert(false);
    setShowCodigo(true);
  }

  return (
    <>
      {!showCodigo && (
        <div className="flex w-full h-full justify-center items-center">
          <div className="flex flex-col w-2/6 h-90 mt-30 p-10 rounded-2xl shadow-md bg-white">
            <div className="flex gap-4">
              <Link href="/">
                <ArrowLeft className="mr-2"/>
              </Link>

              <h2 className="text-3xl font-bold text-base-color">
                Esqueçeu a senha?
              </h2>
            </div>

            <p className="mt-[1rem] text-gray-600">
              Insira seu e-mail para verificação. Enviaremos um código para você.
            </p>

            <form onSubmit={handleSubmit} className="mt-[1rem] rounded-2xl">
              <div>
                <label className="block mb-[0.5rem] text-base-color">Email:</label>
                <input
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 border border-gray-300 rounded px-3"
                  type="email"
                  placeholder="Insira seu Email"/>
              </div>

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
      )}

      { showCodigo && <CodigoNovaSenha email={email} />}

      { showAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[1px]">
          <div className="w-11/12 max-w-sm bg-papel p-6 rounded-xl shadow-2xl text-center bg-white">
            <h2 className="text-lg font-bold mb-3 text-text-base-color">
                Código enviado!
            </h2>
            <p className="text-sm mb-5">
                Enviamos um código de verificação para&nbsp;
                <span className="font-semibold ">
                  {email}
                </span>.
            </p>
            <button
                onClick={handleAlert}
                className="mt-2 px-6 py-2 bg-gray-600 text-white font-semibold rounded-md
                    hover:bg-green-700 transition-colors duration-150 cursor-pointer">
                OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
