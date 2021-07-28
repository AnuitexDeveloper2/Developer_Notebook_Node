import userModel from '../../dataAccess/dataEntities/users';
import bcrypt from "bcrypt";
import errors from '../../common/errors';


export const register = async (user: userModel): Promise<userModel> => {
    const count = await userModel.countDocuments({email: user.email})
    if (count > 0) {
        throw new errors.BadRequestError("This email already exist")
    }
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
    const result = await userModel.create(user)
    return result
}

export const signIn = async (email: string, password: string): Promise<userModel> => {
    let user = await userModel.findOne({ email: email })
    if (!user) {
        throw new errors.BadRequestError("Invalid Email")
    }
    const isPasswordValid = checkPassword(password, user)
    if (!isPasswordValid) {
        throw new errors.BadRequestError("Invalid password")
    }
    return user
}

 function checkPassword(password: string, user: userModel) {
    const result = bcrypt.compareSync(password, user.password)
    if (!result) {
        return false
    }
    return true;
}