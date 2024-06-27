import { z } from 'zod';

export const signInSchema = z.object({
  email: z
    .string({
      message: 'Campo de preenchimento obrigatório'
    })
    .email({
      message: 'E-mail invalido'
    })
    .min(1, 'O e-mail precisa de no minimo 1 caracter')
    .max(150, 'O e-mail pode ter no maximo 150 caracteres'),
  password: z
    .string({
      message: 'Campo de preenchimento obrigatório'
    })
    .min(8, 'A senha precisa de no minimo 8 caracteres')
    .max(50, 'A senha pode ter no maximo 50 caracteres')
});
