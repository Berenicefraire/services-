import { Component } from '@angular/core';
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'caracters';

  character : any = {};
  constructor( public service : CharactersService) {
  }

  ngOnInit() {
    this.service.getCharacters().subscribe(character => {
      this.character = character;
    });
    console.log(this.character);
  }



}

