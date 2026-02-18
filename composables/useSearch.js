import { ref } from "vue";

const showSearch = ref(false);
const search = ref("");

export const useSearch = () => {
  return {
    showSearch,
    search,
  };
};
