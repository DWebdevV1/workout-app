import {onMounted, ref} from 'vue';
import axios from 'axios';
import {CATEGORIES_URL} from '../types/Meta';

export function useCategories() {
    let categories = ref([]);

    const loadCategories = async () => {
        try {
            const { data } = await axios.get(CATEGORIES_URL);
            categories.value = data;
        } catch (e) {
            categories.value = [];
            console.log(e);
        }
    };

    onMounted(async () => await loadCategories())

    return { categories }
}

export default useCategories;