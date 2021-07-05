import userModel from '../../dataAccess/dataEntities/users';
import * as authRepository from './auth.repository';

export const register = async (user: userModel) => {
   return await authRepository.register(user)
}

export const signIn = async (email: string, password: string) => {
   return await authRepository.signIn(email, password)
}