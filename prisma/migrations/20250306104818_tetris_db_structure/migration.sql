-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_skills" (
    "user_id" TEXT NOT NULL,
    "skill_id" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,

    CONSTRAINT "users_skills_pkey" PRIMARY KEY ("user_id","skill_id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "user_skill_id" TEXT NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_boards" (
    "user_id" TEXT NOT NULL,
    "board_tetris_id" TEXT NOT NULL,

    CONSTRAINT "users_boards_pkey" PRIMARY KEY ("user_id","board_tetris_id")
);

-- CreateTable
CREATE TABLE "boards_tetris" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "boards_tetris_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "step_board_tetris" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "board_tetris_id" TEXT NOT NULL,
    "column" INTEGER NOT NULL,
    "row" INTEGER NOT NULL,

    CONSTRAINT "step_board_tetris_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "step_board_tetris_id" TEXT NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills_on_tasks" (
    "skill_id" TEXT NOT NULL,
    "task_id" TEXT NOT NULL,

    CONSTRAINT "skills_on_tasks_pkey" PRIMARY KEY ("skill_id","task_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "boards_tetris_id_key" ON "boards_tetris"("id");

-- CreateIndex
CREATE UNIQUE INDEX "step_board_tetris_id_key" ON "step_board_tetris"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tasks_id_key" ON "tasks"("id");

-- AddForeignKey
ALTER TABLE "users_skills" ADD CONSTRAINT "users_skills_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_skills" ADD CONSTRAINT "users_skills_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_boards" ADD CONSTRAINT "users_boards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_boards" ADD CONSTRAINT "users_boards_board_tetris_id_fkey" FOREIGN KEY ("board_tetris_id") REFERENCES "boards_tetris"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "step_board_tetris" ADD CONSTRAINT "step_board_tetris_board_tetris_id_fkey" FOREIGN KEY ("board_tetris_id") REFERENCES "boards_tetris"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_step_board_tetris_id_fkey" FOREIGN KEY ("step_board_tetris_id") REFERENCES "step_board_tetris"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skills_on_tasks" ADD CONSTRAINT "skills_on_tasks_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skills_on_tasks" ADD CONSTRAINT "skills_on_tasks_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
