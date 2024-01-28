import {Exercise} from './Exercise';

export interface Workout {
    id?: number;
    name: string;
    description: string;
    exercisesAmount: number;
    exercises: Exercise[];
    createdAt?: string | Date;
    updatedAt?: string | Date;
}