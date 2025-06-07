'use client';

import { useForm } from 'react-hook-form';
import { useSaveConfig } from '../hooks/useSaveConfig';
import { AppSettings } from '../../types/app-settings';

function AppForm() {
  const { register, handleSubmit, control } = useForm<AppSettings>({
    defaultValues: { 
      tema: 'system',
      lingua: 'pt-BR',
      padraoFilial: '',
      emailNotification: true,
     },
  });

  const { save, loading } = useSaveConfig<AppSettings>('app');
  const onSubmit = (data: AppSettings) => save(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-stroke-700 rounded-2xl shadow p-6">

      <h2 className="mb-4 text-2xl font-semibold">
        Sistema
      </h2>

      <div className="mb-4 text-md text-gray-900">
        <label className="label">
          Tema:
        </label>

        <select className="mt-1 block w-full rounded-md border border-gray-300 bg-white  text-gray-900 shadow-sm focus:ring-2 focus:outline-none h-7"
         {...register('tema')}>
          <option value="light">Claro</option>
          <option value="dark">Escuro</option>
          <option value="system">Sistema</option>
        </select>
      </div>

      <div className="mb-4 text-md text-gray-900">
        <label className="label">
          Idioma:
        </label>
        
        <select className="mt-1 block w-full rounded-md border border-gray-300 bg-white  text-gray-900 shadow-sm focus:ring-2 focus:outline-none h-7"
        {...register('lingua')}>
          <option value="pt-BR">Português (BR)</option>
          <option value="en-US">English (US)</option>
        </select>
      </div>

      <div className="mb-6 text-md text-gray-900">
        <label className="label">
          Filial Padrão:
        </label>
        <input
            type="text"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-gray-900 shadow focus:ring-2 focus:outline-none px-3 py-2"
            placeholder="Ex.: Curitiba"
            {...register('padraoFilial')}/>
      </div>

      <div className="md:col-span-2 flex items-center">
        <input
          type="checkbox"
          id="emailNotification"
          className="h-5 w-5 text-green-600 rounded border-gray-300  focus:ring-green-500"
          {...register('emailNotification')}/>
        <label htmlFor="emailNotification" className="ml-2 text-sm text-gray-700">
          Receber notificações por email
        </label>
      </div>

      <div className="lg:mt-26 flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center px-6 py-2 rounded-full bg-gray-600 hover:bg-green-700 text-white font-medium transition cursor-pointer">
          {loading ? 'Salvando…' : 'Salvar'}
        </button>
      </div>
    </form>
  );
}

export default AppForm;