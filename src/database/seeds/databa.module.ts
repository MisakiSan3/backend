/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from './database.providers';

@Global()
@Module({
  providers: [
    ...databaseProviders,

  ],
  imports: [DatabaseModule,ConfigModule],
  exports: [...databaseProviders],
})
export class DatabaseModule {}