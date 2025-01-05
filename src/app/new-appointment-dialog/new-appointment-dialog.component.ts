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
      //petBreed: ['', [Validators.required, Validators.email]],
      petParent: ['', Validators.required],
      //phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      doctorName: ['', [Validators.required]],
      type: ['', Validators.required],
      timeSlot: [''],
      //tokenId:[''],
      //status:[]
    });
  }
  submitForm(){
    console.log('Form data:', this.userForm.value);
    this.dialogRef.close(this.userForm.value);
  }

}
