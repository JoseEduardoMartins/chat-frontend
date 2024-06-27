import { z } from "zod";

export const confirmSignUpSchema = z.object({
  securityCode: z
    .string({
      message: "Campo de preenchimento obrigatório",
    })
    .min(6, "Campo precisa de no minimo 6 caracter")
    .max(6, "Campo pode ter no maximo 6 caracteres"),
});
