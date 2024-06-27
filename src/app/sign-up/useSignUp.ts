import { AuthContext } from "@/contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { signUpSchema } from "./schemas";
import { SignUpType } from "./types";

export const useSignUp = () => {
  const { signUp } = useContext(AuthContext);

  const methods = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
  });

  const handleSubmit = async (data: SignUpType) => {
    await signUp(data);
  };

  return {
    methods,
    handleSubmit,
  };
};
