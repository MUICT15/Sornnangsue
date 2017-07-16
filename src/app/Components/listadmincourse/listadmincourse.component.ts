import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadmincourse',
  templateUrl: './listadmincourse.component.html',
  styleUrls: ['./listadmincourse.component.css']
})
export class ListadmincourseComponent implements OnInit {
 listCourse: FirebaseListObservable<any[]>;

  constructor(private list: AngularFireDatabase) { 

    this.listCourse = list.list('/Course');
  }

  ngOnInit() {
  }

}
