import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface StudentState extends EntityState<Student> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'student' })
export class StudentStore extends EntityStore<StudentState> {
  constructor() {
    super();
  }
}
