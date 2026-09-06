import { useTimeoutFn } from "@vueuse/core";

export function useFormSubmission(
  submitAction: () => Promise<unknown>,
  reset: () => void,
) {
  const submitted = ref(false);
  const loading = ref(false);
  const { display } = useToastify();

  const { start, stop } = useTimeoutFn(
    () => {
      submitted.value = false;
      reset();
    },
    5000,
    { immediate: false },
  );

  async function submit() {
    if (loading.value) return;
    loading.value = true;

    try {
      await submitAction();
      submitted.value = true;
      stop();
      start();
      display({ type: "success", message: "$.contact.success_msg" });
    } catch (error: any) {
      display({
        type: "error",
        message: error?.data?.message || error?.message,
      });
    } finally {
      loading.value = false;
    }
  }

  onBeforeUnmount(stop);

  return { loading, submitted, submit };
}
