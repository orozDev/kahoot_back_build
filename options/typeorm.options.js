"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormOptions = void 0;
const config_1 = require("@nestjs/config");
exports.typeormOptions = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: async (config) => ({
        type: 'postgres',
        host: config.get('POSTGRES_HOST'),
        port: config.get('POSTGRES_PORT'),
        username: config.get('POSTGRES_USER'),
        password: config.get('POSTGRES_PASSWORD'),
        database: config.get('POSTGRES_DB'),
        entities: [__dirname + '/**/*.entity.{js,ts}'],
        synchronize: true,
        autoLoadEntities: true,
    }),
};
//# sourceMappingURL=typeorm.options.js.map