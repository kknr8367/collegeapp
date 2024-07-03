import { Module } from "@nestjs/common";
import { CourseMaterialModuleBase } from "./base/courseMaterial.module.base";
import { CourseMaterialService } from "./courseMaterial.service";
import { CourseMaterialController } from "./courseMaterial.controller";
import { CourseMaterialResolver } from "./courseMaterial.resolver";

@Module({
  imports: [CourseMaterialModuleBase],
  controllers: [CourseMaterialController],
  providers: [CourseMaterialService, CourseMaterialResolver],
  exports: [CourseMaterialService],
})
export class CourseMaterialModule {}
