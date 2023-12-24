import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TelegrafModule, TelegrafModuleOptions} from "nestjs-telegraf";
import {AppEnv} from "../app/env/app.env";
import {TelegramEnv} from "./env/telegram.env";
import {MenuScene} from "./scenes/menu.scene";
import {TelegramUpdate} from "./updates/telegram.update";
import {botToken} from "./tokens/bot";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegrafModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      botName: botToken,
      useFactory: async (
          configService: ConfigService<AppEnv & TelegramEnv, false>
      ): Promise<TelegrafModuleOptions> => {

        const config: TelegrafModuleOptions = {
          token: configService.getOrThrow<string>("TELEGRAM__BOT_API_TOKEN", {infer: true}),
          // middlewares: [session({ store }), auth(usersService)],
          botName: configService.getOrThrow<string>("TELEGRAM__BOT_USERNAME", {infer: true}),
        };



        return config
      },
      inject: [ConfigService],
    })
  ],
  providers: [
    TelegramUpdate,
    MenuScene,
  ]
})
export class TelegramModule {}
