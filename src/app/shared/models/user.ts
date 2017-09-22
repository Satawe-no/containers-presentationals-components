/** Main interface for User */
export interface IUser {
    _id: string;
    picture: string;
    name: string;
    gender: string;
    age: number;
    phone: string;
    email: string;
    isActive: boolean;
}