import { Module } from "@nestjs/common";
import { DiningMenuModuleBase } from "./base/diningMenu.module.base";
import { DiningMenuService } from "./diningMenu.service";
import { DiningMenuController } from "./diningMenu.controller";
import { DiningMenuResolver } from "./diningMenu.resolver";

@Module({
  imports: [DiningMenuModuleBase],
  controllers: [DiningMenuController],
  providers: [DiningMenuService, DiningMenuResolver],
  exports: [DiningMenuService],
})
export class DiningMenuModule {}
