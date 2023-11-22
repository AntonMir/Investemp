import {Module} from '@nestjs/common';
import { TelegramModule } from '@telegram/telegram.module';
import { ConfigModule } from '@nestjs/config';
import {UserModule} from "@src/api/user/user.module";
import {RouterModule} from "@nestjs/core";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegramModule,
    UserModule,
    RouterModule.register([
      {
        path: 'dashboard',
        module: UserModule,
      },
    ]),
  ],
})
export class AppModule {}
