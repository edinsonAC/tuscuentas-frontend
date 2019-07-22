import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, ɵConsole } from '@angular/core';

import { AuthService } from 'src/app/login/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';
import { Usuario } from '../usuario/usuario';
import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})



export class HeaderComponent implements OnInit { 
  @ViewChild("myPopover")
  public popover: ElementRef;

  fileImage: File;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  usuario: Usuario;
  urlImg: string = "http://localhost:8080/api/usuario/upload/img/";
  private imagenSeleccionada: File;

  constructor(private authService: AuthService, private router: Router,
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.usuario = this.authService.usuario;
    if (this.usuario.usuaId) {
      this.usuarioService.getUsuario(this.usuario.usuaId).subscribe(
        usuario => {
          this.usuario = usuario;
        }
      )
    }


  }

  logout(): void {
    console.log("logout ", this.popover);

    this.authService.logout();
    this.router.navigate(['/login'])
  }


  seleccionarFoto(event) {
    this.imagenSeleccionada = event.target.files[0];
    console.log(this.imagenSeleccionada);
  }

  subirFoto() {
    this.usuarioService.subirFoto(this.fileImage, this.usuario.usuaId)
      .subscribe(
        usuario => {
          console.log("respuesta de imagen ", usuario)
          this.usuario = usuario
        }
      )
  }

  public blobToFile = (theBlob: Blob, fileName: string): File => {
    var b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    //Cast to a File() type
    return <File>theBlob;
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;

  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.fileImage = new File([event.file], 'imagen.png', { type: event.file.type, lastModified: Date.now() });
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  reset() {
    this.croppedImage = '';
    this.imageChangedEvent = '';
}


}
