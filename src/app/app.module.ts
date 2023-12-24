import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {ApiModule} from "../api/api.module";
import {TelegramModule} from "../telegram/telegram.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    ApiModule,
    TelegramModule
  ]
})
export class AppModule {}
