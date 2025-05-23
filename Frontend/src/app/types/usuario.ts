import { z } from "zod";

export const usuarioSchema = z.object({
  nomeCompleto: z.string().min(2, "Nome muito curto"),
  email:        z.string().email("Email inválido"),
  senha:        z.string().min(8, "Mínimo 8 caracteres").optional(),
});

export type UsuarioFormData = z.infer<typeof usuarioSchema>;
