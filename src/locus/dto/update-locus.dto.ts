import { PartialType } from '@nestjs/mapped-types';
import { CreateLocusDto } from './create-locus.dto';

export class UpdateLocusDto extends PartialType(CreateLocusDto) {}
