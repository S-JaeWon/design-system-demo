"use client";
import { Button } from "@/components/Button";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { ErrorIcon } from "@/components/icons/ErrorIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import { Input } from "@/components/Input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Input
          $type="Default"
          $label="Email"
          $leadingIcon={<CheckIcon />}
          $trailingIcon={<CheckIcon />}
        />
        <Input type="Default" label="Email" disabled />
        <Input
          type="Default"
          hintText="This is a hint text to help user."
          trailingIcon={<ErrorIcon />}
        />
        <Input type="Default" label="Email" leadingIcon={<MailIcon />} />
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Button
          size="2xl"
          hierarchy="Primary"
          destructive={false}
          type="button"
          onClick={() => {}}
        >
          Button
        </Button>
        <Button
          size="xl"
          hierarchy="Primary"
          destructive={false}
          type="button"
          onClick={() => {}}
        >
          Button
        </Button>
        <Button
          size="lg"
          hierarchy="Primary"
          destructive={false}
          type="button"
          onClick={() => {}}
        >
          Button
        </Button>
        <Button
          size="md"
          hierarchy="Primary"
          destructive={false}
          type="button"
          onClick={() => {}}
        >
          Button
        </Button>
        <Button
          size="sm"
          hierarchy="Primary"
          destructive={false}
          type="button"
          onClick={() => {}}
        >
          Button
        </Button>
        <Button
          size="2xl"
          hierarchy="Primary"
          destructive={false}
          type="button"
          disabled
          onClick={() => {}}
        >
          Button Disabled
        </Button>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li className="text-ds-Display-2xl-Regular text-comp-button-primary-background">
            Save and see your changes instantly.
          </li>
          <li className="text-ds-Display-xl-Bold text-sys-border-success">
            TEST
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
