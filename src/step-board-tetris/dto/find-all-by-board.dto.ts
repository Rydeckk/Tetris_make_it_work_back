import { IsUUID } from "class-validator";

export class FindAllByBoardDto {
    @IsUUID()
    boardTetrisId: string
}