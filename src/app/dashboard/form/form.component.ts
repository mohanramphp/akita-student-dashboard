import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Student } from '../state/index';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() formData: Student;
  formGroup: FormGroup;
  @Output() updateformData: EventEmitter<Student> = new EventEmitter<Student>();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      id: [this.formData.id, Validators.required],
      name: [this.formData.name, Validators.required],
      sex: [this.formData.sex, Validators.required],
      standard: [this.formData.standard, Validators.required],
      quarterlyScore: [this.formData.quarterlyScore],
      halfyearlyScore: [this.formData.halfyearlyScore],
      annualScore: [this.formData.annualScore],
    });
  }

  get studentName() {
    return this.formGroup.get('name').value;
  }

  resetForm() {
    this.formGroup.reset({
      ...this.formData
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
    this.updateformData.emit(this.formGroup.value);
  }

}
