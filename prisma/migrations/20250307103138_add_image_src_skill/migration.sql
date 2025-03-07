-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "imageSrc" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_skills" (
    "user_id" TEXT NOT NULL,
    "skill_id" TEXT NOT NULL,
    "weight" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "users_skills_pkey" PRIMARY KEY ("user_id","skill_id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT 'https://cdn.iconscout.com/icon/free/png-256/programming-80-1175202.png',

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
    "column" INTEGER NOT NULL DEFAULT 10,

    CONSTRAINT "boards_tetris_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "step_board_tetris" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "board_tetris_id" TEXT NOT NULL,
    "row" INTEGER NOT NULL DEFAULT 5,
    "order" INTEGER NOT NULL,

    CONSTRAINT "step_board_tetris_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "step_board_tetris_id" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills_on_tasks" (
    "skill_id" TEXT NOT NULL,
    "task_id" TEXT NOT NULL,

    CONSTRAINT "skills_on_tasks_pkey" PRIMARY KEY ("skill_id","task_id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sender_id" TEXT NOT NULL,
    "recipient_id" TEXT NOT NULL,
    "task_id" TEXT NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "boards_tetris_id_key" ON "boards_tetris"("id");

-- CreateIndex
CREATE UNIQUE INDEX "step_board_tetris_id_key" ON "step_board_tetris"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tasks_id_key" ON "tasks"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Notification_id_key" ON "Notification"("id");

-- AddForeignKey
ALTER TABLE "users_skills" ADD CONSTRAINT "users_skills_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_skills" ADD CONSTRAINT "users_skills_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_boards" ADD CONSTRAINT "users_boards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_recipient_id_fkey" FOREIGN KEY ("recipient_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
