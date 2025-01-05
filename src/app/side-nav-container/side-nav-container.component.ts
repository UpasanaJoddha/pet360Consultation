import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-container',
  templateUrl: './side-nav-container.component.html',
  styleUrls: ['./side-nav-container.component.css']
})
export class SideNavContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listContent: any[] = [
    {
      name: 'Consultations',
      icon: 'date_range',
    },
    {
      name: 'Admissions',
      icon: 'list',
    },
    {
      name: 'Groomings',
      icon: 'waves',
    },
    {
      name: 'Registrations',
      icon: 'account_circle',
    },
    {
      name: 'Inventory',
      icon: 'view_quilt',
    },
    {
      name: 'Reminders',
      icon: 'notifications',
    },
    {
      name: 'Payments',
      icon: 'account_balance_wallet',
    },
    {
      name: 'Reports & MIS',
      icon: 'poll',
    },
  ];

}
