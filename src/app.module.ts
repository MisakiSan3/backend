/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VetasModule } from './modules/ventas/ventas.module';

@Module({
  imports: [VetasModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 432,
    username: 'postgres',
    password: '123',
    database: 'libreria',
    entities: [],
    synchronize: true,
    
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
