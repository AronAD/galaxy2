/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nFEavUD3bBa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="container flex flex-col items-center px-4 space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">What's in the image?</h1>
        <img
          alt="Image"
          className="aspect-video overflow-hidden rounded-xl object-cover object-center"
          height="450"
          src="/placeholder.svg"
          width="800"
        />
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Input placeholder="Enter your guess" type="text" />
          <Button size="lg">Submit</Button>
        </div>
      </div>
    </div>
  )
}

