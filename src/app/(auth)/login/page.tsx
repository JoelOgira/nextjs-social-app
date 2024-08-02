import { Metadata } from "next";
import loginImage from "../../assets/login-image.jpg";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Log In",
};

export default function LoginPage() {
  return (
    <main className="flex h-full items-center justify-center p-5">
      <div className="flex h-full max-h-[48rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-8 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-bold md:text-3xl">
              Log in to bugbook
            </h1>

            <p className="text-muted-foreground">
              A place where even{" "}
              <span className="italic text-primary">you</span> can find a friend
            </p>
          </div>

          <div className="space-y-4">
            <LoginForm />

            <Link
              href={"/signup"}
              className="block text-center text-sm hover:underline"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </div>
        </div>

        <Image
          src={loginImage}
          alt="Login image"
          className="hidden object-cover italic md:block md:w-1/2"
          placeholder="blur"
        />
      </div>
    </main>
  );
}
