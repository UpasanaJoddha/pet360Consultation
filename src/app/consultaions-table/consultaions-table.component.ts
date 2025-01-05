import { Component, inject, OnInit } from '@angular/core';

import { NewAppointmentDialogComponent } from '../new-appointment-dialog/new-appointment-dialog.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
@Component({
  selector: 'app-consultaions-table',
  templateUrl: './consultaions-table.component.html',
  styleUrls: ['./consultaions-table.component.css']
})
export class ConsultaionsTableComponent implements OnInit {

  // readonly dialog = inject(MatDialog);

  constructor(public dialog: MatDialog) { }

  dataFromDialog :any;
  ngOnInit(): void {
  }
  openDialog(){
    const dialogRef = this.dialog.open(NewAppointmentDialogComponent,{
      height: '90%',
      width: '40%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.dataFromDialog = result

    });

  }

}
