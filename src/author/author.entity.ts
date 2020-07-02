import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
     id: number; 

     @Column()
     name: string;

     @Column()
     description: string;

     @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
