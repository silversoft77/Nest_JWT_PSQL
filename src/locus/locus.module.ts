import { Module } from '@nestjs/common';
import { LocusService } from './locus.service';
import { LocusController } from './locus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locus } from './entities/locus.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Locus])],
  controllers: [LocusController],
  providers: [LocusService],
})
export class LocusModule {}
