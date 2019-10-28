import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FollowersService } from './services/followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AuthorsService } from './services/authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { StarComponent } from './star/star.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { TitlecasePipe } from './titlecase.pipe';
import { LikeButtonComponent } from './like-button/like-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    AuthorsComponent,
    StarComponent,
    TitlecaseComponent,
    TitlecasePipe,
    LikeButtonComponent,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    ChangePasswordFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent
      },
      { 
        path: 'followers/:id/:username', 
        component: GithubProfileComponent
      },
      { 
        path: 'followers', 
        component: GithubFollowersComponent
      },
      { 
        path: 'posts', 
        component: PostsComponent
      },
      { 
        path: '**', 
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    AuthorsService,
    PostService,
    FollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
