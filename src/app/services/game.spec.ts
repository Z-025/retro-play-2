import { TestBed } from '@angular/core/testing';

// 1. Importa la CLASE 'GameService', no la interfaz 'Game'.
//    Asumo que tu archivo se llama 'game.ts'.
import { GameService } from './game'; 

// 2. Describe la prueba para el 'GameService'.
describe('GameService', () => {
  // 3. La variable debe ser del tipo 'GameService'.
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // 4. Inyecta la CLASE 'GameService'.
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Una prueba extra para verificar que el método getGames() funciona.
  it('getGames() debería retornar un array de juegos', () => {
    const games = service.getGames();
    // Comprueba que el resultado es un array.
    expect(Array.isArray(games)).toBe(true);
    // Comprueba que el array no está vacío.
    expect(games.length).toBeGreaterThan(0);
  });
});