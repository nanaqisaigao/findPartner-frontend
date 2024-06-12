import {UserType} from "../models/user";

/**
 * 用户状态
 */
let currentUser: UserType;

const setCurrentUserState = (user)=>{
    currentUser = user;

}

const getCurrentUserState = ():UserType =>{
    return currentUser;
}

export {setCurrentUserState,getCurrentUserState}