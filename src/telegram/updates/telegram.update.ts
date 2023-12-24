import { Ctx, Start, Update, On, Message, Command } from "nestjs-telegraf";
// import { ConfigService } from "@nestjs/config";
// import { TelegramEnv } from "../env/investamp.env";
import { Logger } from "@nestjs/common";
// import { Message as TelegramMessage } from "typegram";
import { MENU } from "../tokens/scenes";
import { SceneContext } from 'telegraf/typings/scenes';
// import { SceneContext } from "telegraf/typings/scenes";
// import {SceneContext} from "telegraf/typings/scenes";
// import { SessionContext } from "telegraf/typings/session";
// import { UserSessionData } from "../types/user-session-data";


// import TextMessage = TelegramMessage.TextMessage;


@Update()
export class TelegramUpdate {
  private readonly logger: Logger = new Logger(TelegramUpdate.name);
  // private readonly webAppUri: string;

  constructor(
    // private readonly configService: ConfigService<TelegramEnv, true>,
    // private readonly sitesService: SitesService,
  ) {
    // this.webAppUri = configService.getOrThrow<string>("TELEGRAM__WEB_APP_URI");
  }

  @Start()
  async startCommand(@Ctx() ctx: SceneContext, @Message() message: any) {
    // this.logger.debug(`start on chat: ${message.chat.id}`);
    // if (message.chat.type === "private") {
    //   const name = [message.from.first_name, message.from.last_name].join(" ");
    //   await ctx.replyWithHTML(`Добрый день <strong>${name}</strong>`);
    //
    //   await ctx.scene.enter(MENU);
    // }
  }

  // @Command("notify")
  // async onNotify(@Ctx() ctx: SessionContext<UserSessionData> & SceneContext, @Message() message: TextMessage) {
  //   if (message.chat.type !== "private") {
  //     const match = /^\/notify (.+)$/gi.exec(message.text);
  //     const site = await this.sitesService.addNotificationChat(ctx.session.user.id, match[1], message.chat.id);
  //     if (site) {
  //       await ctx.replyWithHTML(`Уведомления для домена ${site.domain} подключены в текущий чат`);
  //     } else {
  //       await ctx.replyWithHTML(`Домен ${match[1]} не найден, подключите его в боте`);
  //     }
  //   }
  // }

  // @On("message")
  // async onMessage(@Ctx() ctx: SceneContext, @Message() message: TelegramMessage) {
  //   if (message.chat.type === "private") {
  //     await ctx.replyWithHTML(`Выберите пункт меню 👆`);
  //   }
  // }
}
