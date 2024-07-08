import { ApiProperty } from "@nestjs/swagger";
import { IsMongoId, IsNotEmpty } from "class-validator";

export class DeleteCartDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsMongoId()
    accountId: string;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsMongoId()
    productId: string;
}