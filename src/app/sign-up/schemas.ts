import { formatPhone } from "@/utils/formatters/number-formatter";
import { z } from "zod";

export const signUpSchema = z.object({
  name: z
    .string({
      message: "Campo de preenchimento obrigatório",
    })
    .min(1, "Campo precisa de no minimo 1 caracter")
    .max(300, "Campo pode ter no maximo 300 caracteres"),
  phone: z
    .string({
      message: "Campo de preenchimento obrigatório",
    })
    .min(17, "Campo precisa de no minimo 11 caracters")
    .max(17, "Campo pode ter no maximo 11 caracteres")
    .refine((value) => formatPhone(value)),
  email: z
    .string({
      message: "Campo de preenchimento obrigatório",
    })
    .email({
      message: "Campo deve ser um e-mail valido",
    })
    .min(1, "Campo precisa de no minimo 1 caracter")
    .max(150, "Campo pode ter no maximo 150 caracteres"),
  password: z
    .string({
      message: "Campo de preenchimento obrigatório",
    })
    .min(8, "Campo precisa de no minimo 8 caracteres")
    .max(50, "Campo pode ter no maximo 50 caracteres"),
});
