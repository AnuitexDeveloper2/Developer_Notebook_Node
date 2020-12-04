import { Request, Response } from 'express';
import userModel from '../../dataAccess/dataEntities/users';
export const register = async (user: userModel) => {
    const result = await userModel.create(user)
    return result
}