import * as graphql from "@nestjs/graphql";
import { CourseMaterialResolverBase } from "./base/courseMaterial.resolver.base";
import { CourseMaterial } from "./base/CourseMaterial";
import { CourseMaterialService } from "./courseMaterial.service";

@graphql.Resolver(() => CourseMaterial)
export class CourseMaterialResolver extends CourseMaterialResolverBase {
  constructor(protected readonly service: CourseMaterialService) {
    super(service);
  }
}
