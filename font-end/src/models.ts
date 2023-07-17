export interface IUser {
    id?: string;
    adress?: string;
    name: string;
    email: string;
    password: string;
    number: number;
    isAdmin: boolean;
}
export interface ISignin_User {
    email: string;
    password: string;
    ConfirmPassword: string
}

export interface IFood {
    id?: string;
    name: string;
    Url_Img: string[];
    price: number;
    category: string; // Updated property name to "category"
}

export interface ICategory {
    id?: string;
    name: string;
}

