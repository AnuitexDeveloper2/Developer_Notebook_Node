import userModel from '../../dataAccess/dataEntities/users';
import * as authRepository from './auth.repository';

export const register = async (user: userModel) => {
   return authRepository.register(user)
}