import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-c-seccion2',
  templateUrl: './c-seccion2.component.html',
  styleUrls: ['./c-seccion2.component.css']
})
export class CSeccion2Component implements OnInit {

  formUsuarios:FormGroup = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    comentarios: new FormControl('', [Validators.required, Validators.minLength(10)])
  });
  //nombrePersona: string = '';

  constructor() { }

  ngOnInit(): void {

    // this.formUsuarios = this.formBuilder.group({
      
    // });
    // this.route.params.subscribe((params)=> {
    //   if([params['nombre'] !== null]){
    //     this.nombrePersona = params['nombre'];
    //   }

    // });
  }

  get f(){return this.formUsuarios.controls};

  habilitarBoton(){
    console.log ("El usuario '"+this.f['usuario'].value+"' ha escrito el comentario: '"+this.f['comentarios'].value+"'.");
  }

}
