'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useSaveConfig } from '../hooks/useSaveConfig';
import { UsuarioFormData, usuarioSchema } from '../../types/usuario';

export default function UsuarioForm() {
  const {
  register,
  handleSubmit,
  formState: { errors },
  } = useForm<UsuarioFormData>({
    resolver: zodResolver(usuarioSchema),
  });

  const { save, loading } = useSaveConfig<UsuarioFormData>('user');
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const onSubmit = (data: UsuarioFormData) => save(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-stroke-700 rounded-2xl shadow p-6">
      <h2 className="mb-4 text-2xl font-semibold">Conta</h2>

      <div className="mb-6 flex items-center gap-4">
        <input
          id="avatar"
          type="file"
          accept="image/*"
          className="hidden"
          {...register('avatar' as any)}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setAvatarPreview(URL.createObjectURL(file));
          }}
        />

        <label htmlFor="avatar" className="relative cursor-pointer group">
          {avatarPreview ? (
            <img
              src={avatarPreview}
              alt="avatar"
              className="h-16 w-16 rounded-full object-cover ring-2"/>
          ) : (
            <UserCircleIcon className="h-16 w-16 text-gray-400" />
          )}

          <div className="absolute inset-0 flex items-center justify-center
                       rounded-full bg-black/50 opacity-0 transition-opacity
                       group-hover:opacity-100">
            <span className="text-xs font-medium text-white">
              Clique aqui
            </span>
          </div>
        </label>

        <span className="text-md text-gray-900">Selecione sua foto</span>
      </div>

      <div className="mb-4 text-md text-gray-900">
        <label htmlFor="nomeCompleto" className="label">
          Nome completo
        </label>
        <input
          id="nomeCompleto"
          type="text"
          placeholder="Seu nome"
          className="mt-1 block w-full rounded-md border border-gray-300
                     bg-white text-gray-900 shadow focus:ring-2 focus:outline-none
                     px-3 py-2"
          {...register('nomeCompleto')}/>
        {errors.nomeCompleto && (
          <p className="mt-1 text-sm text-red-600">{errors.nomeCompleto.message}</p>
        )}
      </div>

      <div className="mb-4 text-md text-gray-900">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="exemplo@email.com"
          className="mt-1 block w-full rounded-md border border-gray-300
                     bg-white text-gray-900 shadow focus:ring-2 focus:outline-none
                     px-3 py-2"
          {...register('email')}/>
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4 text-md text-gray-900">
        <label htmlFor="senha" className="label">
          Nova senha
        </label>
        <input
          id="senha"
          type="password"
          placeholder="********"
          className="mt-1 block w-full rounded-md border border-gray-300
                     bg-white text-gray-900 shadow focus:ring-2 focus:outline-none
                     px-3 py-2"
          {...register('senha')}/>
        {errors.senha && (
          <p className="mt-1 text-sm text-red-600">{errors.senha.message}</p>
        )}
      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center px-6 py-2 rounded-full
                     bg-gray-600 hover:bg-green-700 text-white font-medium
                     transition cursor-pointer disabled:opacity-50">
          {loading ? 'Salvando…' : 'Salvar'}
        </button>
      </div>
    </form>
  );
}
