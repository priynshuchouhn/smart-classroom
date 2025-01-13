-- CreateTable
CREATE TABLE "StudentAttachment" (
    "submissionId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudentAttachment_pkey" PRIMARY KEY ("submissionId")
);

-- CreateTable
CREATE TABLE "Assignment" (
    "AssignmentId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Assignment_pkey" PRIMARY KEY ("AssignmentId")
);

-- CreateIndex
CREATE INDEX "StudentAttachment_moduleId_idx" ON "StudentAttachment"("moduleId");

-- CreateIndex
CREATE INDEX "StudentAttachment_studentId_idx" ON "StudentAttachment"("studentId");

-- CreateIndex
CREATE INDEX "Assignment_moduleId_idx" ON "Assignment"("moduleId");

-- AddForeignKey
ALTER TABLE "StudentAttachment" ADD CONSTRAINT "StudentAttachment_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("moduleId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("moduleId") ON DELETE CASCADE ON UPDATE CASCADE;
