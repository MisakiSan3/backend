/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common/decorators';
import { DatabaseModule } from 'src/database/seeds';

@Module({
    imports: [DatabaseModule],
    controllers: [],
    providers: [],
    exports: []  
})
export class VetasModule {}