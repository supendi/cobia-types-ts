export interface Account {
    id: string;
    name: string;
    email: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
}
export interface Registrant {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}
export interface AccountUpdateRequest {
    accountId: string;
    name: string;
}
export interface AccountGetRequest {
    accountId: string;
}
