import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { Persona } from 'src/app/models/Persona';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  persona:Persona = new Persona();
  estado:boolean=true;
  listadePersonas:Persona[]=[];
  name: string="";
  contra: string="";
  nom:boolean=false;
  constructor(private personaService:PersonaService) { }


  ngOnInit(): void {
    this.personaService.listarPersonas().subscribe((res:any)=>{
      this.listadePersonas=res;
      console.log(res)
    });
  }
  login() {
    for (let i = 0; i < this.listadePersonas.length; i++) {
      if(this.listadePersonas[i].username==this.name && this.listadePersonas[i].password==this.contra){
        console.log("bien");
      }
    }
  }

}
