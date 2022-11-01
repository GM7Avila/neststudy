import { PartialType } from "@nestjs/mapped-types";
import { GameregDto } from "./gamereg.dto";

export class GameupdateDto extends PartialType(GameregDto){}


