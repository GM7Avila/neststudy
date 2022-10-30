import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { GamesService } from './games.service';


//controller não tem responsabilidade das regras de negócios
@Controller('games')
export class GamesController {

    constructor(private readonly gamesService: GamesService){
        
    }

    @Get()
    FindAll(){
        return this.gamesService.findAll();
    }

    // rota gameID (dinâmica)
    @Get(':id')
    FindOne(@Param('id') id: string){
        return this.gamesService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        return this.gamesService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return this.gamesService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.gamesService.remove(id)
    }

}
