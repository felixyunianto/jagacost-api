import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import {
  appConfig,
  databaseConfig,
  jwtConfig,
  midtransConfig,
  redisConfig,
  resendConfig,
  validationSchema,
} from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.env',
      validationSchema,
      load: [appConfig, databaseConfig, jwtConfig, redisConfig, resendConfig, midtransConfig],
    }),
  ],
})
export class AppModule {}
