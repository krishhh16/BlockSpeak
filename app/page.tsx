'use client'

import Input from "@/components/App/Input";
import Navbar from "@/components/App/Navbar";


export default function Home() {

  return (
   <div className="flex bg-zinc-900 flex-col relative items-center justify-center h-screen">
    <Navbar/>
    <Input/>    
   </div>
  );
}
