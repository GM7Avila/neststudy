import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { GameregDto } from './dto/gamereg.dto';
import { GameupdateDto } from './dto/gameupdate.dto';
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
    findOne(@Param('id') id: string){
        return this.gamesService.findOne(id);
    }

    @Post()
    create(@Body() gameregDto: GameregDto) {
        return this.gamesService.create(gameregDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() gameUpdate: GameupdateDto){
        return this.gamesService.update(id, gameUpdate);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.gamesService.remove(id)
    }

}
