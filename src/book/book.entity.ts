import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Author } from '../author/author.entity';
import { Category } from '../category/category.entity';
import {ApiProperty} from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, IsNotEmpty } from "class-validator";
import { CrudValidationGroups } from "@nestjsx/crud";


const { CREATE, UPDATE } = CrudValidationGroups;


@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number; 

    @IsOptional({ groups: [UPDATE] })
    @IsNotEmpty({ groups: [CREATE] })
    @IsString({ always: true })
    @MaxLength(100, { always: true })
    @ApiProperty()
    @Column()
    name: string;

    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ type: "text", nullable: true, default: null })
    @ApiProperty()
    @Column()
    description: string;

    @ManyToOne(() => Author, author => author.books,{
        cascade: true,
        eager: true
    })
    author: Author;
  
    @ManyToMany(() => Category, category => category.books ,{
        cascade: true,
        eager: true  
    })
    @JoinTable()
    categories: Category[];

    
    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
