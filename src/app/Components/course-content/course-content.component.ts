import { route } from './../../routing';
import { AngularFireDatabase ,FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent {
  content: FirebaseListObservable<any[]>;
  CourseID: string ;
  isAfterExamed: boolean = true;

  constructor(private Content: AngularFireDatabase,private router: ActivatedRoute , private route: Router) {
    router.params.subscribe((params)=>{
      this.CourseID = params.CourseID;
      Content.list(`/UserExamed/Before/${params.CourseID}`,{
        query:{
          orderByChild: 'User',
          equalTo: localStorage.getItem('UID')
        }
      }).subscribe((data)=>{
           if(data.length > 0){
             this.showContent(params.CourseID);
           }else if(data.length == 0){
             route.navigate(['/examBefore',params.CourseID])
           }
      });
    });
   }

   showContent(CourseID: String){
     this.content = this.Content.list('/Course',{
       query:{
         orderByKey: true,
         equalTo: CourseID
       }
     })
   }
}
