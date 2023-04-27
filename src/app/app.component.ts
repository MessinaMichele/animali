import { Component } from '@angular/core';
import { Animale } from './models/animale.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string
  animali: Animale[] = [
    {
      "nome": "cane",
      "verso": "bau",
      "zampe": 4,
      "movimento": "cammina"
    },
    {
      "nome": "rana",
      "verso": "cra",
      "zampe": 4,
      "movimento": "salta"
    },
    {
      "nome": "canarino",
      "verso": "fiu",
      "zampe": 2,
      "movimento": "vola"
    },
    {
      "nome": "serpente",
      "verso": "fss",
      "zampe": 0,
      "movimento": "striscia"
    }
  ];

  ordinaPerNome() {
    this.animali.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  ordinaPerZampe() {
    this.animali.sort((a, b) => b.zampe - a.zampe);
  }

  coloreZampe(zampe: number): string {
    if (zampe === 0) {
      return 'green';
    } else if (zampe === 2) {
      return 'yellow';
    } else {
      return 'red';
    }
  }
}