import axios from "axios";

import { AuthContext } from "@/contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ConfirmSignUpType } from "./types";
import { confirmSignUpSchema } from "./shemas";
import { toast } from "react-toastify";
import { delay } from "@/utils/delay-utils";
import { useRouter } from "next/navigation";
import { HttpError } from "@/config/http";

export const useConfirmSignUp = () => {
  const router = useRouter();
  const { confirmSignUp } = useContext(AuthContext);

  const methods = useForm<ConfirmSignUpType>({
    resolver: zodResolver(confirmSignUpSchema),
  });

  const handleSubmit = async (data: ConfirmSignUpType) => {
    try {
      await confirmSignUp(data);

      toast("Verificando codigo", {
        type: "success",
      });

      await delay(5000);

      router.push("/sign-in");
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
