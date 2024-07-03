import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiningMenuService } from "./diningMenu.service";
import { DiningMenuControllerBase } from "./base/diningMenu.controller.base";

@swagger.ApiTags("diningMenus")
@common.Controller("diningMenus")
export class DiningMenuController extends DiningMenuControllerBase {
  constructor(protected readonly service: DiningMenuService) {
    super(service);
  }
}
