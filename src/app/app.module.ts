import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { ListUsuarioComponent } from './componentes/usuario/list-usuario/list-usuario.component';
import { UsuarioService } from './services/usuarioService/usuario.service';
import { LoginComponent } from './login/login.component';
import { TipoUsuarioComponent } from './componentes/tipo-usuario/tipo-usuario.component';
import { TokenInterceptor } from './guards/interceptors/token.interceptor';
import { AuthInterceptor } from './guards/interceptors/auth.interceptor ';
import { PopoverModule } from "ngx-popover";
import { MenuComponent } from './componentes/menu/menu.component';
import { TotalesComponent } from './componentes/totales/totales.component';
import { LoaderComponent } from './componentes/loader/loader.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AlertasComponent } from './componentes/alertas/alertas.component';
import { EjecucionTareaComponent } from './componentes/ejecucion-tarea/ejecucion-tarea.component';
import { TareaPredeterminadaComponent } from './componentes/tarea-predeterminada/tarea-predeterminada.component';
import { TareaEmpresaComponent } from './componentes/tarea-empresa/tarea-empresa.component';
import { CalendarioFechaComponent } from './componentes/calendario-fecha/calendario-fecha.component';
import { ProcesoComponent } from './componentes/proceso/proceso.component';


const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'listUsuario', component: ListUsuarioComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'totales', component: TotalesComponent },
  { path: 'menu', component: MenuComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuarioComponent,
    ListUsuarioComponent,
    LoginComponent,
    TipoUsuarioComponent,
    MenuComponent,
    TotalesComponent,
    LoaderComponent,
    AlertasComponent,
    EjecucionTareaComponent,
    TareaPredeterminadaComponent,
    TareaEmpresaComponent,
    CalendarioFechaComponent,
    ProcesoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    PopoverModule,
    ImageCropperModule 
  ],
  providers: [
    UsuarioService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
