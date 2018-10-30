import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
import {
  MatToolbarModule, MatButtonModule,
  MatButtonToggleModule,
  MatSidenavModule, MatIconModule,
  MatListModule, MatGridListModule,
  MatCardModule, MatMenuModule
} from '@angular/material';
import { EditorComponent } from './editor/editor.component';

const appRoutes: Routes = [
  { path: 'editor', component: EditorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EditorComponent
  ],
  imports: [
    DragDropModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
