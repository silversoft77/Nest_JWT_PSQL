import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Locus } from 'src/locus/entities/locus.entity';

@Entity('rnacen.rnc_locus_members')
export class LocusMember {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  locus_member_id: number;

  @Column({ type: 'int' })
  region_id: number;

  @Column({ type: 'int' })
  locus_id: number;

  @Column({ type: 'varchar' })
  membership_status: string;

  @ManyToOne(() => Locus, (locus) => locus.members)
  @JoinColumn({ name: 'locus_id' })
  locus: Locus;
}