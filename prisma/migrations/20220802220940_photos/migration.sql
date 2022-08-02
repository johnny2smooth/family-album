/*
  Warnings:

  - You are about to drop the `Home` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Home";

-- CreateTable
CREATE TABLE "Photos" (
    "id" TEXT NOT NULL,
    "image" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "people" TEXT[],
    "location" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);
