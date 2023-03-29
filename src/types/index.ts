export interface UserProps {
    isLogin: boolean;
    nickname?: string;
    _id?: string;
    column?: string;
    email?: string;
    description?: string;
    avatar?: ImageProps;
}
export interface ImageProps {
    _id?: string;
    url?: string;
    fitUrl?: string;
    createdAt?: string;
}
export interface GlobalDataProps {
    user: UserProps
    token: string;

}  