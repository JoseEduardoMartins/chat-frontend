import { http } from "../config/http";

export type User = {
  id: number;
  name: string;
  phone: string;
  email: string;
  password: string;
};

export type SignInType = {
  email: string;
  password: string;
};

type SignInResponseType = {
  token: string;
  user: User;
};

export const signInRequest = async ({
  email,
  password,
}: SignInType): Promise<SignInResponseType> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const { data } = await http.post(`/auth/sign-in/`, { email, password });
    const { token, user } = data;

    return { token, user };
  } catch (error) {
    throw error;
  }
};

export type SignUpType = {
  name: string;
  phone: string;
  email: string;
  password: string;
};

type SignUpResponseType = {
  id: number;
};

export const signUpRequest = async (
  user: SignUpType
): Promise<SignUpResponseType> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const { data } = await http.post(`/auth/sign-up/`, user);
    return data;
  } catch (error) {
    throw error;
  }
};

export type ConfirmSignUpType = {
  email: string;
  securityCode: string;
};

export const confirmSignUpRequest = async ({
  email,
  securityCode,
}: ConfirmSignUpType): Promise<void> => {
  // eslint-disable-next-line no-useless-catch
  try {
    await http.post(`/auth/confirm-sign-up/`, {
      email,
      securityCode,
    });
  } catch (error) {
    throw error;
  }
};

export type RecoverUserImformationType = {
  token: string;
  user: User;
};

export const recoverUserImformation =
  async (): Promise<RecoverUserImformationType> => {
    // eslint-disable-next-line no-useless-catch
    try {
      const { data } = await http.get(`/auth/recover-user-imformation/`);

      return data;
    } catch (error) {
      throw error;
    }
  };
