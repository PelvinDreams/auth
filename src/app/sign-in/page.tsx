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
import { Separator } from "@radix-ui/react-separator";

// react icons
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const SignIn = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-full flex items-center justify-center bg-[#1b0918]">
      <Card className="md:h-auto w-[90%] sm:w-[420px] p-4 sm:p-8">
        <CardHeader>
          <CardTitle className="text-center">Sign Up</CardTitle>
          <CardDescription className="text-sm text-center text-accent-foreground">
            Use email or services to sign in
          </CardDescription>
        </CardHeader>
        <CardContent className="px-2 sm:px-6">
          <form className="space-y-3">
            
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
           
            <Button type="submit" className="w-full" size="lg">
              Continue
            </Button>
          </form>

          {/* iconnnns for auth */}
          <Separator>
            <div className="flex my-2  justify-evenly mx-auto items-center">
              <Button
                disabled={false}
                onClick={() => {}}
                variant="outline"
                size="lg"
                className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
              >
                <FcGoogle className="size-8 left-2.5 top-2.5" />
              </Button>

              <Button
                disabled={false}
                onClick={() => {}}
                variant="outline"
                size="lg"
                className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
              >
                <FaGithub className="size-8 left-2.5 top-2.5" />
              </Button>
            </div>

            <p className="text-center text-sm mt-2 text-muted-foreground">
                Create a new account
                <Link className="text-sky-400 ml-4 hover:underline cursor-pointer" href="sign-up">Sign up</Link>
            </p>
          </Separator>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
