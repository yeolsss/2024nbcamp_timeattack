import LoginProvider from "@/app/LoginProvider";

export default function Home() {
  // redirect("/auth/?type=login");
  return (
    <LoginProvider>
      <div>Home!</div>
    </LoginProvider>
  );
}
