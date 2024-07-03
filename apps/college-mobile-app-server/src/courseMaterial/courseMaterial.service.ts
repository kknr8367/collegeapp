import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CourseMaterialServiceBase } from "./base/courseMaterial.service.base";

@Injectable()
export class CourseMaterialService extends CourseMaterialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
