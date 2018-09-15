import {
  Component, Input, OnInit,
  ChangeDetectionStrategy, Output, EventEmitter
} from '@angular/core';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Student } from '../state/student.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
  @Input() students$: Observable<Array<Student>>;
  @Output() add: EventEmitter<void> = new EventEmitter<void>();
  @Output() edit: EventEmitter<ID> = new EventEmitter<ID>();
  @Output() delete: EventEmitter<ID> = new EventEmitter<ID>();

  constructor() { }

  ngOnInit() {
    this.students$.subscribe(d => console.log(d));
  }

}
