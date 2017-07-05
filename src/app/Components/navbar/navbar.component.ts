import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  adminNav: boolean = false;
  UserNav: boolean = false;

  UserPhoto: String = '';
  UserUID : String = '';

  constructor(private Auth:AngularFireAuth , private router: Router , private profile: AngularFireDatabase) {
    Auth.authState.subscribe((data)=>{
      if(data != null){
        localStorage.setItem('UID',data.uid);
       if(data.uid == '85XLsHmV4le60exsEGPiPcfs0if1' || 
          data.uid == 'HhNpllilv4VvVg56tc9P9ozSg8s1' ||
          data.uid == 'x57wY4d4CNcLTPzFe3fk4zi42b93' ||
          data.uid == 'y5nwEOEFp8UHuhtQQxZtFIq4eBF2' ||
          data.uid == 'kGixRYMcCuhcaHYTrYoiXvRPoN02' ){
            this.UserUID = data.uid;
            this.UserPhoto = data.photoURL;
            this.adminNav = true;
       }else {
             this.UserUID = data.uid;
             this.UserPhoto = data.photoURL;
             this.UserNav = true
       }
      }else{
      }
    })
   }
   
   authFacebook(){
     this.Auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider).then((data)=>{
       localStorage.setItem('UID',data.user.uid);
       if(data.user.uid == '85XLsHmV4le60exsEGPiPcfs0if1' || 
          data.user.uid == 'HhNpllilv4VvVg56tc9P9ozSg8s1' ||
          data.user.uid == 'x57wY4d4CNcLTPzFe3fk4zi42b93' ||
          data.user.uid == 'y5nwEOEFp8UHuhtQQxZtFIq4eBF2' ||
          data.user.uid == 'kGixRYMcCuhcaHYTrYoiXvRPoN02'){
            this.adminNav = true;
            this.checkProfile();
            //this.router.navigate(['/createCourse']);
       }else if(data.user.uid != '85XLsHmV4le60exsEGPiPcfs0if1' || 
                data.user.uid != 'HhNpllilv4VvVg56tc9P9ozSg8s1' ||
                data.user.uid != 'x57wY4d4CNcLTPzFe3fk4zi42b93' ||
                data.user.uid != 'y5nwEOEFp8UHuhtQQxZtFIq4eBF2' ||
                data.user.uid != 'kGixRYMcCuhcaHYTrYoiXvRPoN02'){
                 
                 this.UserNav = true
                 this.checkProfile();
       }
     });
   }

   authGoogle(){
     this.Auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider).then((data)=>{
       localStorage.setItem('UID',data.user.uid);
       if(data.user.uid == '85XLsHmV4le60exsEGPiPcfs0if1' || 
          data.user.uid == 'HhNpllilv4VvVg56tc9P9ozSg8s1' ||
          data.user.uid == 'x57wY4d4CNcLTPzFe3fk4zi42b93' ||
          data.user.uid == 'y5nwEOEFp8UHuhtQQxZtFIq4eBF2' ||
          data.user.uid == 'kGixRYMcCuhcaHYTrYoiXvRPoN02'){
           this.adminNav = true;
           this.checkProfile();
           //this.router.navigate(['/createCourse']);
       }else if(data.user.uid != '85XLsHmV4le60exsEGPiPcfs0if1' || 
                data.user.uid != 'HhNpllilv4VvVg56tc9P9ozSg8s1' ||
                data.user.uid != 'x57wY4d4CNcLTPzFe3fk4zi42b93' ||
                data.user.uid != 'y5nwEOEFp8UHuhtQQxZtFIq4eBF2' ||
                data.user.uid != 'kGixRYMcCuhcaHYTrYoiXvRPoN02'){
                 this.UserNav = true;
                 this.checkProfile();
       }
     });
   }

   checkProfile(){
    this.profile.list('/UserProfile',{
     query:{
      orderByChild: 'UserID',
      equalTo: localStorage.getItem('UID')
     }
   }).subscribe((data)=>{
     if(data.length == 0){
       this.profile.list('UserProfile').push({
         UserID: localStorage.getItem('UID'),
         RealName: '',
         Grade: ''
       });
       this.router.navigate(['/myProfile']);
     }else{
       this.router.navigate(['/listcourse']);
     }
   })
   }

   logout(){
     this.Auth.auth.signOut();
     localStorage.removeItem('UID');
   }

  ngOnInit() {
  }

}
