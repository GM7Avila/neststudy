import { HttpException, HttpStatus, Injectable,  } from '@nestjs/common';
import { Game } from './entities/game.entity';

//SERVIÇOS -> RESPONSÁVEIS PELA REGRAS DE NEGÓCIO

@Injectable() //injeção de dependência prórpio do container do Nest
export class GamesService {

    private games: Game[] = [];

    create(createGameDto: any){ //data transfer object
        this.games.push(createGameDto);
        return createGameDto;
    } 

}


