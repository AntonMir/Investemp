import {Module} from '@nestjs/common';
import { TelegramModule } from '@telegram/telegram.module';
import { ConfigModule } from '@nestjs/config';
import {UserModule} from "@src/api/user/user.module";
import {RouterModule, RouteTree} from "@nestjs/core";

const apiPrefixList: RouteTree[] = [
  {
    path: 'test',
    module: UserModule,
    children: [
      {
        path: 'test2',
        module: TelegramModule
      }
    ]
  }
]

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegramModule,
    UserModule,
    RouterModule.register(
      [
        {
          path: 'dashboard',
          module: UserModule,
        },
        {
          path: 'tg',
          module: TelegramModule,
        },
          ...apiPrefixList
      ],
    ),
  ],
})
export class AppModule {}
