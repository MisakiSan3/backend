/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { ArrayNotEmpty, IsArray, IsInt, IsNumber, IsPositive, IsString } from "class-validator/types/decorator/decorators";
import { ArrayNotEmptyValidationOptions,IsArrayValidationoptions,IsIntValidationoptions,IsPositiveValidationOption,IsNumberValidationoptions,IsNotEmptyValidationOptions,IsStringValidationoptions } from '../../../../shared/validations'
import { CategoryEntity } from "../../models";
/* eslint-disable prettier/prettier */
export class BaseProductDto {
     @IsNotEmpty(IsNotEmptyValidationOptions())
     @IsString(IsStringValidationoptions())
     readonly title: string;

     @IsNotEmpty(IsNotEmptyValidationOptions())
     @IsNumber(IsNumberValidationoptions())
     @IsPositive(IsPositiveValidationOption())
     readonly price: number;

     @IsNotEmpty(IsNotEmptyValidationOptions())
     @IsString(IsStringValidationoptions())
     readonly description: string;

     @IsNotEmpty(IsNotEmptyValidationOptions())
     @IsInt(IsIntValidationoptions())
     @IsPositive(IsPositiveValidationOption())
     readonly categoryId: CategoryEntity;

     @ArrayNotEmpty(ArrayNotEmptyValidationOptions())
     @IsArray(IsArrayValidationoptions())
     readonly images: string[];
}