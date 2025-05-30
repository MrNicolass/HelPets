import PageTitle from "@/components/PageTitle";
import ConfiguracoesLayout from "./ConfigLayout";
import UsuarioForm from "./section/UsuarioForm";
import AppForm from "./section/AppForm";

export default function TextPage() {

  return (
    <ConfiguracoesLayout>
      <UsuarioForm/>
      <AppForm/>
    </ConfiguracoesLayout>
  );
}
