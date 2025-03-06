import { IsInt, IsString, IsUUID } from "class-validator";

export class CreateStepBoardTetriDto {
    @IsString()
    name: string

    @IsInt()
    row: number

    @IsUUID()
    boardTetrisId: string
}
