import { HttpException, HttpStatus, Injectable,  } from '@nestjs/common';
import { Game } from './entities/game.entity';

//SERVIÇOS -> RESPONSÁVEIS PELA REGRAS DE NEGÓCIO

@Injectable() //injeção de dependência prórpio do container do Nest
export class GamesService {

    private games: Game[] = [

        //
        {
            title: "Batman",
            id: 112233,
            tags: ['adventure', 'action', 'investigation'],
            age: '17', //corrigir de acordo com o index do ID do <li>
            description: 'Batman description here',
        },

        {
            title: "Minecraft",
            id: 113322,
            tags: ['adventure', 'chill', 'open-world'],
            age: 'L', //corrigir
            description: 'Minecraft description here',
        },

        {
            title: "Red Dead Redeption",
            id: 332211,
            tags: ['adventure', 'action', 'old-west'],
            age: '18', //corrigir
            description: 'Red Dead Redpetion description here',
        },

    ];

    findAll(){
        return this.games;
    }

    findOne(id:string){
       const game = this.games.find((game) => game.id === Number(id));

       if(!game) {
            throw new HttpException(`Game ID ${id} not found`,
             HttpStatus.NOT_FOUND
            );
        }

        return game;
    }

    create(createGameDto: any){ //data transfer object
        this.games.push(createGameDto);
        return createGameDto;
    } //front-end envia as informações através do objeto de dados para o back-end
    

    // [] REVISAR A PARTIR DAQUI
    update(id: string, updateGameDto: any){
        const indexGame = this.games.findIndex(
            (game) => game.id === Number(id)
        );

        this.games[indexGame] = updateGameDto;
    }

    remove(id: string){
        const indexGame = this.games.findIndex(
            (game) => game.id === Number(id),
        );

        if(indexGame >= 0) {
            this.games.splice(indexGame, 1);
        }
    }

}


