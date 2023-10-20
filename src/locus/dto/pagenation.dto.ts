import { IsInt, IsString, Min } from 'class-validator';

export class PaginationDto {
  @IsString()
  @Min(1)
  id: string;

  @IsInt()
  @Min(1)
  assemblyId: number;

  @IsString()
  regionId: string;

  @IsString()
  membershipStatus: string;

  @IsString()
  sideloading: string;

  @IsInt()
  @Min(1)
  page: number;

  @IsInt()
  @Min(1)
  limit: number;

  @IsString()
  sort: string;
}
