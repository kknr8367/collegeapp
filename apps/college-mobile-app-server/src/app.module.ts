import { Module } from "@nestjs/common";
import { ClassModelModule } from "./classModel/classModel.module";
import { CourseMaterialModule } from "./courseMaterial/courseMaterial.module";
import { GradeModule } from "./grade/grade.module";
import { NewsModule } from "./news/news.module";
import { EventModule } from "./event/event.module";
import { MessageModule } from "./message/message.module";
import { LibraryResourceModule } from "./libraryResource/libraryResource.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { HealthServiceModule } from "./healthService/healthService.module";
import { ForumModule } from "./forum/forum.module";
import { DiningMenuModule } from "./diningMenu/diningMenu.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ClassModelModule,
    CourseMaterialModule,
    GradeModule,
    NewsModule,
    EventModule,
    MessageModule,
    LibraryResourceModule,
    FeedbackModule,
    HealthServiceModule,
    ForumModule,
    DiningMenuModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
