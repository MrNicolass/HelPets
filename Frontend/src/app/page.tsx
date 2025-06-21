"use client";
import DefaultInput from "@/components/Inputs/DefaultInput";
import "@/styles/login/loginStyle.css";

export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f5efe1" }}>
      <div className="flex flex-col md:flex-row w-full h-full items-center justify-center p-4 sm:p-10">
        <section className="w-4/6 h-full items-center pl-10 pr-10 pb-10">
          <img
            src="/images/helpetslohoexemplo.png"
            className="w-full h-full rounded-lg mt-[-4rem] ml-[-2rem]"
            alt="Decorative HelPets Logo"
          />
        </section>
        <section className="flex flex-col w-2/6 h-6/6 sm:w-3/6 sm:h-3/6 md:w-4/6 md:h-4/6 lg:w-4/6 mt-30 sm:mt-0 mb-30 sm:mb-0 p-10 rounded-2xl shadow-md bg-white">
          <h2 className="text-4xl font-bold text-base-color">
            Seja Bem-Vindo!
          </h2>
          <p className="mt-[0.5rem] text-base-color">
            Digite as suas informações abaixo
          </p>
          <form className="box-content mt-[2rem] max-w-full max-h-full">
            <div>
              <label className="block mb-[0.5rem] text-base-color">Email</label>
              <DefaultInput style="outline" type="email" placeholder="Insira seu Email"/>
            </div>
            <div className="mt-4">
              <label className="block mb-[0.5rem] text-base-color">Senha</label>
              <DefaultInput style="outline" type="password" placeholder="Insira sua Senha"/>
            </div>
            <div className="flex justify-between items-center mt-6">
                <button
                className="button-color text-white w-3/6 h-10 rounded hover:bg-red-700"
                type="button"
                onClick={() => window.location.href = "/home"}
                >
                Entrar
                </button>
              <a className="link-color w-3/6 text-right font-medium hover:underline" href="#">
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
        </section>
      </div>
    </main>
  );
}
