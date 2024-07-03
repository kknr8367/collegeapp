import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiningMenuServiceBase } from "./base/diningMenu.service.base";

@Injectable()
export class DiningMenuService extends DiningMenuServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
