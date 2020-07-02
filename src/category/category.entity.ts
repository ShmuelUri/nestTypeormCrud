import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
     id: number; 

     @Column()
     name: string;

     @Column({nullable:true})
     description?: string;

     @CreateDateColumn()
        create_at: Date

    @UpdateDateColumn()
        updated_at: Date
}

