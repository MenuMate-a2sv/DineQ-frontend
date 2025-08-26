import NavBar from "@/components/common/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
   <div>
     <NavBar role = "CUSTOMER"/>
     <Input placeholder="input" label = "name" type = "password" required className=""/>
     <Button variant={"outline"}>Click me</Button>
     <p>Your one-stop solution for restaurant reservations</p>
   </div>
  );
}
