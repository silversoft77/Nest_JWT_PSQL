import { PartialType } from '@nestjs/mapped-types';
import { CreateLocusMemberDto } from './create-locus-member.dto';

export class UpdateLocusMemberDto extends PartialType(CreateLocusMemberDto) {}
