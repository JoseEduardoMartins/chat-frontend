import { AuthContext } from "@/contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { signInSchema } from "./schemas";
import { SignInType } from "./types";

export const useSignIn = () => {
  const { signIn } = useContext(AuthContext);

  const methods = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
  });

  const handleSubmit = async (data: SignInType) => {
    await signIn(data);
  };

  return {
    methods,
    handleSubmit,
  };
};
