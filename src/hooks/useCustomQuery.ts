import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useEffect } from "react";

export function useCustomQuery<T, TError extends Error = Error>(
  queryOptions: UseQueryOptions<T, TError>
): [T | undefined, TError | null, boolean] {
  let { isLoading, isError, error, data, refetch } = useQuery<T, TError>(
    queryOptions
  );

  useEffect(() => {}, [isLoading]);

  useEffect(() => {
    if (isError) {
      console.log(error?.message);
    }
  }, [isError, error]);

  return [data, error, isError];
}
