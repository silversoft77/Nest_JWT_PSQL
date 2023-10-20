import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Locus } from './locus/entities/locus.entity';
import { LocusModule } from './locus/locus.module';
import { LocusMemberModule } from './locus-member/locus-member.module';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'hh-pgsql-public.ebi.ac.uk',
      port: 5432,
      password: 'NWDMCE5xdipIjRrp',
      username: 'reader',
      entities: [User, Locus ],
      database: 'pfmegrnargs',
      synchronize: false,
      logging: true,
    }),
    AuthModule,
    LocusModule,
    LocusMemberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}