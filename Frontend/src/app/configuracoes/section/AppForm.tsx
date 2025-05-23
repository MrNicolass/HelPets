'use client';

import { useForm } from 'react-hook-form';
import { useSaveConfig } from '../hooks/useSaveConfig';

type AppSettings = {
  tema: 'light' | 'dark' | 'system';
  lingua: string;
  padraoFilial: string;
  emailNotification: boolean;
};

function AppForm() {
  const { control, register, handleSubmit } = useForm<AppSettings>({
    defaultValues: { 
      tema: 'system',
      lingua: 'pt-BR',
      padraoFilial: '',
      emailNotification: true,
     },
  });

  const { save, loading } = useSaveConfig('app');

  const onSubmit = (data: AppSettings) =>  save(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border bg-white p-6 shadow-sm ">

      <h2 className="mb-4 text-lg font-semibold">
        Sistema
      </h2>

      <div className="mb-4">
        <label className="label">
          Tema
        </label>

        <select className="select ml-1" {...register('tema')}>
          <option value="light">Claro</option>
          <option value="dark">Escuro</option>
          <option value="system">Sistema</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="label">
          Idioma
        </label>
        
        <select className="select ml-1" {...register('lingua')}>
          <option value="pt-BR">Português (BR)</option>
          <option value="en-US">English (US)</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="label">
          Filial padraoFilial
        </label>

        <input
          className="input border ml-1 rounded-sm pl-1"
          {...register('padraoFilial')}
          placeholder="Ex.: Curitiba"/>
      </div>

      <button className="mt-22 btn-primary bg-gray-700/70 hover:bg-green-600/70 p-2 px-3 rounded-3xl text-white cursor-pointer "
      disabled={loading}>
        {loading ? 'Salvando…' : 'Salvar'}
      </button>
    </form>
  );
}

export default AppForm;