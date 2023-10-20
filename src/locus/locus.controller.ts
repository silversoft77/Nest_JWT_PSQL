import { Controller, Get, Param } from '@nestjs/common';
import { LocusService } from './locus.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Locus')
@Controller('locus')
export class LocusController {
  constructor(private readonly locusService: LocusService) {}

  @Get()
  findAll() {
    return this.locusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locusService.findOne(+id);
  }
}
