import { Module } from '@nestjs/common';
import { LocusMemberService } from './locus-member.service';
import { LocusMemberController } from './locus-member.controller';

@Module({
  controllers: [LocusMemberController],
  providers: [LocusMemberService],
})
export class LocusMemberModule {}
