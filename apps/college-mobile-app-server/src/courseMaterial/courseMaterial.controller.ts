import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CourseMaterialService } from "./courseMaterial.service";
import { CourseMaterialControllerBase } from "./base/courseMaterial.controller.base";

@swagger.ApiTags("courseMaterials")
@common.Controller("courseMaterials")
export class CourseMaterialController extends CourseMaterialControllerBase {
  constructor(protected readonly service: CourseMaterialService) {
    super(service);
  }
}
