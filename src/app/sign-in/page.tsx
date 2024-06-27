"use client";

import { Form, FormField } from "@/components/form";
import { Button, Link } from "@/components";
import { useSignIn } from "./useSignIn";

const SignIn = () => {
  const { methods, handleSubmit } = useSignIn();

  return (
    <main className="w-full min-h-screen py-4 px-4">
      <div className="w-full max-w-xl m-auto flex flex-col items-center gap-y-6 mt-2">
        <a className="text-white text-2xl font-bold" href="/#">
          Chat
        </a>
        <div className="w-full pt-8 pb-10 px-6 md:px-10 border border-zinc-400 rounded-lg">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-white text-xl font-bold ">
              Entre com a sua conta
            </h2>
            <Form methods={methods} handleSubmit={handleSubmit}>
              <FormField
                label="E-mail"
                name="email"
                type="email"
                placeholder="nome@email.com"
                required={true}
              />
              <FormField
                label="Senha"
                name="password"
                type="password"
                required={true}
              />
              <Link href="/password-recovery">Esqueci minha senha</Link>
              <Button>Entrar</Button>
            </Form>
            <h4 className="text-white">
              Não tem conta? <Link href="/sign-up">Cadastrar</Link>
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
