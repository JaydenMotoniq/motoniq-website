import { Button } from "@/components/button";

export default function Home() {
  return (
    <main>
      <h1 className="text-mono-800 bg-primary p-4">Hello Motoniq</h1>
      <Button>PARTNER WITH US →</Button>
      <Button disabled>PARTNER WITH US →</Button>
    </main>
  );
}
