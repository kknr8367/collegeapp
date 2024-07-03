import * as graphql from "@nestjs/graphql";
import { DiningMenuResolverBase } from "./base/diningMenu.resolver.base";
import { DiningMenu } from "./base/DiningMenu";
import { DiningMenuService } from "./diningMenu.service";

@graphql.Resolver(() => DiningMenu)
export class DiningMenuResolver extends DiningMenuResolverBase {
  constructor(protected readonly service: DiningMenuService) {
    super(service);
  }
}
