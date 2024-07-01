import axios from "axios";

import { AuthContext } from "@/contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { signInSchema } from "./schemas";
import { SignInType } from "./types";
import { HttpError } from "@/config/http";
import { delay } from "@/utils/delay-utils";

export const useSignIn = () => {
  const router = useRouter();
  const { signIn } = useContext(AuthContext);

  const methods = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
  });

  const handleSubmit = async (data: SignInType) => {
    try {
      await signIn(data);

      toast("Autenticando usuario", {
        type: "success",
      });

      await delay(5000);

      router.push("/chat");
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
