/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { ArrayNotEmpty, IsArray, IsInt, IsNumber, IsPositive, IsString } from "class-validator/types/decorator/decorators";
import { arrayNotEmptyValidationOptions,isIntValidationOptions,isArrayValidationOptions,isPositiveValidationOptions,isNumberValidationOptions,isNotEmptyValidationOptions,isStringValidationOptions } from '../../../../shared/validations/index'
import { CategoryEntity } from "../../models";
export class BaseProductDto {
     @IsNotEmpty(isNotEmptyValidationOptions())
     @IsString(isStringValidationOptions())
     readonly title: string;

     @IsNotEmpty(isNotEmptyValidationOptions())
     //@IsNumber(isNumberValidationOptions())
     @IsPositive(isPositiveValidationOptions())
     readonly price: number;  

     @IsNotEmpty(isNotEmptyValidationOptions())
     @IsString(isStringValidationOptions())
     readonly description: string;

     @IsNotEmpty(isNotEmptyValidationOptions())
     @IsInt(isIntValidationOptions())
     @IsPositive(isPositiveValidationOptions())
     readonly categoryId: CategoryEntity;

     @ArrayNotEmpty(arrayNotEmptyValidationOptions())
     @IsArray(isArrayValidationOptions())
     readonly images: string[];
}