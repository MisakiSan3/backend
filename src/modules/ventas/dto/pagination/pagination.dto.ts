export class PaginationDto{
    @IsOptional()
    @IsPositive()
    limit:number;

    @IsOptional()
    @Min(0)
    page:number;

    @IsOptional()
    @IsString()
    search:string;

    static gettOffset(limit:number, page:number):number{
        return page * limit;
    }

}