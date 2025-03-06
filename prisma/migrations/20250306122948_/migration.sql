/*
  Warnings:

  - You are about to drop the column `column` on the `step_board_tetris` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "boards_tetris" ADD COLUMN     "column" INTEGER NOT NULL DEFAULT 10;

-- AlterTable
ALTER TABLE "step_board_tetris" DROP COLUMN "column",
ALTER COLUMN "row" SET DEFAULT 5;
