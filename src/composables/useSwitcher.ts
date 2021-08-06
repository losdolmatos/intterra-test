import { ref, Ref } from 'vue';

type UseSwitcher = () => {
  switcher: Ref<boolean>,
  switchTab: (value: boolean) => void,
}

const useSwitcher: UseSwitcher = () => {
  const switcher = ref(true);
  const switchTab = (value: boolean) => {
    switcher.value = value;
  };
  return { switcher, switchTab };
}

export default useSwitcher;
