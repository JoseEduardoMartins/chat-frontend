"use client";

import { http } from "@/config/http";
import {
  User,
  signInRequest,
  SignInType,
  signUpRequest,
  SignUpType,
  confirmSignUpRequest,
  recoverUserImformation,
} from "@/services/auth";
import { useRouter } from "next/navigation";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import { ReactNode, createContext, useEffect, useState } from "react";

type ConfirmSignUpType = {
  securityCode: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (data: SignInType) => Promise<void>;
  signUp: (data: SignUpType) => Promise<void>;
  confirmSignUp: (data: ConfirmSignUpType) => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthProviderType = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderType) {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const isAuthenticated = !!user;

  async function signIn(data: SignInType) {
    const { user, token } = await signInRequest(data);

    setUser(user);

    setCookie(undefined, "chat.token", token, {
      maxAge: 60 * 60 * 1, //1 hour
    });

    http.defaults.headers.token = token;

    router.push("/");
  }

  async function signUp(data: SignUpType) {
    const { id } = await signUpRequest(data);

    setUser({ id, ...data });

    router.push("/confirm-sign-up");
  }

  async function confirmSignUp(data: ConfirmSignUpType) {
    if (user?.email)
      await confirmSignUpRequest({
        email: user.email,
        securityCode: data.securityCode,
      });

    setUser(null);
    router.push("/sign-in");
  }

  async function signOut() {
    destroyCookie(undefined, "chat.token");
    setUser(null);
  }

  useEffect(() => {
    const { "chat.token": token } = parseCookies();

    if (token) {
      recoverUserImformation()
        .then((response) => {
          setUser(response);
          setLoading(false);
        })
        .catch(() => router.push("/sign-in"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signUp, confirmSignUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
