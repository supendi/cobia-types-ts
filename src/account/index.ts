//Represents account model
export interface Account {
    id: string
    name: string,
    email: string,
    phone: string,
    createdAt: Date,
    updatedAt: Date | null,
    deletedAt: Date | null
}

//Represents the model for register a new account
export interface Registrant {
    name: string,
    email: string,
    phone: string,
    password: string,
    confirmPassword: string
}

//Represents the model for updating existing account
export interface AccountUpdateRequest {
    accountId: string
    name: string,
}

//Represent the request params to get an account detail
export interface AccountGetRequest {
    accountId: string
}
