import { Injectable } from '@angular/core';
import { ID, Store, StoreConfig } from '@datorama/akita';

export interface User {
    firstName: string;
    lastName: string;
    token: string;
}

export interface SessionState {
    user: User | null;
}

export function createSession(user: User): User {
    return { ...user };
}

export function createInitialState(): SessionState {
    return {
        user: null
    };
}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {

    constructor() {
        super(createInitialState());
    }

    login(data: User) {
        const user = createSession(data);
        this.update({ user });
    }

    logout() {
        this.update(createInitialState());
    }
}
