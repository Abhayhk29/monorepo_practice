import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path';
import {ConfigModule} from "@nestjs/config"
import { PrismaModule } from './common/prisma/prisma.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      introspection: true,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        buildSchemaOptions: {
           numberScalarMode: 'integer',
        },
    }),

    PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
