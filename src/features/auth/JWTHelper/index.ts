import userModel from '../../../dataAccess/dataEntities/users';
import jwt from 'jsonwebtoken';


export const generateTokens = (userModel: userModel) => {
    if (userModel == null) {
      return userModel;
    }
    const user = {
      "role": userModel.role,
      "id": userModel._id
    }
  
    const accessToken = jwt.sign(user, process.env.SECRET || '', { expiresIn: process.env.ACCEESS_TOKEN_LIFE });
  
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET || '', { expiresIn: process.env.REFRESH_TOKEN_LIFE })
  
    const respons = {
      result: true,
      "AccessToken": accessToken,
      "RefreshToken": refreshToken,
      "User": userModel
    }
    return respons;
  }