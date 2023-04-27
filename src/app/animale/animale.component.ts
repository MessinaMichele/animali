import { Component, Input } from '@angular/core';
import { Animale } from '../models/animale.model';

@Component({
  selector: 'app-animale',
  templateUrl: './animale.component.html',
  styleUrls: ['./animale.component.css']
})
export class AnimaleComponent {
  @Input() animale: Animale;


  ngInit() {
  }
}

