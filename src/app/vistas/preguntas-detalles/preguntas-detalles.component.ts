import { Component, Input } from '@angular/core';
import { Pregunta } from 'src/app/modelos/pregunta';

@Component({
  selector: 'app-preguntas-detalles',
  templateUrl: './preguntas-detalles.component.html',
  styleUrls: ['./preguntas-detalles.component.css']
})
export class PreguntasDetallesComponent {
  @Input() pregunta?: Pregunta;
}
