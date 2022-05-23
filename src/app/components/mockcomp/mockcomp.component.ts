import { Component, OnInit } from '@angular/core';
import { Curriculum } from 'src/app/models/curriculum';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mockcomp',
  templateUrl: './mockcomp.component.html',
  styleUrls: ['./mockcomp.component.css']
})
export class MockcompComponent implements OnInit {

  persona!:Persona;
  constructor(private personaServ:PersonaService, private dialog:MatDialog) { }

  ngOnInit(): void {
    
  }
  

    
}

  



