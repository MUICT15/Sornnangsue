import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {CKEditorComponent} from 'ng2-ckeditor';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
   private Topic: String;
   private Description: String;
   private Article: String;
   private DetailCourse: FirebaseObjectObservable<any>;
  constructor(private edit: AngularFireDatabase , private router: Router) { 
      if(localStorage.getItem('CourseID') != null){
         this.DetailCourse = edit.object(`/Course/${localStorage.getItem('CourseID')}`);
      }else{
        this.router.navigate(['/']);
      }
  }

  editCourse(){


  }
  ngOnInit() {
  }

}
