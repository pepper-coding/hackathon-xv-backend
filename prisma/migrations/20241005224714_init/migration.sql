-- CreateTable
CREATE TABLE "user" (
    "login" TEXT NOT NULL,
    "internal_id" TEXT NOT NULL,
    "external_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("internal_id")
);

-- CreateTable
CREATE TABLE "password" (
    "user_id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "internal_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "password_pkey" PRIMARY KEY ("internal_id")
);

-- CreateTable
CREATE TABLE "session" (
    "user_id" TEXT NOT NULL,
    "internal_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "session_pkey" PRIMARY KEY ("internal_id")
);

-- CreateTable
CREATE TABLE "access" (
    "access" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "internal_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "access_pkey" PRIMARY KEY ("internal_id")
);

-- CreateTable
CREATE TABLE "refresh" (
    "refresh" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "internal_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "refresh_pkey" PRIMARY KEY ("internal_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_login_key" ON "user"("login");

-- CreateIndex
CREATE UNIQUE INDEX "user_external_id_key" ON "user"("external_id");

-- CreateIndex
CREATE UNIQUE INDEX "password_user_id_key" ON "password"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "password_password_key" ON "password"("password");

-- CreateIndex
CREATE UNIQUE INDEX "session_user_id_key" ON "session"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "access_access_key" ON "access"("access");

-- CreateIndex
CREATE UNIQUE INDEX "access_session_id_key" ON "access"("session_id");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_refresh_key" ON "refresh"("refresh");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_session_id_key" ON "refresh"("session_id");

-- AddForeignKey
ALTER TABLE "password" ADD CONSTRAINT "password_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "access" ADD CONSTRAINT "access_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "session"("internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh" ADD CONSTRAINT "refresh_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "session"("internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;
