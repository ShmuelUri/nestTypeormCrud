import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Author } from '../author/author.entity';
import { Category } from '../category/category.entity';


@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
     name: string;

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
