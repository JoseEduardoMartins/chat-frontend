import axios from "axios";

import { AuthContext } from "@/contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signUpSchema } from "./schemas";
import { SignUpType } from "./types";
import { delay } from "@/utils/delay-utils";
import { toast } from "react-toastify";
import { HttpError } from "@/config/http";

export const useSignUp = () => {
  const router = useRouter();
  const { signUp } = useContext(AuthContext);

  const methods = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
  });

  const handleSubmit = async (data: SignUpType) => {
    try {
      await signUp(data);

      toast("Registrando usuario", {
        type: "success",
      });

      await delay(5000);

      router.push("/confirm-sign-up");
    } catch (error) {
      if (!axios.isAxiosError(error)) return;

      const { response } = error as HttpError;

      response?.data.message.map((errorMessage) =>
        toast(errorMessage, {
          type: "error",
        })
      );
    }
  };

  return {
    methods,
    handleSubmit,
  };
};
