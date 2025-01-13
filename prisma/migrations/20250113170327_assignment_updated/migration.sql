/*
  Warnings:

  - The primary key for the `Assignment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AssignmentId` on the `Assignment` table. All the data in the column will be lost.
  - The required column `assignmentId` was added to the `Assignment` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Assignment" DROP CONSTRAINT "Assignment_pkey",
DROP COLUMN "AssignmentId",
ADD COLUMN     "assignmentId" TEXT NOT NULL,
ADD CONSTRAINT "Assignment_pkey" PRIMARY KEY ("assignmentId");
