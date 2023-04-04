"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const class_validator_1 = require("class-validator");
const validation_pipe_options_1 = require("./utils/validation-pipe.options");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const PREFIX = '/api/v1';
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    app.useGlobalPipes(new common_1.ValidationPipe(validation_pipe_options_1.validationPipeOptions));
    app.setGlobalPrefix(PREFIX);
    const config = app.get(config_1.ConfigService);
    const swagger = new swagger_1.DocumentBuilder()
        .setTitle('Kahoot clone')
        .setDescription('The API description')
        .setVersion('1.0')
        .setBasePath(PREFIX)
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swagger);
    swagger_1.SwaggerModule.setup('/api/v1/swagger', app, document);
    const PORT = config.get('PORT') || 8000;
    await app.listen(PORT, () => console.log(`The server has been started on ${PORT} port`));
}
bootstrap();
//# sourceMappingURL=main.js.map