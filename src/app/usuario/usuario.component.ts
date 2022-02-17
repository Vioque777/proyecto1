import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicio/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: any;
  usuarioAgregar: any = {name: '', surname: '', email: ''};

  constructor(private usService: UsuariosService) {
    this.listarUsuario();
    console.log(this.usuarios);
   }

  ngOnInit(): void {
  }
  listarUsuario():void {
    this.usService.listarUsuarios().subscribe({
      next: (r) => this.usuarios = r,
      error: (e) => console.log(JSON.stringify(e))
    })
  }
  eliminarUsuario (id_usuario:number) { 
    console.log("Eliminar usuario:" +id_usuario)
    this.usService.eliminarUsuario(id_usuario).subscribe ( {
                                            next: () =>  this.usuarios.splice(0, id_usuario), 
                                            error: (e) => console.log(JSON.stringify(e))
                                        });
  }

  nuevoUsuario () {
    console.log("NuevoUsuario.");
    this.usService.nuevoUsuario (this.usuarioAgregar).subscribe ( {
                                          next: () =>  this.usuarios.push(this.usuarioAgregar), 
                                          error: (e) => console.log(JSON.stringify(e))
                                        });
  }

}
