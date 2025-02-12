"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Signup failed"); // Handle error
      }

      // Handle success (e.g., redirect to another page)
    } catch (error) {
      console.error(error);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="h-full flex items-center justify-center bg-[#1b0918]">
      <Card className="md:h-auto w-[90%] sm:w-[420px] p-4 sm:p-8">
        <CardHeader>
          <CardTitle className="text-center">Sign Up</CardTitle>
          <CardDescription className="text-sm text-center text-accent-foreground">
            Use email or services to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="px-2 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="text"
              disabled={pending}
              placeholder="Full name"
              value={form.fullName}
              onChange={(e) =>
                setForm({ ...form, fullName: e.target.value })
              }
              required
            />
            <Input
              type="email"
              disabled={pending}
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
            />
            <Input
              type="password"
              disabled={pending}
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              required
            />
            <Input
              type="password"
              disabled={pending}
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
              required
            />
            <Button type="submit" className="w-full" size="lg" disabled={pending}>
              {pending ? "Processing..." : "Continue"}
            </Button>
          </form>

          <div className="flex my-4 justify-evenly items-center">
            <Button
              disabled={false}
              onClick={() => {}}
              variant="outline"
              size="lg"
              className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
            >
              <FcGoogle className="size-8" />
            </Button>

            <Button
              disabled={false}
              onClick={() => {}}
              variant="outline"
              size="lg"
              className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
            >
              <FaGithub className="size-8" />
            </Button>
          </div>

          <p className="text-center text-sm mt-2 text-muted-foreground">
            Already have an account?
            <Link className="text-sky-400 ml-2 hover:underline" href="sign-in">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
