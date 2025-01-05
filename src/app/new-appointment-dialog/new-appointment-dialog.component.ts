import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-appointment-dialog',
  templateUrl: './new-appointment-dialog.component.html',
  styleUrls: ['./new-appointment-dialog.component.css']
})
export class NewAppointmentDialogComponent implements OnInit {

  userForm: any;
  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<NewAppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      petName: ['', Validators.required],
      petParent: ['', Validators.required],
      doctorName: ['', [Validators.required]],
      type: ['', Validators.required],
      timeSlot: [''],
    });
  }
  submitForm(){
    console.log('Form data:', this.userForm.value);
    this.dialogRef.close(this.userForm.value);
  }

}
