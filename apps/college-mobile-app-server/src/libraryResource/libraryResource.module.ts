import { Module } from "@nestjs/common";
import { LibraryResourceModuleBase } from "./base/libraryResource.module.base";
import { LibraryResourceService } from "./libraryResource.service";
import { LibraryResourceController } from "./libraryResource.controller";
import { LibraryResourceResolver } from "./libraryResource.resolver";

@Module({
  imports: [LibraryResourceModuleBase],
  controllers: [LibraryResourceController],
  providers: [LibraryResourceService, LibraryResourceResolver],
  exports: [LibraryResourceService],
})
export class LibraryResourceModule {}
