interface ImportMeta {
    url: string;
    env: Record<string, string | any>;
}

const _env = (import.meta as ImportMeta).env;

export const EXERCISES_URL = _env.VITE_EXERCISES_URL;
export const CATEGORIES_URL = _env.VITE_CATEGORIES_URL;