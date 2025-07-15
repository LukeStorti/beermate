import { getUser } from "@/actions/get-user";
import { AuthForm } from "@/modules/auth/auth-form";
import { Beers } from "@/modules/profile/beers";
import Image from "next/image";

export default async function Profile({ params }: { params: { id?: string } }) {
  const { id: userId } = params;

  if (!userId) {
    return <AuthForm />;
  }

  const user = await getUser(userId);

  if (!user) {
    return <AuthForm />;
  }

  return (
    <div className=" min-h-screen overflow-hidden flex flex-col items-center  bg-primary py-12 lg:py-24">
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
      <div className="w-full lg:w-1/2 mx-auto ">
        <Beers user={user} />
      </div>
    </div>
  );
}
