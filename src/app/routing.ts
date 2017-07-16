import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { CreatecourseComponent } from './Components/createcourse/createcourse.component';
import { CourseQuestionComponent } from './Components/course-question/course-question.component';
import { CourseContentComponent } from './Components/course-content/course-content.component';
import { ListCourseComponent } from './Components/list-course/list-course.component';
import { EditCourseComponent } from './Components/edit-course/edit-course.component';
import { AnsBeforeQuestionComponent } from './Components/ans-before-question/ans-before-question.component';
import { AnsAfterQuestionComponent } from './Components/ans-after-question/ans-after-question.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { CreateSubContentComponent } from './Components/create-sub-content/create-sub-content.component';
import { EditarticleComponent } from './Components/editarticle/editarticle.component';
import { ListuserscoreComponent } from './Components/listuserscore/listuserscore.component';
import { ListuserComponent } from './Components/listuser/listuser.component';
import { ListadmincourseComponent } from './Components/listadmincourse/listadmincourse.component';

export const route: Routes = [
    {path: '' , component: MainpageComponent},
    {path: 'createCourse' ,component: CreatecourseComponent},
    {path: 'editCourse' ,component: EditCourseComponent},
    {path: 'addQuestion' ,component: CourseQuestionComponent},
    {path: 'courseContent/:CourseID',component: CourseContentComponent},
    {path: 'listcourse',component: ListCourseComponent},
    {path: 'examBefore/:CourseID',component: AnsBeforeQuestionComponent},
    {path: 'examAfter/:CourseID', component: AnsAfterQuestionComponent},
    {path: 'myProfile' , component: UserProfileComponent},
    {path: 'createArticle' , component: CreateSubContentComponent},
    {path: 'editArticle' , component: EditarticleComponent},
    {path: 'myScore' , component: ListuserscoreComponent},
    {path: 'listAllCourse' , component: ListadmincourseComponent},
    {path: 'listuser/:CourseID' , component: ListuserComponent}
    ];
export const routing = RouterModule.forRoot(route);