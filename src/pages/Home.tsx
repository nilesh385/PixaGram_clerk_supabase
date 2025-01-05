import ServicesCard from "@/components/ServicesCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUser } from "@clerk/clerk-react";

export default function Home() {
  const { user } = useUser();

  return (
    <div className="h-full w-full ">
      {!user ? (
        <div className="h-full w-full flex justify-center items-center">
          <Card className="h-full w-full justify-center items-center">
            <CardHeader>
              <CardTitle>Welcome ! Dive into the world of PixaGram.</CardTitle>
              <CardDescription>
                A place to share your favorite images with the world and engage
                with other users.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-center gap-5">
              <h1 className="text-3xl font-semibold">Services</h1>
              <section id="services" className=" flex gap-5 ">
                <ServicesCard
                  title="Share"
                  description="Share your favorite images with the world and engage with other users."
                />
                <ServicesCard
                  title="Explore"
                  description="Explore the world of PixaGram."
                />
                <ServicesCard
                  title="Connect"
                  description="Connect with other users and make new friends."
                />
              </section>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="h-full w-full overflow-auto">
          {user?.fullName} <br />
          {user?.username} <br />
          {user?.id} <br />
          {user.imageUrl} <br />
          {user.emailAddresses[0].emailAddress} <br />
          {user.firstName} {user.lastName}
        </div>
      )}
    </div>
  );
}
