import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { topNavComponent } from './nav-menu/topNav';
import { commentComponent } from './pages/comment/comment';
import { commentlistComponent } from './pages/comment/components/commentList/commentlist';
import { commentSchemaComponent } from './pages/comment/components/commentSchema/commentSchema';
import { commentSearchInfoComponent } from './pages/comment/components/commentSearchInfo/commentSearchInfo';
import { titleSearchComponent } from './pages/comment/components/titleSearch/titleSearch';
import { createTextComponent } from './pages/createText/createText';
import { deleteTextComponent } from './pages/deleteText/deleteText';

@NgModule({
  declarations: [
    AppComponent,
    topNavComponent,
    commentComponent,
    createTextComponent,
    deleteTextComponent,
    commentlistComponent,
    commentSchemaComponent,
    commentSearchInfoComponent,
    titleSearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    { path: '', component: commentComponent, pathMatch: 'full' },
    { path: 'comment', component: commentComponent, pathMatch: 'full' },
    { path: 'createtext', component: createTextComponent, pathMatch: 'full' },
    { path: 'deletetext', component: deleteTextComponent, pathMatch: 'full' }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
