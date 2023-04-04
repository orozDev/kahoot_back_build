"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormOptions = void 0;
const config_1 = require("@nestjs/config");
exports.typeormOptions = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: async (config) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get('DB_PORT'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity.{js,ts}'],
        synchronize: true,
        autoLoadEntities: true,
    }),
};
//# sourceMappingURL=typeorm.options.js.map