import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftEditorComponent } from './left-editor/left-editor.component';
import { RightEditorComponent } from './right-editor/right-editor.component';
import { ContentComponent } from './content/content.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainComponent } from './main/main.component';
import {MaterialsModule} from './materials/materials.module';
import { PageComponent } from './page/page.component'

@NgModule({
  declarations: [
    AppComponent,
    LeftEditorComponent,
    RightEditorComponent,
    ContentComponent,
    ToolbarComponent,
    MainComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
