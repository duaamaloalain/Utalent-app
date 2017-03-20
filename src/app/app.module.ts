import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LocalStorageModule } from 'angular-2-local-storage';
import { ModalModule } from 'ng2-bootstrap/modal';


import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { InterestComponent } from './interests/interests.component';
import { InterestDetailsComponent } from './interest-details/interest-details.component';
import { CreateChallengeComponent } from './create-challenge/create-challenge.component';



import { ChallengeService } from './challenge.service';
import { AuthService } from './auth.service';
import { InterestsService } from './interests.service';


import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';



import { ChallengeComponent } from './challenge/challenge.component';
import { CheckLoggedIn } from './check-logged-in';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';


import { InterestUserComponent } from './interest-user/interest-user.component';
import { InterestUserService } from './interest-user.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './sidebar.service';



// Define the routes
const ROUTES = [
  {
    path: '',
    // redirectTo: 'signin',
    pathMatch: 'full',
    component: MainComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'interest',
    component: InterestComponent
  },
  {
    path: 'users/:username',
    component: ProfileComponent
    // canActivate: [CheckLoggedIn] 
  },
  {
    path: 'challenges/:id',
    component: ChallengeComponent
  },
  {
    path: 'interest/:name',
    component: InterestDetailsComponent,
    // canActivate: [CheckLoggedIn]
<<<<<<< HEAD
=======
  },
  {
    path: 'create',
    component: CreateChallengeComponent,
    // canActivate: [CheckLoggedIn]
  },
  {
    path: 'interest/:name',
    component: InterestDetailsComponent,
    canActivate: [CheckLoggedIn]
  },
  {
    path: 'profile',
    component:InterestUserComponent,
    canActivate: [CheckLoggedIn]
>>>>>>> ff98a73fdecc6190a6ed1efee58391eecb476123
  }

];
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    InterestComponent,

    ChallengeComponent,
    ProfileComponent,

    InterestDetailsComponent,
    ChallengeComponent,
    CreateChallengeComponent,
    MainComponent,
    PostComponent,
    CreateChallengeComponent ,
    InterestUserComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({
          prefix: 'app-root',
          storageType: 'localStorage',
    }),
    ModalModule.forRoot(),
    RouterModule.forRoot(ROUTES) 
  ],
  providers: [AuthService,InterestsService,ProfileService,ChallengeService,CheckLoggedIn,InterestUserService,{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})

export class AppModule { }