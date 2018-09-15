export interface User {
    firstName: string;
    lastName: string;
    token: string;
}

export interface Session {
    user: User | null;
}

/* {
    firstName: 'Mohan Ram',
    lastName: 'Ratnakumar',
    token: 'ab123abde'
} */
export const initialSessionState: Session = {
    user: null
};
