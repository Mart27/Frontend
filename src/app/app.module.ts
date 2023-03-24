import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import {HttpClientModule } from'@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { EditSkillComponent } from './componentes/skills/edit-skill.component';
import { NewSkillComponent } from './componentes/skills/new-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditacercaComponent } from './componentes/acerca/editacerca.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditacercaComponent,
    NewProyectoComponent,
    EditProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
