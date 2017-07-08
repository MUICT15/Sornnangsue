
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ans-before-question',
  templateUrl: './ans-before-question.component.html',
  styleUrls: ['./ans-before-question.component.css']
})
export class AnsBeforeQuestionComponent implements OnInit {
  test: any;
  listQuestion: any[] = [];
  listAnsCorrect: String[] = [];
  saveUserAnswers: String[] = [];
  score: number = 0;
  numberQuestion = 0;
  userAnswered: boolean = false;
  CourseID: String ;
  constructor(private ansBefore: AngularFireDatabase,private routing: ActivatedRoute , private redirect: Router) {
    routing.params.subscribe((params)=>{
      this.CourseID = params.CourseID;
      this.listQuestionsBefore(params.CourseID);
    })
  }

  listQuestionsBefore(CourseID:String){
    this.ansBefore.list('/BeforeQuestion',{
      query:{
        orderByChild: 'CourseKey',
        equalTo: CourseID,
      }
    }).subscribe((data)=>{
        data.forEach((data)=>{
          this.listAnsCorrect.push(data.AnsCorrect);
        })
        this.listQuestion = data;
        this.numberQuestion = data.length;
        return data
    });
  }

  checkQuestionKey(Choice: String , index: number ){
    this.saveUserAnswers[index] = Choice;
  }

  userAnswerQuestion(){
    if(this.listAnsCorrect.length == this.saveUserAnswers.length){
      for(let i = 0 ; i < this.listAnsCorrect.length; i++){
        if(this.listAnsCorrect[i] == this.saveUserAnswers[i]){
          this.score += 1;
        }else if(this.listAnsCorrect[i] != this.saveUserAnswers[i]){
        }
      }
      this.userAnswered = true;
      this.ansBefore.list(`/UserExamed/Before/${this.CourseID}`).push({
        User: localStorage.getItem('UID')
      }).then(()=>{
        setTimeout(()=>{
         this.redirect.navigate(['/listcourse']);
      },2000)
      }).catch((err)=>{
        console.log(err)
      });
    }else if(this.listAnsCorrect.length != this.saveUserAnswers.length){
    }
    
  }
  ngOnInit() {
  }

}
