import { ApiProperty } from "@nestjs/swagger";


export class CreateBookDto {

    @ApiProperty({ example: "Kobzar" })
    readonly title: string;

    @ApiProperty({ example: 1893 })
    readonly yearOfPublish: number;

    @ApiProperty({ example: 'Taras Shevchenko' })
    readonly author: string;

    @ApiProperty({ example: 'somelink.url' })
    readonly cover: string;

    @ApiProperty({ example: 'Duma' })
    readonly genre: string;
}