// import * as moduleAlias from 'module-alias'
// moduleAlias()
import {TelegramEnv} from "./telegram/env/telegram.env";
import {AppModule} from "./app/app.module";
import {NestFactory} from '@nestjs/core';
import { ConfigService } from "@nestjs/config";
import * as moment from "moment-timezone";
import {AppEnv} from "./app/env/app.env";
import {Logger} from "@nestjs/common";
import {botToken} from "./telegram/tokens/bot";
import {getBotToken} from "nestjs-telegraf";


(async () => {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');

  const logger = new Logger(AppModule.name);

  // .env
  const configService = app.get(ConfigService<TelegramEnv & AppEnv, false>);
  // const botToken = configService.getOrThrow('TELEGRAM__BOT_API_TOKEN', {infer: true})
  const port = configService.getOrThrow("APPLICATION_PORT", { infer: true });
  const timeZone = configService.getOrThrow("APPLICATION_TIMEZONE", { infer: true });

  // дефолтная таймзона для всех использований moment
  moment.tz.setDefault(timeZone);

  const bot = app.get(getBotToken(botToken));
  bot.catch((err) => console.error(err));

  // webhook
  // const webhookUri = configService.getOrThrow<string>("TELEGRAM__WEBHOOK_PATH");
  // app.use(bot.webhookCallback(webhookUri));

  await app.listen(port, () => {
    logger.log(`Server start on port :${port}`)
  });
})()
