import { Metadata } from "next";
import signupImage from "../../assets/signup-image.jpg";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return (
    <main className="flex h-full items-center justify-center p-5">
      <div className="flex h-full max-h-[48rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-8 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-bold md:text-3xl">
              Sign Up to bugbook
            </h1>

            <p className="text-muted-foreground">
              A place where even{" "}
              <span className="italic text-primary">you</span> can find a friend
            </p>
          </div>

          <div className="space-y-4">
            <SignUpForm />

            <Link
              href={"/login"}
              className="block text-center text-sm hover:underline"
            >
              Already have an account? Log in
            </Link>
          </div>
        </div>

        <Image
          src={signupImage}
          alt="Sign Up image"
          className="hidden object-cover italic md:block md:w-1/2"
          placeholder="blur"
        />
      </div>
    </main>
  );
}
