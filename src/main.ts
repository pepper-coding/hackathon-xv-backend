import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { NestFactory } from "@nestjs/core";

import { ConfigService } from "@core/services/config.service";
import { SwaggerModule } from "@core/modules/swagger.module";
import { AppModule } from "@core/modules/app.module";

async function bootstrap() {
    const adapter = new FastifyAdapter();

    const app = await NestFactory.create<NestFastifyApplication>(AppModule, adapter);

    const swagger = app.get(SwaggerModule);

    swagger.useApp(app);
    
    const config = app.get(ConfigService);

    const host = config.getAppHost();

    const port = config.getAppPort();

    return await app.listen(port, host);
}

bootstrap();