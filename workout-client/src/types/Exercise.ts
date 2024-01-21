enum Categories {
    CHEST = 'CHEST',
    BACK = 'BACK',
    LEGS = 'LEGS',
    ARMS = 'ARMS',
    SHOULDERS = 'SHOULDERS',
    CARDIO = 'CARDIO'
}

export interface Exercise {
    id?: string | number;
    title: string;
    description: string;
    image: string;
    category: Categories;
}

