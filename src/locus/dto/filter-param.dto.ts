import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

enum IdEnum {
  // Define the possible values for the Id enum
}

enum RegionIdEnum {
  // Define the possible values for the RegionId enum
}

export class FilterParamsDto {
  @IsOptional()
  @IsEnum(IdEnum)
  id?: IdEnum;

  @IsOptional()
  @IsInt()
  assemblyId?: number;

  @IsOptional()
  @IsEnum(RegionIdEnum)
  regionId?: RegionIdEnum;

  @IsOptional()
  @IsString()
  membershipStatus?: string;
}