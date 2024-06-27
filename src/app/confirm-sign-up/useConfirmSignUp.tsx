import { AuthContext } from "@/contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ConfirmSignUpType } from "./types";
import { confirmSignUpSchema } from "./shemas";

export const useConfirmSignUp = () => {
  const { confirmSignUp } = useContext(AuthContext);

  const methods = useForm<ConfirmSignUpType>({
    resolver: zodResolver(confirmSignUpSchema),
  });

  const handleSubmit = async (data: ConfirmSignUpType) => {
    await confirmSignUp(data);
  };

  return {
    methods,
    handleSubmit: confirmSignUp,
  };
};
