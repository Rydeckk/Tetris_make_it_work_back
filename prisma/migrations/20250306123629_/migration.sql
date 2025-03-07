/*
  Warnings:

  - Added the required column `order` to the `step_board_tetris` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "step_board_tetris" ADD COLUMN     "order" INTEGER NOT NULL;
