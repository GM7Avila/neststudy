import { Body, Controller, Post} from '@nestjs/common';
import { GameregDto } from './dto/gamereg.dto';
import { GamesService } from './games.service';
@Controller('games')
export class GamesController {

    constructor(private readonly gamesService: GamesService){}

    @Post()
    create(@Body() gameregDto: GameregDto) {
        return this.gamesService.create(gameregDto);
    }

}
