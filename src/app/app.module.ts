import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCommonModule, MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockcompComponent } from './components/mockcomp/mockcomp.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { LoginComponent } from './components/login/login.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';

import { PuestoDialogComponent } from './components/dialogs/puesto-dialog/puesto-dialog.component';
import { ExperienciaDialogComponent } from './components/dialogs/experiencia-dialog/experiencia-dialog.component';
import { BannerDialogComponent } from './components/dialogs/banner-dialog/banner-dialog.component';
import { ProyectoDialogComponent } from './components/dialogs/proyecto-dialog/proyecto-dialog.component';
import { SkillDialogComponent } from './components/dialogs/skill-dialog/skill-dialog.component';
import { EstudioDialogComponent } from './components/dialogs/estudio-dialog/estudio-dialog.component';
import { InterceptorService } from './services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    MockcompComponent,
    CurriculumComponent,
    PuestoDialogComponent,
    ExperienciaDialogComponent,
    BannerDialogComponent,
    ProyectoDialogComponent,
    SkillDialogComponent,
    EstudioDialogComponent,
    LoginComponent,
    Pagina404Component,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDividerModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:InterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
