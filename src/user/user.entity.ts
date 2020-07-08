import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert, Unique } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, IsNotEmpty, Min, IsEmail } from "class-validator";
import { CrudValidationGroups } from "@nestjsx/crud";
import {hash} from 'bcrypt';


const { CREATE, UPDATE } = CrudValidationGroups;


@Entity()
@Unique(['username'])
@Unique(['email'])
export class User {
    @PrimaryGeneratedColumn()
    id: number; 

    @IsOptional({ groups: [UPDATE] })
    @IsNotEmpty({ groups: [CREATE] })
    @IsString({ always: true })
    @MaxLength(100, { always: true })
    @ApiProperty()
    @Column({ type: "varchar", length: 100, nullable: false, unique: true })
    username: string;

    @IsOptional({ groups: [UPDATE] })
    @IsNotEmpty({ groups: [CREATE] })
    @IsString({ always: true })
    @MaxLength(100, { always: true })
    @ApiProperty()
    @Min(8)
    @Column({ type: "varchar", length: 100, nullable: false, unique: true })
    password: string;



    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ type: "text", nullable: true, default: null })
    @ApiProperty()
    @Column({nullable:true})
    name: string;

    @ApiProperty()
    @Column()
    @IsEmail()
    email: string;


    @Column({type:"boolean", default: false})
    is_active: boolean;

    
    @CreateDateColumn()
    joined_at: Date;

    @UpdateDateColumn()
    active_at: Date;

    @BeforeInsert()
    async hashPassword():Promise<void> {
    this.password = await  hash(this.password, 10);
  }
}
