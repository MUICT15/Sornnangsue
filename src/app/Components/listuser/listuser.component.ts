import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  CourseID : String;
  users: FirebaseListObservable<any[]>;
  before: FirebaseListObservable<any[]>;
  after: FirebaseListObservable<any[]>;

  constructor(private list: AngularFireDatabase, private routing : ActivatedRoute) { 
    this.routing.params.subscribe((param)=>{
      this.CourseID = param.CourseID
    });
    this.users = list.list('/UserProfile');
  }

  listScore(User: String){
    this.after = this.list.list(`/UserExamed/After/${this.CourseID}`,{
      query:{
        orderByChild: 'User',
        equalTo: User
      }
    })

    this.before = this.list.list(`/UserExamed/Before/${this.CourseID}`,{
      query:{
        orderByChild: 'User',
        equalTo: User
      }
    })
  }

  ngOnInit() {
  }

}
