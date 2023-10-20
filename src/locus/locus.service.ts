import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Locus } from './entities/locus.entity';

@Injectable()
export class LocusService {
  constructor(
    @InjectRepository(Locus)
    private readonly locusRepository: Repository<Locus>,
  ) {}

  async findAll(
    id?: number,
    assemblyId?: number,
    regionId?: string,
    membershipStatus?: string,
    sideloading?: string,
    page?: number,
    limit?: number,
    sort?: string,
  ) {
    const query = this.locusRepository.createQueryBuilder('rnacen.rnc_locus');

    if (id) {
      query.andWhere('rnacen.rnc_locus.id = :id', { id });
    }
    if (assemblyId) {
      query.andWhere('rnacen.rnc_locus.assembly_id = :assemblyId', {
        assemblyId,
      });
    }
    if (regionId) {
      query.andWhere('rnacen.rnc_locus.region_id = :regionId', { regionId });
    }
    if (membershipStatus) {
      query.andWhere('rnacen.rnc_locus.membership_status = :membershipStatus', {
        membershipStatus,
      });
    }

    if (sideloading === 'rnacen.rnc_locus_members') {
      query.leftJoinAndSelect('rnacen.rnc_locus.id', 'rld');
    }

    page = page ? page : 1;
    const skip = (page - 1) * limit;
    query.skip(skip).take(limit);

    if (sort) {
      const [column, order] = sort.split(':');
      const validOrder = order.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';
      query.orderBy(`rl.${column}`, validOrder);
    }

    const results = await query.getMany();

    return results;
  }

  findOne(id: number) {
    return `This action returns a #${id} locus`;
  }
}
