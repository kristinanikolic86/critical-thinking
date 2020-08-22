import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { CanActivateAuthGuard } from './security/can-activate-auth.guard';
import { PageOneCategoryComponent } from './page-one-category/page-one-category.component';



const routes: Routes = [
  // public routes
  { path: 'početna', component: MainComponent },
  { path: '', redirectTo: 'početna', pathMatch: 'full' },
  { path: 'tekstovi/kategorija/:id', component: PageOneCategoryComponent },
  { path: 'tekstovi/kategorija/:id/stranica/:pageNumber', component: PageComponent },
  { path: 'tekst/:id', component: TextComponent },
  { path: 'kurs', component: CourseComponent },
  { path: 'o_autoru', component: AboutAuthorComponent },
  { path: 'pretraga/ključna reč/:keyword' , component: SearchComponent },

  { path: 'login', component: LoginComponent},

  // admin routes, login is necessary
  { path: 'admin/objavljeni_tekstovi', component: AdminComponent, canActivate:[CanActivateAuthGuard] },
  { path: 'admin/neobjavljeni_tekstovi', component: UnpublishedArticlesComponent, canActivate:[CanActivateAuthGuard] },
  { path: 'admin/dodaj_tekst', component: AddTextComponent, canActivate:[CanActivateAuthGuard] },
  { path: 'admin/pregledaj_tekst/:id', component: PublishOrModifyTextComponent, canActivate:[CanActivateAuthGuard] },
  { path: 'admin/izmeni_tekst/:id', component: EditTextComponent, canActivate:[CanActivateAuthGuard] },

 

  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
