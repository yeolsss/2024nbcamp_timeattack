"use client";
import { PropsWithChildren, useEffect } from "react";
import { AUTH_KEYS } from "@/constant/keys.constant";
import { userCheck } from "@/api/auth/auth";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { usePathname, useRouter } from "next/navigation";

const LoginProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const pathname = usePathname();

  const { accessToken } = JSON.parse(
    localStorage.getItem(AUTH_KEYS.LOCAL_STORAGE_KEY) || "{}"
  );

  const loginQueryOptions = {
    queryKey: ["login"],
    queryFn: () => userCheck(accessToken),
    queryOptions: { stableTime: Infinity },
    retry: 0,
    enabled: !!accessToken,
  };

  const [user, error, isError] = useCustomQuery(loginQueryOptions);
  useEffect(() => {
    if (!accessToken) {
      alert("로그인이 필요합니다.");
      router.push("/auth/?type=login");
    }
  }, [accessToken, router]);

  useEffect(() => {
    if (isError) {
      alert("로그인이 필요합니다.");
      const redirectPath = `/auth/?type=login&redirect=${pathname}`;
      router.push(redirectPath);
    }
  }, [isError, error]);

  return <>{children}</>;
};
export default LoginProvider;
