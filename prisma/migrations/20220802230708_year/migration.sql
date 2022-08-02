/*
  Warnings:

  - You are about to drop the column `date` on the `Photos` table. All the data in the column will be lost.
  - Added the required column `year` to the `Photos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Photos" DROP COLUMN "date",
ADD COLUMN     "year" INTEGER NOT NULL;
