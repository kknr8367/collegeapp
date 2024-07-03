import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LibraryResourceService } from "./libraryResource.service";
import { LibraryResourceControllerBase } from "./base/libraryResource.controller.base";

@swagger.ApiTags("libraryResources")
@common.Controller("libraryResources")
export class LibraryResourceController extends LibraryResourceControllerBase {
  constructor(protected readonly service: LibraryResourceService) {
    super(service);
  }
}
