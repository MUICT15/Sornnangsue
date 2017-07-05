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

export const route: Routes = [
    {path: '' , component: MainpageComponent},
    {path: 'createCourse' ,component: CreatecourseComponent},
    {path: 'editCourse' ,component: EditCourseComponent},
    {path: 'addQuestion' ,component: CourseQuestionComponent},
    {path: 'courseContent/:CourseID',component: CourseContentComponent},
    {path: 'listcourse',component: ListCourseComponent},
    {path: 'examBefore/:CourseID',component: AnsBeforeQuestionComponent},
    {path: 'examAfter/:CourseID', component: AnsAfterQuestionComponent},
    {path: 'myProfile' , component: UserProfileComponent}
    ];
export const routing = RouterModule.forRoot(route);