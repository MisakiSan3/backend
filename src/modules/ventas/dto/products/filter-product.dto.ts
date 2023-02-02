/* eslint-disable prettier/prettier */
import { Exclude } from "class-transformer";
import { BaseProductDto } from "./base-product.dto";
import { IsOptional,IsString } from "class-validator/types/decorator/decorators";
@Exclude()
export class FilterProductDto extends PaginationDto {
    @IsOptional()
    @IsString()
    readonly title: string;

    @IsOptional()
    @IsString()
    readonly categoryId: number;
}