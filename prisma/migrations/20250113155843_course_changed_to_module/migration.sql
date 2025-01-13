/*
  Warnings:

  - The primary key for the `Attachment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `attachment_id` on the `Attachment` table. All the data in the column will be lost.
  - You are about to drop the column `course_id` on the `Attachment` table. All the data in the column will be lost.
  - The primary key for the `Subject` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `subject_id` on the `Subject` table. All the data in the column will be lost.
  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.
  - The required column `attachmentId` was added to the `Attachment` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `moduleId` to the `Attachment` table without a default value. This is not possible if the table is not empty.
  - The required column `subjectId` was added to the `Subject` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Attachment" DROP CONSTRAINT "Attachment_course_id_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_subject_id_fkey";

-- DropIndex
DROP INDEX "Attachment_course_id_idx";

-- AlterTable
ALTER TABLE "Attachment" DROP CONSTRAINT "Attachment_pkey",
DROP COLUMN "attachment_id",
DROP COLUMN "course_id",
ADD COLUMN     "attachmentId" TEXT NOT NULL,
ADD COLUMN     "moduleId" TEXT NOT NULL,
ADD CONSTRAINT "Attachment_pkey" PRIMARY KEY ("attachmentId");

-- AlterTable
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_pkey",
DROP COLUMN "subject_id",
ADD COLUMN     "subjectId" TEXT NOT NULL,
ADD CONSTRAINT "Subject_pkey" PRIMARY KEY ("subjectId");

-- DropTable
DROP TABLE "Course";

-- CreateTable
CREATE TABLE "Module" (
    "moduleId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "subjectId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("moduleId")
);

-- CreateIndex
CREATE INDEX "Attachment_moduleId_idx" ON "Attachment"("moduleId");

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("subjectId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("moduleId") ON DELETE CASCADE ON UPDATE CASCADE;
