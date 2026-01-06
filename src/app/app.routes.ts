import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Routing } from './routing/routing';
import { Home1 } from './home1/home1';
import { Home2 } from './home2/home2';
import { Profile } from './profile/profile';
import { Settings } from './settings/settings';
import { Users } from './users/users';
import { Usersinfo } from './usersinfo/usersinfo';
import { ApiUsers } from './api-users/api-users';
import { ApiEmployees } from './api-employees/api-employees';
import { ApiEmployeeEdit } from './api-employee-edit/api-employee-edit';
import { HttpUser } from './http-user/http-user';
import { Students } from './students/students';
import { ErrorComponent } from './error/error';
import { Animations } from './animations/animations';

export const routes: Routes = [
    {path: 'home', component: Home, children:[
        {path: 'home1', component:Home1},
        {path:'home2', component: Home2},
                
        {path: '', redirectTo: 'home1', pathMatch: 'full'},
        {path:"**", redirectTo:'home1', pathMatch:'full'}
    ]},
        {path: 'apiusers', component: ApiUsers },
            {path:'apieditemployee', component: ApiEmployeeEdit},
            {path: 'students', component: Students},
    {path: 'routing', component: Routing },
    {path:'profile', component: Profile},
        {path:'erorr', component: ErrorComponent},
        {path:'animations', component: Animations},

    {path:'settings/:data', component: Settings},
        {path:'users', component: Users},
        {path:'apiemployees', component: ApiEmployees},
            {path:'usersinfo', component: Usersinfo},
            {path:'httpuser', component: HttpUser},
     {path:'',redirectTo : 'home',pathMatch:'full' },
     {path:'**',redirectTo : 'home',pathMatch:'full'}

];
