import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { useEffect } from "react";

export type TMutationOptions<T, V> = UseMutationOptions<T, Error, V, unknown>;

export const useCustomMutation = <T, V>(
  mutationOptions: TMutationOptions<T, V>
) => {
  const { isPending, isError, error, mutate } = useMutation<
    T,
    Error,
    V,
    unknown
  >(mutationOptions);

  useEffect(() => {}, [isPending]);

  useEffect(() => {
    if (isError) {
      alert(error?.message);
    }
  }, [isError, error]);

  return mutate;
};
