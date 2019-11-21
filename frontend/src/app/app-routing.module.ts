import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewPositionComponent } from './add-new-position/add-new-position.component';
import { NewPostComponent } from './new-post/new-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { JobPostsComponent } from './job-posts/job-posts.component';
import { PositionListComponent } from './position-list/position-list.component';
import { TestComponent } from './test/test.component';
import { RegisterComponent } from './register/register.component';
import { VaccancyComponent } from './vaccancy/vaccancy.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { CVDetailsComponent } from './cvdetails/cvdetails.component';
import { EvaluatedListComponent } from './evaluated-list/evaluated-list.component';
import { RateCVComponent } from './rate-cv/rate-cv.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
//import { AuthGuard } from './auth/auth.guard';
import { ApplicantApplicationReviewerComponent } from './applicant-application-reviewer/applicant-application-reviewer.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: 'Home', component: HomeComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'userManagement', component: UserManagementComponent },
  {
    path: 'userProfile', component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  { path: 'NewPosition', component: AddNewPositionComponent },
  { path: 'NewPost', component: NewPostComponent },
  { path: 'JobPosts', component: JobPostsComponent },
  { path: 'PositionList', component: PositionListComponent },
  { path: 'Test', component: TestComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Vacancy', component: VaccancyComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'EmployeesList', component: EmployeesListComponent },
  { path: 'ApplicantList', component: ApplicantListComponent },
  {
    path: 'applicant-evaluator',
    component: ApplicantApplicationReviewerComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },

  { path: 'CVDetails', component: CVDetailsComponent },
  { path: 'EvaluatedList', component: EvaluatedListComponent },
  { path: 'RateCV', component: RateCVComponent },
  { path: '**', redirectTo: '' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
