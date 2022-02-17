import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HijoprComponent } from './hijopr/hijopr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CSeccion2Component } from './c-seccion2/c-seccion2.component';
import { CSeccion3Component } from './c-seccion3/c-seccion3.component';

import { RouterModule, Routes } from '@angular/router';
import { ProductoService } from './servicio/producto.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosService } from './servicio/usuarios.service';

const routes: Routes = [
  {path:'',component:CSeccion2Component},
  {path:'seccion2',component:CSeccion2Component},
  {path:'seccion3',component:CSeccion3Component},
  {path:'seccion2:nombre',component:CSeccion2Component},
  {path:'seccion3:ciudad/:poblacion',component:CSeccion3Component},
  {path:'usuario',component:UsuarioComponent},
  {path:'**',component: CSeccion2Component},
]
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    HijoprComponent,
    CSeccion2Component,
    CSeccion3Component,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProductoService,
    UsuariosService
  ],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
