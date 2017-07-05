import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ans-before-question',
  templateUrl: './ans-before-question.component.html',
  styleUrls: ['./ans-before-question.component.css']
})
export class AnsBeforeQuestionComponent implements OnInit {
  myFood: String = 'lamb';
  listQuestion: FirebaseListObservable<any[]>;

  constructor(private ansBefore: AngularFireDatabase,private routing: ActivatedRoute) {
    /*routing.params.subscribe((params)=>{
      this.listAnsBefore(params.CourseID);
    })*/
  }

  listAnsBefore(CourseID:String){
    this.listQuestion = this.ansBefore.list('/BeforeQuestion',{
      query:{
        orderByChild: 'CourseKey',
        equalTo: CourseID
      }
    });
  }
  ngOnInit() {
  }

}
