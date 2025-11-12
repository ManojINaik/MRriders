import { ref } from 'vue';

const isVisible = ref(true);

export function useTopBanner() {
  const dismissBanner = () => {
    isVisible.value = false;
  };

  return {
    isVisible,
    dismissBanner,
  };
}
