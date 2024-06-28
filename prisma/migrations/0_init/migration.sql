-- CreateTable
CREATE TABLE "colors" (
    "id" UUID NOT NULL,
    "text" VARCHAR(50) NOT NULL,
    "hex" VARCHAR(9) NOT NULL,

    CONSTRAINT "colors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" UUID NOT NULL,
    "color_id" UUID NOT NULL,
    "size_id" UUID NOT NULL,
    "shape_id" UUID NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shapes" (
    "id" UUID NOT NULL,
    "text" VARCHAR(50) NOT NULL,

    CONSTRAINT "shapes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sizes" (
    "id" UUID NOT NULL,
    "text" VARCHAR(50) NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "sizes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_color_id_size_id_shape_id_key" ON "products"("color_id", "size_id", "shape_id");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "colors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_shape_id_fkey" FOREIGN KEY ("shape_id") REFERENCES "shapes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_size_id_fkey" FOREIGN KEY ("size_id") REFERENCES "sizes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

