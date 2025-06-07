"use client";

export default function NewPass() {
  return (
    <main className="size-full" style={{ backgroundColor: "#f5efe1" }}>
      <div className="flex w-full h-full p-25">

        <div className="flex flex-col w-2/6 h-4/6 mt-30 p-10 rounded-2xl shadow-md bg-white">
          <h2 className="text-4xl font-bold text-base-color">
            Seja Bem-Vindo!
          </h2>
          <p className="mt-[0.5rem] text-base-color">
            Digite as suas informações abaixo
          </p>
          <form className="mt-[4rem] rounded-2xl">
            <div>
              <label className="block mb-[0.5rem] text-base-color">Email</label>
              <input
                className="w-full h-12 border border-gray-300 rounded px-3"
                type="email"
                placeholder="Insira seu Email"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-[0.5rem] text-base-color">Senha</label>
              <input
                className="w-full h-12 border border-gray-300 rounded px-3"
                type="password"
                placeholder="Insira sua Senha"
              />
            </div>
            <div className="flex justify-between items-center mt-6">
                <button
                className="button-color text-white px-6 py-2 rounded hover:bg-red-700"
                type="button"
                onClick={() => window.location.href = "/home"}
                >
                Entrar
                </button>
              <a className="link-color font-medium hover:underline" href="#">
                Esqueceu sua senha?
              </a>
            </div>
            <p className="text-center mt-4">
              Não possuí conta?{" "}
              <a className="link-color font-medium hover:underline" href="#">
                Registrar-se
              </a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
