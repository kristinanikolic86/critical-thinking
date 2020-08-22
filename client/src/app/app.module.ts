import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PageComponent } from './page/page.component';
import { TextComponent } from './text/text.component';
import { CourseComponent } from './course/course.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { SearchComponent } from './search/search.component';
import { AdminComponent } from './admin/admin.component';
import { UnpublishedArticlesComponent } from './unpublished-articles/unpublished-articles.component';
import { AddTextComponent } from './add-text/add-text.component';
import { PublishOrModifyTextComponent } from './publish-or-modify-text/publish-or-modify-text.component';
import { EditTextComponent } from './edit-text/edit-text.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './security/token-interceptor.service';
import { AuthenticationService } from './security/authentication.service';
import { CanActivateAuthGuard } from './security/can-activate-auth.guard';
import { JwtUtilsService } from './security/jwt-utils.service';
import { PageOneCategoryComponent } from './page-one-category/page-one-category.component';
import { SafePipe } from './pipe';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TextComponent,
    PageComponent,
    CourseComponent,
    AboutAuthorComponent,
    SearchComponent,
    AddTextComponent,
    AdminComponent,
    PageNotFoundComponent,
    PublishOrModifyTextComponent,
    EditTextComponent,
    LoginComponent,
    UnpublishedArticlesComponent,
    PageOneCategoryComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthenticationService,
    CanActivateAuthGuard,
    JwtUtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
