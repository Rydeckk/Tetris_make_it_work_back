-- DropForeignKey
ALTER TABLE "skills_on_tasks" DROP CONSTRAINT "skills_on_tasks_skill_id_fkey";

-- DropForeignKey
ALTER TABLE "skills_on_tasks" DROP CONSTRAINT "skills_on_tasks_task_id_fkey";

-- DropForeignKey
ALTER TABLE "step_board_tetris" DROP CONSTRAINT "step_board_tetris_board_tetris_id_fkey";

-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_step_board_tetris_id_fkey";

-- DropForeignKey
ALTER TABLE "users_boards" DROP CONSTRAINT "users_boards_board_tetris_id_fkey";

-- DropForeignKey
ALTER TABLE "users_skills" DROP CONSTRAINT "users_skills_skill_id_fkey";

-- DropForeignKey
ALTER TABLE "users_skills" DROP CONSTRAINT "users_skills_user_id_fkey";

-- AddForeignKey
ALTER TABLE "users_skills" ADD CONSTRAINT "users_skills_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_skills" ADD CONSTRAINT "users_skills_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_boards" ADD CONSTRAINT "users_boards_board_tetris_id_fkey" FOREIGN KEY ("board_tetris_id") REFERENCES "boards_tetris"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "step_board_tetris" ADD CONSTRAINT "step_board_tetris_board_tetris_id_fkey" FOREIGN KEY ("board_tetris_id") REFERENCES "boards_tetris"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_step_board_tetris_id_fkey" FOREIGN KEY ("step_board_tetris_id") REFERENCES "step_board_tetris"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skills_on_tasks" ADD CONSTRAINT "skills_on_tasks_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skills_on_tasks" ADD CONSTRAINT "skills_on_tasks_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
