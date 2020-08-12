import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AboutComponent } from './views/personal/about/about.component';
import { HomeComponent } from './views/personal/home/home.component';
import { SkillComponent } from './views/personal/skill/skill.component';
import { ExperienceComponent } from './views/personal/experience/experience.component';
import { ProjectComponent } from './views/personal/project/project.component';
import { EducationComponent } from './views/personal/education/education.component';
import { CertificationComponent } from './views/personal/certification/certification.component';
import { AwardComponent } from './views/personal/award/award.component';
import { ContactComponent } from './views/personal/contact/contact.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';


import { FormsModule }   from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

// export const routes: Routes = [
 
//   {
//     path: "about",
//     component: AboutComponent
//   },

//   {
//     path: "test",
//     component: HomeComponent
//   },

//   {
//     path: "login",
//     component: LoginComponent
//   },
 

//   {
//     path: "**",
//     component: P404Component
//   }

// ];

// @NgModule({
//   imports: [ RouterModule.forRoot(routes) ],
//   exports: [ RouterModule ]
// })
// export class AppRoutingModule {}
















































export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent
   
  },
  {
    path: 'register',
    component: RegisterComponent
   
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [


      {
        path: 'home',
        component : HomeComponent
      },
      {
        path: 'about',
        component : AboutComponent
      },
      {
        path: 'skills',
        component : SkillComponent
      },
      {
        path: 'experience',
        component : ExperienceComponent
      },
      {
        path: 'projects',
        component : ProjectComponent
      },
      {
        path: 'education',
        component : EducationComponent
      },
      {
        path: 'certifications',
        component : CertificationComponent
      },
      {
        path: 'awards',
        component : AwardComponent
      },
      {
        path: 'contact',
        component : ContactComponent
      }
    ]
  },
  
  { 
    path: '**', 
   component: P404Component 
}


];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
    ProgressbarModule.forRoot() ,
    FormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBXLoucMsCnFE4AnskZJhAGQfng-79qdL8'
    })
  ],
  exports: [ RouterModule , ProgressbarModule, FormsModule, AgmCoreModule]
  

})
export class AppRoutingModule {}
