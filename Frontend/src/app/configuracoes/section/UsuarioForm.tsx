'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useSaveConfig } from '../hooks/useSaveConfig';

const schema = z.object({
  nomeCompleto: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  senha: z.string().min(8, 'Mínimo 8 caracteres').optional(),
});

type FormData = z.infer<typeof schema>;

export default function UsuarioForm() {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { save, loading } = useSaveConfig('user');
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  function onSubmit(data: FormData) {
    save(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border bg-white p-6 shadow-sm">

      <h2 className="mb-4 text-lg font-semibold">
        Conta
      </h2>

      <div className="mb-5 flex items-center gap-4">
        <input
          id="avatar"
          type="file"
          accept="image/*"
          className="hidden"
          {...register('avatar' as any)}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setAvatarPreview(URL.createObjectURL(file));
          }}/>

        <label htmlFor="avatar"
          className="relative cursor-pointer group">

          {avatarPreview ? (
            <img
              src={avatarPreview}
              alt="avatar"
              className="h-16 w-16 rounded-full object-cover ring-2 ring-amber-500"/>
          ) : (
            <UserCircleIcon className="h-16 w-16 text-gray-400" />
          )}

          <div className="absolute inset-0 flex items-center 
          justify-center rounded-full bg-black/50 opacity-0 
          transition-opacity group-hover:opacity-100">

            <span className="text-xs font-medium text-white">
              Clique aqui
            </span>
          </div>
        </label>

        <span className="text-md">
          Selecione sua foto
        </span>
      </div>

      <div className="mb-4">
        <label className="label">
          Nome completo:
        </label>

        <input className="input border ml-1 rounded-sm pl-1"
          {...register('nomeCompleto')}
          placeholder="Seu nome"/>

        {formState.errors.nomeCompleto && (
          <p className="error text-red-600/80 ml-32">{formState.errors.nomeCompleto.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="label">
          Email:
        </label>

        <input className="input border ml-1 rounded-sm pl-1 w-66"
          type="email"
          {...register('email')}
          placeholder="exemplo@email.com"/>

        {formState.errors.email && (
          <p className="error text-red-600/80 ml-13">{formState.errors.email.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="label">
          Nova senha:
        </label>
        <input
          className="input border ml-1 rounded-sm pl-1 w-54"
          type="password"
          {...register('senha')}
          placeholder="********"/>

        {formState.errors.senha && (
          <p className="error text-red-600/80 ml-24">{formState.errors.senha.message}</p>
        )}
      </div>

      <button className="btn-primary bg-gray-700/70 hover:bg-green-600/70 p-2 px-3 rounded-3xl text-white cursor-pointer "
      disabled={loading}>
        {loading ? 'Salvando…' : 'Salvar'}
      </button>
    </form>
  );
}
