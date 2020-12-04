import userModel from '../../dataAccess/dataEntities/users';
import * as authRepository from './auth.repository';

export const register = async (user: userModel) => {
   const test = 1
   return authRepository.register(user)
}