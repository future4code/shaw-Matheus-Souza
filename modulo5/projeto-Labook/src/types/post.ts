export enum POST_TYPES {
    NORMAL = 'NORMAL',
    EVENT = 'EVENT'
}
 
export type authenticationData = {
    id: string,
}
 
export type post = { 
    photo:string ,
    description:string ,
    type: POST_TYPES
}
 
export type dataLogin = {
    email: string,
    password: string,
} 