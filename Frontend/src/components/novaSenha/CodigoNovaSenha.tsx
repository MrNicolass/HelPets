import React, { useState, useRef, ChangeEvent, KeyboardEvent, ClipboardEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface CodigoNovaSenhaProps {
  email: string;
}

const CodigoNovaSenha: React.FC<CodigoNovaSenhaProps> = ({ email }) => {
  const router = useRouter();
  const codeLength = 5;

  const [values, setValues] = useState<string[]>(Array(codeLength).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, idx: number) => {
    const { key, metaKey } = e;
    if (
      !/^[0-9]$/.test(key) &&
      key !== "Backspace" &&
      key !== "Delete" &&
      key !== "Tab" &&
      !metaKey
    ) {
      e.preventDefault();
    }
    if ((key === "Backspace" || key === "Delete") && !values[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const digit = e.target.value.replace(/\D/, "");
    const newVals = [...values];
    newVals[idx] = digit;
    setValues(newVals);

    if (digit && idx < codeLength - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const paste = e.clipboardData.getData("text").trim();

    if (!new RegExp(`^[0-9]{${codeLength}}$`).test(paste)) return;
    const digits = paste.split("");
    setValues(digits);

    digits.forEach((d, i) => {
      if (inputsRef.current[i]) {
        inputsRef.current[i]!.value = d;
      }
    });
    inputsRef.current[codeLength - 1]?.focus();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = values.join("");
    if (code.length < codeLength) return;
    router.push("/newpass");
  };

  return (
    <div className="flex items-center justify-center h-[60vh] md:h-[70vh] mt-30 px-4">
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-3xl font-semibold mb-4">
          Verifique seu email
        </h1>

        <p className="text-sm mb-6 text-center">
          enviamos um código de {codeLength} dígitos para o email {email}, insira-o
          abaixo
        </p>

        <form onSubmit={handleSubmit} id="otp-form">
          <div className="flex items-center justify-center gap-3 mb-4">
            {values.map((val, idx) => (
              <input
                key={idx}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={val}
                onChange={(e) => handleChange(e, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                onPaste={handlePaste}
                ref={(el) => { inputsRef.current[idx] = el; }}
                className="
                  w-14 h-14 text-center text-2xl font-extrabold
                  bg-gray-500/20 border border-transparent hover:bg-gray-600/30
                  rounded p-4 outline-none focus:bg-gray-600/50 focus:ring-2"/>
            ))}
          </div>

          <div className="max-w-[260px] mx-auto">
            <button
              type="submit"
              className="
                w-full inline-flex justify-center whitespace-nowrap
                rounded-lg bg-blue-950 px-3.5 py-2.5 text-sm font-medium text-white
                shadow-sm shadow-indigo-950/10 hover:bg-green-700
                focus:outline-none focus:ring focus:ring-indigo-300
                transition-colors duration-150 cursor-pointer">
              Verificar código
            </button>
          </div>
        </form>

        <div className="text-sm text-slate-500 mt-4 text-center">
          Não recebeu o código?{" "}
          <button
            type="button"
            className="font-medium text-gray-900 cursor-pointer"
            onClick={() => {
            }}>
            Reenviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodigoNovaSenha;