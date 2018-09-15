import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { Session, initialSessionState, User } from './session.model';

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<Session> {

    constructor() {
        super(initialSessionState);
    }

    login(user: User) {
        this.update({ user });
    }

    logout() {
        this.update(initialSessionState);
    }
}
