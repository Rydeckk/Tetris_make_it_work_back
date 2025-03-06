import { IsInt, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateStepBoardTetriDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsUUID()
    boardTetrisId: string
}
