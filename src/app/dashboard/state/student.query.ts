import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Student } from './student.model';
import { StudentState, StudentStore } from './student.store';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class StudentQuery extends QueryEntity<StudentState, Student> {

    studentsGraphData$ = this.selectAll().pipe(
        map(this.getStudentGraphData.bind(this))
    );

    constructor(protected store: StudentStore) {
        super(store);
    }

    getStudentGraphData(students: Array<Student>): { [key: string]: Array<string | number> } {
        return students.reduce((
            { names: nArray, quarterly: qArray, halfyearly: hArray, annual: aArray },
            { name, quarterlyScore, halfyearlyScore, annualScore }) => {
            return {
                names: [...nArray, name],
                quarterly: [...qArray, quarterlyScore],
                halfyearly: [...hArray, halfyearlyScore],
                annual: [...aArray, annualScore]
            };
        }, { names: [], quarterly: [], halfyearly: [], annual: [] });
    }

}
