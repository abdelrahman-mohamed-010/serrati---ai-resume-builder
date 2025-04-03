"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { signOut, getUser } from "../../actions/supabaseAuth";
import useSWR, { mutate } from "swr";

interface AuthProps {
  variant?: "mobile" | "default";
}

const fetchUser = async () => {
  const { user } = await getUser();
  return !!user;
};

const Auth = ({ variant }: AuthProps) => {
  const { data: isAuthenticated } = useSWR("auth", fetchUser, {
    fallbackData: false,
  });

  const handleSignOut = async () => {
    const result = await signOut();
    if (result.success) {
      mutate("auth", false, false);
    }
  };

  return (
    <div
      className={
        variant === "mobile"
          ? "flex justify-center items-center gap-2"
          : "hidden md:flex items-center gap-2"
      }
    >
      {!isAuthenticated ? (
        <>
          <Link href="/sign-in" className="bg-white rounded-2xl">
            <Button variant="outline">تسجيل الدخول</Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-secondary hover:bg-secondary/90">
              إنشاء حساب
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Link href="/dashboard" className="bg-white rounded-2xl">
            <Button variant="outline">لوحه التحكم</Button>
          </Link>
          <Button
            onClick={handleSignOut}
            className="bg-secondary hover:bg-secondary/90"
          >
            تسجيل الخروج
          </Button>
        </>
      )}
    </div>
  );
};

export default Auth;
