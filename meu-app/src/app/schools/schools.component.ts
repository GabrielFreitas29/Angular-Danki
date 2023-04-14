import { Component } from '@angular/core';

@Component({
  selector: 'app-schools',
  templateUrl:'./schools.component.html',
  styleUrls: ['./schools.component.css']
})


export class SchoolsComponent {

  aceitaNovaEscola = false;  
  createdSchoolStatus = "Nenhuma escola criada";
  schoolName = "Nome de teste da escola";

  ngOnInit(): void{
    setTimeout(() => {
      this.aceitaNovaEscola = true;
    }, 3000);
  }

  createSchool(){
    this.createdSchoolStatus = "Escola criada!"
  }

  updateSchoolname(event: Event){
    this.schoolName = (<HTMLInputElement>event.target).value
  }

  }
