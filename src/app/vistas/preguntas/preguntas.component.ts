import { Component, EventEmitter, Output } from '@angular/core';
import { Pregunta } from 'src/app/modelos/pregunta';
import { PreguntasService } from 'src/app/servicios/preguntas.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  preguntas: Pregunta[] = [];

  pregunta?: Pregunta; // Tendra valor cuando se pulse sobre una pregunta
  // Metodo que recibe un objeto de tipo Pregunta y le da el valor a la variable pregunta
  preguntaActiva(pregunta: Pregunta): void{
    if(pregunta == this.pregunta)
      this.pregunta = undefined; // Esto para cuando se le de a la misma pregunta se esconda la respuesta
    else
      this.pregunta = pregunta;
  }
  
  constructor(private preguntaService: PreguntasService) {}

  ngOnInit(): void {
    this.getPreguntas();
  }

  getPreguntas(): void {
    this.preguntaService.getPreguntas()
      .subscribe(pregunta => this.preguntas = pregunta);
  }
}
