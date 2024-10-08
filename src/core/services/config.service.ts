import { ConfigService as NestConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfigService {
    constructor(private readonly nestConfigService: NestConfigService) {}

    public getAppHost() {
        return this.nestConfigService.get("APP_HOST");
    }

    public getAppPort() {
        return this.nestConfigService.get("APP_PORT");
    }
}