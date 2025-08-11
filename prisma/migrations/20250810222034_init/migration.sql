-- CreateTable
CREATE TABLE "public"."Peticion" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Peticion_pkey" PRIMARY KEY ("id")
);
