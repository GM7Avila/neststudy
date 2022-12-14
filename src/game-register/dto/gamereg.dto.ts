import { IsNumber, IsString } from "class-validator";

export class GameregDto {
    @IsString()
    readonly title : string;

    @IsNumber()
    readonly id: number;

    @IsString({each: true})
    readonly tags: string[];
    
    @IsString()
    readonly age: string;
    
    @IsString({each: true})
    readonly description: string[];

}