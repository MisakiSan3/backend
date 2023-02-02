/* eslint-disable prettier/prettier */
import { Exclude, Expose } from "class-transformer";
import { BaseProductDto } from "./base-product.dto";

@Exclude()
export class ReadProductDto extends BaseProductDto {
    @Expose()
    readonly title;
    @Expose()
    readonly price;
    @Expose()
    readonly category;
}