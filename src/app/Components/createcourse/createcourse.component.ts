import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase , FirebaseListObservable} from 'angularfire2/database';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.css']
})
export class CreatecourseComponent implements OnInit {
  private Topic: String = '';
  private Description:String = '';
  private Added: String = '';
  private ss: String = '';
  private lisUserCourse: FirebaseListObservable<any[]>;

  constructor(private create:AngularFireDatabase , private router: Router) { 
    this.listCourse();

  }
  createCourse(){
     this.create.list('/Course').push({
       UserID: localStorage.getItem('UID'),
       Topic: this.Topic,
       Description: this.Description
     }).then((data)=>{
       this.Topic = '';
       this.Description = '';
       localStorage.setItem('CourseID',data.path.o[1]);
       this.router.navigate(['/editCourse']);
     }).catch((err)=>{
       this.Added = 'เกิดปัญหาการเพิ่มคอสเรียน';
     });
  }

  listCourse(){
   this.lisUserCourse =  this.create.list('/Course',{ 
     query:{
       orderByChild: 'UserID',
       equalTo: localStorage.getItem('UID')
     }
    });

  }

  EditCourse(CourseID){
    localStorage.setItem('CourseID',CourseID.$key);
    this.router.navigate(['/editCourse']);
  }

  removeCourse(CourseID){
    this.create.object(`/Course/${CourseID.$key}`).remove()
     .then(()=>console.log('ลบเรียบร้อย'))
     .catch(()=> console.log('เกิดปัญหา'));
  }

  ngOnInit() {
  }

}
