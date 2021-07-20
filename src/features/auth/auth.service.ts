import userModel from '../../dataAccess/dataEntities/users';
import * as authRepository from './auth.repository';
import { generateTokens } from './JWTHelper';

export const register = async (user: userModel) => {
   const result = await authRepository.register(user)
   return generateTokens(result)
}

export const signIn = async (email: string, password: string) => {
   return await authRepository.signIn(email, password)
}