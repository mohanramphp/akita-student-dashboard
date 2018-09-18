import { Injectable } from '@angular/core';
import { ID, Store, StoreConfig } from '@datorama/akita';

import { Session, User, createSession } from './session.model';

export interface SessionState extends Session { } // if state need additional param declare here

export function createInitialState(): SessionState {
    return {
        user: null
    };
}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<Session> {

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
