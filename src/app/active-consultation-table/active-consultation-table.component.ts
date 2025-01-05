import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-active-consultation-table',
  templateUrl: './active-consultation-table.component.html',
  styleUrls: ['./active-consultation-table.component.css']
})
export class ActiveConsultationTableComponent implements OnInit {

  @Input() newConsultation: any;
  @ViewChild(MatTable)
  table!: MatTable<any>;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    let data = changes.newConsultation.currentValue;
    let newData:ConsultationInfo = {
      petName: data.petName,
      petBreed: 'Dog - Golden Retriever',
      petParent: data.petParent,
      phone: '856856585',
      timeSlot: data.timeSlot,
      tokenId: 'Token - 1',
      doctorName: data.doctorName,
      type: data.type,
      status: 'Upcoming'
    }
    this.dataSource.push(newData);
    this.table.renderRows()
  }

  displayedColumns: string[] = ['timeSlot', 'petInfo', 'petParent', 'doctor', 'status'];

  dataSource: ConsultationInfo[] = [
    {petName: 'Bruno', petBreed: 'Dog - Golden Retriver', petParent: 'Suranjana Ghosh', phone: '778767598', doctorName:'Dr. Jess Harris',type:'Check-Up',timeSlot:'8:00 PM',tokenId:'Token - 1',status:'Upcoming'},
    {petName: 'Bruno', petBreed: 'Dog - Golden Retriver', petParent: 'Suranjana Ghosh', phone: '778767598', doctorName:'Dr. Jess Harris',type:'Check-Up',timeSlot:'8:00 PM',tokenId:'Token - 1',status:'Ongoing'},
    {petName: 'Bruno', petBreed: 'Dog - Golden Retriver', petParent: 'Suranjana Ghosh', phone: '778767598', doctorName:'Dr. Jess Harris',type:'Check-Up',timeSlot:'8:00 PM',tokenId:'Token - 1',status:'In progress'},
    {petName: 'Bruno', petBreed: 'Dog - Golden Retriver', petParent: 'Suranjana Ghosh', phone: '778767598', doctorName:'Dr. Jess Harris',type:'Check-Up',timeSlot:'8:00 PM',tokenId:'Token - 1',status:'Completed'},
  ];

}
export interface ConsultationInfo {
  petName: string;
  petBreed: string;
  petParent: string;
  phone: string;
  timeSlot: string;
  tokenId: string;
  doctorName:string;
  type: string;
  status: string;
}
// const COL_DISPLAY_NAMES{

// }
