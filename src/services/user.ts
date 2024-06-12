import myAxios from '../plungins/myAxios';
import {setCurrentUserState} from "../states/user.ts";

/**
 * 用来封装获取当前用户，不过当前有bug
 */
export const getCurrentUser  = async () =>{
    // 不存在则从远程获取
    const res = await myAxios.get('/user/current');
    if (res.code === 0) {
        setCurrentUserState(res.data);
        return res.data;
    }
    return null;

}