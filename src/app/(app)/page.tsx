import { AuthForm } from "@/modules/auth/auth-form";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen overflow-hidden flex flex-col items-center  bg-primary py-12 lg:py-24">
      <div className="flex flex-col items-center gap-2 mb-4">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
          />
          <h1 className="text-4xl font-extrabold text-white font-press">BEERMATE</h1>
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
          />
        </div>
      </div>
      <AuthForm />
    </div>
  );
}
