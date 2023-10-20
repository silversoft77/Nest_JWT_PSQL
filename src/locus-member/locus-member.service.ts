import { Injectable } from '@nestjs/common';
import { CreateLocusMemberDto } from './dto/create-locus-member.dto';
import { UpdateLocusMemberDto } from './dto/update-locus-member.dto';

@Injectable()
export class LocusMemberService {
  create(createLocusMemberDto: CreateLocusMemberDto) {
    return 'This action adds a new locusMember';
  }

  findAll() {
    return `This action returns all locusMember`;
  }

  findOne(id: number) {
    return `This action returns a #${id} locusMember`;
  }

  update(id: number, updateLocusMemberDto: UpdateLocusMemberDto) {
    return `This action updates a #${id} locusMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} locusMember`;
  }
}
