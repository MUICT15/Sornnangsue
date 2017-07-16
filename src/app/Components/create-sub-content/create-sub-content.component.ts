import { route } from './../../routing';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-sub-content',
  templateUrl: './create-sub-content.component.html',
  styleUrls: ['./create-sub-content.component.css']
})
export class CreateSubContentComponent implements OnInit {
  newContent: Array<any[]> = [];
  Image: String = '';
  UnitName: String = '';
  CourseID: String;
  listContent: FirebaseListObservable<any[]>;

  constructor(private create:AngularFireDatabase,private routing: ActivatedRoute,private route: Router) {
    routing.params.subscribe((params)=>{
      this.CourseID = params.CourseID;
      this.listCourseContent();
    })
   }

  listCourseContent(){
    this.listContent = this.create.list(`/contents`,{
      query:{
        orderByChild: 'UserID',
        equalTo: localStorage.getItem('UID')
      }
    })
  }

  createNewContent(){
    this.create.list(`/contents`).push({
      UserID: localStorage.getItem('UID'),
      UnitName: this.UnitName
    }).then((data)=>{
      this.create.list(`/contents`).update(data.$key,{
        Key: data.$key
      })
      this.route.navigate(['/editArticle'],data.$key);
    })
  }
  ngOnInit() {
  }

}
