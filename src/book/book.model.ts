import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateBookDto } from "./dto/create-book.dto";

@Table({ tableName: 'books', timestamps: false })
export class Book extends Model<Book, typeof CreateBookDto>{


    @ApiProperty({ example: 3, description: "Id" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'Kobzar', description: "Title of book" })
    @Column({ type: DataType.STRING, unique: true })
    title: string;

    @ApiProperty({ example: 1934, description: "Year of publishing book" })
    @Column({ type: DataType.INTEGER, unique: false })
    yearOfPublish: number;

    @ApiProperty({ example: "Taras Shevchenko", description: "Author of book" })
    @Column({ type: DataType.STRING, unique: false })
    author: string;

    @ApiProperty({ example: "somelink.com", description: "Link to cover of book" })
    @Column({ type: DataType.STRING, unique: true })
    cover: string;

    @ApiProperty({ example: "Duma", description: "Genre of book" })
    @Column({ type: DataType.STRING, unique: false })
    genre: string;
}