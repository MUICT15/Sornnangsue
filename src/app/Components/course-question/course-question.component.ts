import { Router } from '@angular/router';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-question',
  templateUrl: './course-question.component.html',
  styleUrls: ['./course-question.component.css']
})
export class CourseQuestionComponent implements OnInit {
  private listBeforQuestions: FirebaseListObservable<any[]>;
  private beforeDetailQuestion: String = '';
  private beforeAns1: String = '';
  private beforeAns2: String = '';
  private beforeAns3: String = '';
  private beforeAns4: String = '';
  
  private listAfterQuestions: FirebaseListObservable<any[]>;
  private afterDetailQuestion: String = '';
  private afterAns1: String = '';
  private afterAns2: String = '';
  private afterAns3: String = '';
  private afterAns4: String = '';

  constructor(private question: AngularFireDatabase,private router: Router) {
     this.listAfterQuestion();
     this.listBeforeQuestion();
    

   }

   listBeforeQuestion(){
    this.listBeforQuestions = this.question.list('/BeforeQuestion',{
      query:{
        orderByChild:'CourseKey',
        equalTo: localStorage.getItem('CourseID')
      }
    });
   }

   listAfterQuestion(){
     this.listAfterQuestions = this.question.list('/AfterQuestion',{
      query:{
        orderByChild:'CourseKey',
        equalTo: localStorage.getItem('CourseID')
      }
    });

   }

   addBeforeQuestion(){
     this.question.list('/BeforeQuestion').push({
       CourseID: localStorage.getItem('CourseID'),
       DetailQuestion: this.beforeDetailQuestion,
       Ans1: this.beforeAns1,
       Ans2: this.beforeAns2,
       Ans3: this.beforeAns3,
       Ans4: this.beforeAns4
     }).then((data)=>{
       console.log('เพิ่มเรียบร้อย');
     }).catch((err)=>{
       console.log(err);
     });
     
   }
   
   addAfterQuestion(){
     this.question.list('/AfterQuestion').push({
       CourseID: localStorage.getItem('CourseID'),
       DetailQuestion: this.afterDetailQuestion,
       Ans1: this.afterAns1,
       Ans2: this.afterAns2,
       Ans3: this.afterAns3,
       Ans4: this.afterAns4
     }).then((data)=>{
       console.log('เพิ่มเรียบร้อย');
     }).catch((err)=>{
       console.log(err);
     });

   }

  ngOnInit() {
  }

}
