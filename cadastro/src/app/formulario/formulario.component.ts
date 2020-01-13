import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../serviços/usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public usuario : Usuario = new Usuario


  constructor(private srv: UsuarioService) { }

  ngOnInit() {
  }



  enviarDados(){

    this.srv.insere(this.usuario).subscribe(
    res=>{
      console.log(res)
      console.log("Inserido com sucesso")
  },  
  error=>{
    
    console.log(err)
    console.log("Erro ao Inserir")
  }

    );


  }

}
