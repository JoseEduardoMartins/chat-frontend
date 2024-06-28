"use client";

import { Button, Form, FormField, Link } from "@/components";
import { useSignUp } from "./useSignUp";

const SignUp = () => {
  const { methods, handleSubmit } = useSignUp();

  return (
    <main className="w-full min-h-screen py-4 px-4">
      <div className="w-full max-w-xl m-auto flex flex-col items-center gap-y-6 mt-2">
        <a className="text-white text-2xl font-bold" href="/#">
          Chat
        </a>
        <div className="w-full pt-8 pb-10 px-6 md:px-10 border border-zinc-400 rounded-lg">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-white text-xl font-bold ">Criar sua conta</h2>
            <Form methods={methods} handleSubmit={handleSubmit}>
              <FormField label="Nome" name="name" type="text" required={true} />
              <FormField
                label="Telefone"
                name="phone"
                type="tel"
                required={true}
              />
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
              <Button>Criar conta</Button>
            </Form>
            <h4 className="text-white">
              Já tem uma conta? <Link href="/sign-in">Fazer login</Link>
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
