import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default function IsPage() {
  return (
    <div className="min-h-screen bg-[#f5efe1] p-8">
      {/* Título da Página */}
      <div className="flex justify-center">
        <PageTitle title="Página de Cadastros" />
      </div>
      {/* Botões de Navegação */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Link
          href="/cadastros/usuarios"
          className="block rounded-2xl bg-white shadow-md hover:shadow-lg p-6 text-center transition"
        >
          <h2 className="text-xl font-semibold">Usuários</h2>
          <p className="text-sm text-gray-500">Gerenciar usuários do sistema</p>
        </Link>

        <Link
          href="/cadastros/animais"
          className="block rounded-2xl bg-white shadow-md hover:shadow-lg p-6 text-center transition"
        >
          <h2 className="text-xl font-semibold">Animais</h2>
          <p className="text-sm text-gray-500">Cadastrar animais resgatados</p>
        </Link>

        <Link
          href="/cadastros/tutores"
          className="block rounded-2xl bg-white shadow-md hover:shadow-lg p-6 text-center transition"
        >
          <h2 className="text-xl font-semibold">Tutores</h2>
          <p className="text-sm text-gray-500">Cadastro de tutores</p>
        </Link>

        <Link
          href="/cadastros/filiais"
          className="block rounded-2xl bg-white shadow-md hover:shadow-lg p-6 text-center transition"
        >
          <h2 className="text-xl font-semibold">Filiais</h2>
          <p className="text-sm text-gray-500">Cadastrar novas filiais</p>
        </Link>
      </div>
    </div>
  );
}
