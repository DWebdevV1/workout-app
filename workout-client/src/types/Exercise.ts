import {Category} from './Category';

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

