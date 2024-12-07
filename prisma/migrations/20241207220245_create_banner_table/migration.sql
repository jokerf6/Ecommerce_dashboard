/*
  Warnings:

  - You are about to drop the column `imageAr` on the `banner` table. All the data in the column will be lost.
  - You are about to drop the column `imageEn` on the `banner` table. All the data in the column will be lost.
  - Added the required column `descriptionAr` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionEn` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `banner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `banner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "descriptionAr" TEXT NOT NULL,
ADD COLUMN     "descriptionEn" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "banner" DROP COLUMN "imageAr",
DROP COLUMN "imageEn",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
