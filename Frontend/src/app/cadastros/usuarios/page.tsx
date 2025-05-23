"use client";

import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function UsuariosPage() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMensagem("Cadastro de usuário realizado com sucesso!");
        setNome("");
        setEmail("");
    };

    return (
        <div className="min-h-screen bg-[#f5efe1] p-8">
            {/* Cabeçalho com botão de voltar */}
            <div className="flex items-center gap-4">
                <Link
                    href="/cadastros"
                    className="text-gray-700 hover:text-black transition p-2 rounded-full inline-flex items-center justify-center"
                    style={{ lineHeight: 0 }}
                >
                    <ArrowLeft size={24} />
                </Link>
                <div className="flex-1 flex justify-center -ml-8">
                    <PageTitle title="Cadastro de Usuários" />
                </div>
            </div>

            {/* Descrição */}
            <div className="flex justify-center mt-4">
                <p className="text-gray-700">
                    Cadastre abaixo um novo usuário do sistema.
                </p>
            </div>

            {/* Formulário de Cadastro centralizado em bloco branco */}
            <div className="flex justify-center mt-10">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-lg shadow-md p-8 max-w-md w-full flex flex-col items-center space-y-4"
                >
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Nome</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                        />
                    </div>

                    <button
                        type="submit"
                        className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 w-full"
                    >
                        Cadastrar Usuário
                    </button>

                    {mensagem && (
                        <div className="mt-4 rounded-md bg-green-100 p-4 text-green-800 shadow w-full text-center">
                            {mensagem}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
