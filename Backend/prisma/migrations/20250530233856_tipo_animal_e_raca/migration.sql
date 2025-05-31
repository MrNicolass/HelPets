/*
  Warnings:

  - You are about to drop the column `especie` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `imagemUrl` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `raca` on the `Animal` table. All the data in the column will be lost.
  - Added the required column `racaAnimalId` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoAnimalId` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "especie",
DROP COLUMN "imagemUrl",
DROP COLUMN "raca",
ADD COLUMN     "racaAnimalId" TEXT NOT NULL,
ADD COLUMN     "tipoAnimalId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TipoAnimal" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "TipoAnimal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RacaAnimal" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tipoAnimalId" TEXT NOT NULL,

    CONSTRAINT "RacaAnimal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImagemAnimal" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "animalId" TEXT NOT NULL,

    CONSTRAINT "ImagemAnimal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RacaAnimal" ADD CONSTRAINT "RacaAnimal_tipoAnimalId_fkey" FOREIGN KEY ("tipoAnimalId") REFERENCES "TipoAnimal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_tipoAnimalId_fkey" FOREIGN KEY ("tipoAnimalId") REFERENCES "TipoAnimal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_racaAnimalId_fkey" FOREIGN KEY ("racaAnimalId") REFERENCES "RacaAnimal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagemAnimal" ADD CONSTRAINT "ImagemAnimal_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
