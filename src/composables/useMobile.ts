import { onMounted, onUnmounted, shallowRef } from "vue";

export function useMobile() {
  const isMobile = shallowRef(window.innerWidth < 1024);

  function handle() {
    isMobile.value = window.innerWidth < 1024;
  }

  onMounted(() => {
    window.addEventListener("resize", handle);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handle);
  });

  handle();

  return isMobile;
}
