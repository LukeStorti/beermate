"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { register } from "@/actions/register";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { login } from "@/actions/login";
type Variant = "LOGIN" | "REGISTER";

interface AuthFormValues {
  email: string;
  password: string;
}

export function AuthForm() {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register: formRegister,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<AuthFormValues>();

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const onSubmit = async (data: AuthFormValues) => {
    setLoading(true);
    if (variant === "REGISTER") {
      const res = await register(data);
      if (res?.userId) {
        toast.success(res.success);
        router.push(`/${res.userId}`);
        setLoading(false);
      } else {
        toast.error(res.error);
      }
    } else {
      const res = await login(data);
      if (res?.userId) {
        toast.success(res.success);
        router.push(`/${res.userId}`);
        setLoading(false);
      } else {
        toast.error(res.error);
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full lg:w-1/2 px-4 lg:px-12">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>
            {variant === "LOGIN" ? "Login to your account" : "Create an account"}
          </CardTitle>
          <CardDescription>
            {variant === "LOGIN"
              ? "Enter your email below to login to your account"
              : "Enter your email below to create your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label
                  htmlFor="email"
                  className="font-semibold"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  {...formRegister("email", { required: true })}
                />
              </div>
              <div className="grid gap-2">
                <Label
                  htmlFor="password"
                  className="font-semibold"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  {...formRegister("password", { required: true })}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full text-white font-semibold cursor-pointer"
                  disabled={isSubmitting}
                >
                  {loading === true ? (
                    <LoaderCircle className="animate-spin" />
                  ) : variant === "LOGIN" ? (
                    "Login"
                  ) : (
                    "Register"
                  )}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-md font-semibold flex items-center justify-center gap-2">
              <div>{variant === "LOGIN" ? "New to Beermate?" : "Already have an account?"}</div>
              <div
                className="underline cursor-pointer"
                onClick={toggleVariant}
              >
                {variant === "LOGIN" ? "Create an account" : "Login"}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
