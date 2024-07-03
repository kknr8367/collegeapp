import * as graphql from "@nestjs/graphql";
import { LibraryResourceResolverBase } from "./base/libraryResource.resolver.base";
import { LibraryResource } from "./base/LibraryResource";
import { LibraryResourceService } from "./libraryResource.service";

@graphql.Resolver(() => LibraryResource)
export class LibraryResourceResolver extends LibraryResourceResolverBase {
  constructor(protected readonly service: LibraryResourceService) {
    super(service);
  }
}
