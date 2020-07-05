import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import {Book} from '../book/book.entity'

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
     id: number; 

     @Column()
     name: string;

     @Column({nullable:true})
     description?: string;

    @ManyToMany(() => Book, book => book.categories ,{
        cascade: true
    })
    @JoinTable()
    books: Book[];

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

