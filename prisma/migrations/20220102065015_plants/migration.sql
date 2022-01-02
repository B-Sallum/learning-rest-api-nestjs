-- CreateTable
CREATE TABLE "Plant" (
    "id" TEXT NOT NULL,
    "scientificName" TEXT NOT NULL,
    "popularName" TEXT NOT NULL,
    "kingdom" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "order" TEXT NOT NULL,
    "family" TEXT NOT NULL,
    "subfamily" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Plant_pkey" PRIMARY KEY ("id")
);
