"use client";
import { PropsWithChildren, useEffect } from "react";
import { AUTH_KEYS } from "@/constant/keys.constant";
import { userCheck } from "@/api/auth/auth";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { usePathname, useRouter } from "next/navigation";

/**
 * login 을 확인하는 provider
 * 회원 권한이 필요한 페이지에 감싸는 용도로 생성
 */
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
  const redirectPath = `/auth/?type=login&redirect=${pathname}`;
  useEffect(() => {
    if (!accessToken) {
      alert("로그인이 필요합니다.");
      router.push(redirectPath);
    }
  }, [accessToken, router]);

  useEffect(() => {
    if (isError) {
      alert("로그인이 필요합니다.");

      router.push(redirectPath);
    }
  }, [isError, error]);

  return <>{children}</>;
};
export default LoginProvider;
