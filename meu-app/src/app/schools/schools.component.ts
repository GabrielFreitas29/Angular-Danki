import { Component } from '@angular/core';

@Component({
  selector: 'app-schools',
  templateUrl:'./schools.component.html',
  styleUrls: ['./schools.component.css']
})


export class SchoolsComponent {

  aceitaNovaEscola = false;  
  createdSchoolStatus = "Nenhuma escola criada";

  ngOnInit(): void{
    setTimeout(() => {
      this.aceitaNovaEscola = true;
    }, 3000);
  }

  createSchool(){
    this.createdSchoolStatus = "Escola criada!"
  }

  }
