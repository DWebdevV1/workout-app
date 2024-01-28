import {Category} from './Category.ts';

export interface Exercise {
    id?: string | number;
    title: string;
    description: string;
    image: string;
    category: Category;
}

export interface ExerciseFilter {
    category?: string;
    title?: string;
}

