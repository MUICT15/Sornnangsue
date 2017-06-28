import { EditCourseComponent } from './Components/edit-course/edit-course.component';
import { Routes, RouterModule } from '@angular/router';

import {MainpageComponent} from './Components/mainpage/mainpage.component';
import { CreatecourseComponent } from './Components/createcourse/createcourse.component';

export const route: Routes = [
    {path:'' , component: MainpageComponent},
    {path:'createCourse',component: CreatecourseComponent},
    {path:'editCourse',component: EditCourseComponent}
    ];
export const routing = RouterModule.forRoot(route);