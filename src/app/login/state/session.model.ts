export interface User {
    firstName: string;
    lastName: string;
    token: string;
}

export interface Session {
    user: User | null;
}

export function createSession(user: User) {
    return { ...user };
}
