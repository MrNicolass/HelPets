import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TutoresPage() {
  return (
    <div className="min-h-screen bg-[#f5efe1] p-8">
      {/* Cabeçalho com botão de voltar */}
      <div className="flex items-center gap-4">
        <Link href="/cadastros" className="text-gray-700 hover:text-black transition">
          <ArrowLeft size={24} />
        </Link>
        <div className="flex-1 flex justify-center">
          <PageTitle title="Cadastro de Tutores" />
        </div>
      </div>

      {/* Descrição */}
      <p className="mt-4 text-gray-700">Cadastros.</p>
    </div>
  );
}
