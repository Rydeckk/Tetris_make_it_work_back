import { IsNotEmpty, IsUUID } from "class-validator";

export class FindAllByBoardDto {
    @IsNotEmpty()
    @IsUUID()
    boardTetrisId: string
}