import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocusMemberService } from './locus-member.service';
import { CreateLocusMemberDto } from './dto/create-locus-member.dto';
import { UpdateLocusMemberDto } from './dto/update-locus-member.dto';

@Controller('locus-member')
export class LocusMemberController {
  constructor(private readonly locusMemberService: LocusMemberService) {}

  @Post()
  create(@Body() createLocusMemberDto: CreateLocusMemberDto) {
    return this.locusMemberService.create(createLocusMemberDto);
  }

  @Get()
  findAll() {
    return this.locusMemberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locusMemberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocusMemberDto: UpdateLocusMemberDto) {
    return this.locusMemberService.update(+id, updateLocusMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locusMemberService.remove(+id);
  }
}
