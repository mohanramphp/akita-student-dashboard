import { Injectable } from '@angular/core';
import { QueryEntity, ID } from '@datorama/akita';
import { Student } from './student.model';
import { StudentState, StudentStore } from './student.store';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class StudentQuery extends QueryEntity<StudentState, Student> {

    students$ = this.selectAll();
    studentsGraphData$ = this.selectAll().pipe(
        map(this.getStudentGraphData.bind(this))
    );

    constructor(protected store: StudentStore) {
        super(store);
    }

    getStudent(id: ID) {
        return this.getEntity(id);
    }

    getStudentGraphData(students: Array<Student>): { [key: string]: Array<string | number> } {
        let names = [];
        let quarterly = [];
        let halfyearly = [];
        let annual = [];
        students.forEach(s => {
            names = [...names, s.name];
            quarterly = [...quarterly, s.quarterlyScore];
            halfyearly = [...halfyearly, s.halfyearlyScore];
            annual = [...annual, s.annualScore];
        });
        return {
            names,
            quarterly,
            halfyearly,
            annual
        };
    }
}
