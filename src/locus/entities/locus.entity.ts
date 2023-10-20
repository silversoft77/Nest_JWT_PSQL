import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { LocusMember } from 'src/locus-member/entities/locus-member.entity';

@Entity('rnacen.rnc_locus')
export class Locus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  assembly_id: string;

  @Column({ type: 'varchar', length: 30 })
  locus_name: string;

  @Column({ type: 'varchar', length: 15 })
  public_locus_name: string;

  @Column({ type: 'varchar', length: 40 })
  chromosome: string;

  @Column({ type: 'varchar', length: 40 })
  strand: string;

  @Column({ type: 'int' })
  locus_start: number;

  @Column({ type: 'int' })
  locus_stop: number;

  @Column({ type: 'int' })
  member_count: number;

  @OneToMany(() => LocusMember, (locusMember) => locusMember.locus)
  members: LocusMember[];
}
