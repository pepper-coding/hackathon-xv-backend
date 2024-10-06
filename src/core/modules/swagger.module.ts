import { DocumentBuilder, SwaggerModule as NestSwaggerModule } from "@nestjs/swagger";
import { NestFastifyApplication } from "@nestjs/platform-fastify";
import { Global, Module } from "@nestjs/common";

@Global()
@Module({})
export class SwaggerModule {
    private app: NestFastifyApplication;

    public configure() {
        const builder = new DocumentBuilder();

        const documentation = builder.setTitle("Nest server").setDescription("Nest server implementation").build();

        const document = NestSwaggerModule.createDocument(this.app, documentation);

        return NestSwaggerModule.setup("/documentation", this.app, document);
    }

    public useApp(app: NestFastifyApplication) {
        return this.app = app;
    }
}