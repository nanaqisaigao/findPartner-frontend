/**
 * 用户类别
 */
export type CurrentUser = {
    id: number;
    username?: string;
    userAccount: string;
    avatarUrl: string;
    gender?: number;
    phone?: string;
    email?: string;
    userStatus?: number;
    userRole?: number;
    createTime?: Date;
    comment?: string;
    tags:string[];
};