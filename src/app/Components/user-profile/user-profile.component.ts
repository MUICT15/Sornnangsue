import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  realName: String = '';
  grade: String = '';
  subGrade: String = '';
  listGrade = ['1','2','3','4','5','6'];
  listSubGrade = ['1','2','3','4','5','6','7','8','9','10','11','12'];
  firebaseKey ='';
  constructor(private profile: AngularFireDatabase) {
    this.showProfile();
  }
  
  showProfile(){
   this.profile.list('/UserProfile',{
     query:{
      orderByChild: 'UserID',
      equalTo: localStorage.getItem('UID')
     }
   }).subscribe((data)=>{
     if(data.length != 0){
        this.realName = data[0].RealName;
        this.grade = data[0].Grade;
        this.firebaseKey = data[0].$key;
     }
   });
  }

  chageGrade(grade:any){
    this.grade = grade;

  }
  chageSubGrade(grade:any){
    this.subGrade = grade;

  }

  updateProfile(){
    this.profile.list('/UserProfile',{
     query:{
      orderByChild: 'UserID',
      equalTo: localStorage.getItem('UID')
     }
   }).update(this.firebaseKey,{
      UserID: localStorage.getItem('UID'),
      RealName: this.realName,
      Grade: `${this.grade}/${this.subGrade}`
   })
  }
  ngOnInit() {
  }

}
