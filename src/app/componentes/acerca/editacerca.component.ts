import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editacerca',
  templateUrl: './editacerca.component.html',
  styleUrls: ['./editacerca.component.css']
})
export class EditacercaComponent implements OnInit {
persona: persona =null;
  constructor(private activatedRouter:ActivatedRoute,private personaService:PersonaService,
    private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data=>{
        this.persona=data;
      }, err=>{
        alert("error al modificar");
        this.router.navigate(['']);
      }
    )
  }
onUpdate(){  const id= this.activatedRouter.snapshot.params['id'];
this.personaService.update(id,this.persona).subscribe(
  data=>{
    this.router.navigate(['']);
  },err =>{
    alert("error al modificar");
    this.router.navigate(['']);
  })
}
uploadImage($event:any){}
}
