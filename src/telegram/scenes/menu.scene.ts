import { Injectable, Logger } from "@nestjs/common";
import { Ctx, Scene, SceneEnter, SceneLeave } from "nestjs-telegraf";
import { Markup } from "telegraf";
// import { Action } from "nestjs-telegraf/dist/decorators/listeners/action.decorator";
import { SceneContext } from "telegraf/typings/scenes";
import { MENU, SITES_ADD, SITES_LIST } from "../tokens/scenes";

@Injectable()
@Scene(MENU)
export class MenuScene {
  private readonly logger = new Logger(MenuScene.name);

  @SceneEnter()
  async enter(@Ctx() ctx: any) {
    this.logger.debug(`enter ${MENU}`);

    await ctx.replyWithHTML(
      `Меню:`,
      Markup.inlineKeyboard(
        [
          Markup.button.callback("🌐 Список подключенных сайтов", SITES_LIST),
          Markup.button.callback("➕ Подключить новый сайт", SITES_ADD),
        ],
        {
          columns: 1,
        },
      ),
    );
  }

  // @SceneLeave()
  // async leave() {
  //   this.logger.debug(`leave ${MENU}`);
  // }

  // @Action(SITES_LIST)
  // async onSitesList(@Ctx() ctx: SceneContext) {
  //   await ctx.answerCbQuery();
  //
  //   const messageId = ctx.callbackQuery.message.message_id;
  //   await ctx.deleteMessage(messageId);
  //
  //   await ctx.scene.enter(SITES_LIST);
  // }

  // @Action(SITES_ADD)
  // async onAddSite(@Ctx() ctx: SceneContext) {
  //   await ctx.answerCbQuery();
  //
  //   const messageId = ctx.callbackQuery.message.message_id;
  //   await ctx.deleteMessage(messageId);
  //
  //   await ctx.scene.enter(SITES_ADD, {
  //     domain: "",
  //   });
  // }
}
