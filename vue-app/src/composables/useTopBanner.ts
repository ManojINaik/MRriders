import { ref } from 'vue';

const isVisible = ref(true);

export function useTopBanner() {
  const checkDismissedState = () => {
    const dismissed = localStorage.getItem('topBannerDismissed');
    if (dismissed === 'true') {
      isVisible.value = false;
    }
  };

  const dismissBanner = () => {
    isVisible.value = false;
    localStorage.setItem('topBannerDismissed', 'true');
  };

  return {
    isVisible,
    dismissBanner,
    checkDismissedState,
  };
}
