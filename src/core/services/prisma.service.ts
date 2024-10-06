import { Injectable, OnApplicationBootstrap } from "@nestjs/common";

import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService implements OnApplicationBootstrap {
    private readonly client: PrismaClient;

    constructor() {
        this.client = new PrismaClient();
    }

    public async onApplicationBootstrap() {
        return await this.client.$connect();
    }
}