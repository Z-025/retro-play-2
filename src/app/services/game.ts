import { Injectable } from '@angular/core';

export interface Game {
  id: number;
  name: string;
  platform: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Game[] = [
    {
      id: 1,
      name: 'Super Mario Bros. 3',
      platform: 'NES',
      price: 25,
      imageUrl: '/assets/img/games/super-mario-3.jpg'
    },
    {
      id: 2,
      name: 'The Legend of Zelda: A Link to the Past',
      platform: 'SNES',
      price: 40,
      imageUrl: '/assets/img/games/zelda-snes.jpg'
    },
    {
      id: 3,
      name: 'Sonic the Hedgehog 2',
      platform: 'Sega Genesis',
      price: 30,
      imageUrl: '/assets/img/games/sonic-2.jpg'
    },
    {
      id: 4,
      name: 'Chrono Trigger',
      platform: 'SNES',
      price: 70,
      imageUrl: '/assets/img/games/chrono-trigger.jpg'
    },
    {
      id: 5,
      name: 'Street Fighter II',
      platform: 'SNES',
      price: 35,
      imageUrl: '/assets/img/games/sf2.jpg'
    },
    {
      id: 6,
      name: 'Metroid',
      platform: 'NES',
      price: 20,
      imageUrl: '/assets/img/games/metroid.jpg'
    }
  ];

  constructor() {}

  getGames(): Game[] {
    return this.games;
  }
}
