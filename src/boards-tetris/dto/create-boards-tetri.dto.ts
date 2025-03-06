import { IsString } from "class-validator";

export class CreateBoardsTetriDto {
    @IsString()
    name: string
}
