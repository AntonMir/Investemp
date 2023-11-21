import {Module} from '@nestjs/common';
import { TelegramModule } from '@telegram/telegram.module';
import { ConfigModule } from '@nestjs/config';
import {UserModule} from "@src/api/user/user.module";

@Module({
  imports: [ConfigModule.forRoot(), TelegramModule, UserModule]
})
export class AppModule {}
