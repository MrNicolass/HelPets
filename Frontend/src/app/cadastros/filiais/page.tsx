"use client";

import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FiliaisPage() {
    const [telefone, setTelefone] = useState("");
    const [localizacao, setLocalizacao] = useState("");
    const [tag, setTag] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | "">("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Remove os caracteres não numéricos para validar a quantidade de dígitos
        const telefoneNumeros = telefone.replace(/\D/g, "");
        if (telefoneNumeros.length !== 11) {
            setMensagem("Número de telefone inválido. Use o formato (99) 99999-9999.");
            setTipoMensagem("erro");
            return;
        }
        setMensagem("Cadastro da filial realizada com sucesso!");
        setTipoMensagem("sucesso");
        setTelefone("");
        setLocalizacao("");
        setTag("");
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
                    <PageTitle title="Cadastro de Filiais" />
                </div>
            </div>

            {/* Descrição */}
            <div className="flex justify-center mt-4">
                <p className="text-gray-700">
                    Cadastre abaixo uma nova filial ao sistema.
                </p>
            </div>

            {/* Formulário de Cadastro centralizado em bloco branco */}
            <div className="flex justify-center mt-10">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-lg shadow-md p-8 max-w-md w-full flex flex-col items-center space-y-4"
                >
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Telefone</label>
                        <input
                            type="tel"
                            value={telefone}
                            onChange={(e) => {
                                // Permite apenas números e formata como (99) 99999-9999
                                let value = e.target.value.replace(/\D/g, "");
                                if (value.length > 11) value = value.slice(0, 11);
                                if (value.length > 0) {
                                    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
                                    value = value.replace(/(\d{5})(\d{1,4})$/, "$1-$2");
                                }
                                setTelefone(value);
                            }}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                            placeholder="(99) 99999-9999"
                            maxLength={15}
                            inputMode="tel"
                            autoComplete="tel"
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Endereço</label>
                        <input
                            type="text"
                            value={localizacao}
                            onChange={(e) => setLocalizacao(e.target.value)}
                            required
                            placeholder="Rua, número, bairro, cidade, UF"
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                            autoComplete="street-address"
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Número da Filial</label>
                        <input
                            type="number"
                            value={tag}
                            onChange={(e) => setTag(e.target.value.replace(/\D/, ""))}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                            min={0}
                            step={1}
                        />
                    </div>

                    <button
                        type="submit"
                        className="rounded-md bg-[#6a7282] px-4 py-2 text-white hover:bg-[#565d6b] w-full"
                    >
                        Cadastrar Nova Filial
                    </button>

                    {mensagem && (
                        <div
                            className={`mt-4 rounded-md p-4 shadow w-full text-center ${
                                tipoMensagem === "erro"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-green-100 text-green-800"
                            }`}
                        >
                            {mensagem}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
