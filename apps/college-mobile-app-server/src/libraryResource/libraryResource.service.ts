import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LibraryResourceServiceBase } from "./base/libraryResource.service.base";

@Injectable()
export class LibraryResourceService extends LibraryResourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
