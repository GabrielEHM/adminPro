import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      title: 'Main',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'dashboard', url: '/dashboard' },
        { title: 'Progress', url: '/progress' },
        { title: 'Graphs', url: '/graphs' },
        { title: 'Promesas', url: '/promesas'},
        { title: 'Rxjs', url: '/rcjs'}

      ]
    }
  ];

  constructor() { }
}
