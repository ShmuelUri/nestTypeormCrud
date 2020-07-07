import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, IsNotEmpty } from "class-validator";
import { CrudValidationGroups } from "@nestjsx/crud";


const { CREATE, UPDATE } = CrudValidationGroups;


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number; 

    @IsOptional({ groups: [UPDATE] })
    @IsNotEmpty({ groups: [CREATE] })
    @IsString({ always: true })
    @MaxLength(100, { always: true })
    @ApiProperty()
    @Column({ type: "varchar", length: 100, nullable: false, unique: true })
    user_name: string;

    @IsOptional({ groups: [UPDATE] })
    @IsNotEmpty({ groups: [CREATE] })
    @IsString({ always: true })
    @MaxLength(100, { always: true })
    @ApiProperty()
    @Column({ type: "varchar", length: 100, nullable: false, unique: true })
    password: string;



    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ type: "text", nullable: true, default: null })
    @ApiProperty()
    @Column({nullable:true})
    full_name: string;


    @Column({type:"boolean", default: false})
    is_active: boolean;

    
    @CreateDateColumn()
    joined_at: Date;

    @UpdateDateColumn()
    active_at: Date;
}
