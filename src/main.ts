import * as moduleAlias from 'module-alias'
moduleAlias()
import {TelegramEnv} from "@telegram/env/telegram.env";
import {AppModule} from "@app/app.module";
import {NestFactory} from '@nestjs/core';
import { ConfigService } from "@nestjs/config";
import * as moment from "moment-timezone";
import {AppEnv} from "@app/env/app.env";


(async () => {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');


  // .env
  const configService = app.get(ConfigService<TelegramEnv & AppEnv>);
  // const botToken = configService.getOrThrow('TELEGRAM__BOT_API_TOKEN', {infer: true})
  const port = configService.getOrThrow("APPLICATION_PORT", { infer: true });
  const timeZone = configService.getOrThrow("APPLICATION_TIMEZONE", { infer: true });

  moment.tz.setDefault(timeZone);

  await app.listen(port, () => {
    console.log(`Server started...`)
  });
})()
