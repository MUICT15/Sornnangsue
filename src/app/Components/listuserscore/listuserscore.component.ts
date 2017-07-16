import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listuserscore',
  templateUrl: './listuserscore.component.html',
  styleUrls: ['./listuserscore.component.css']
})
export class ListuserscoreComponent implements OnInit {
  userCourse: FirebaseListObservable<any[]>;
  beforeScore: FirebaseListObservable<any[]>;
  afterScore: FirebaseListObservable<any[]>;


  constructor(private score: AngularFireDatabase) {
    this.listCourse();
   }

  listCourse(){
    this.userCourse = this.score.list('/Course');
  }

  listScore(Course: String){
    this.afterScore = this.score.list(`/UserExamed/After/${Course}`,{
      query:{
        orderByChild: 'User',
        equalTo: localStorage.getItem('UID')
      }
    })

    this.beforeScore = this.score.list(`/UserExamed/Before/${Course}`,{
      query:{
        orderByChild: 'User',
        equalTo: localStorage.getItem('UID')
      }
    })
  }
  ngOnInit() {
  }

}
