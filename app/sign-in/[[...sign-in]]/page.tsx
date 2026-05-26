import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-20 bg-card border-r border-border">
        <div className="max-w-sm">
          <span className="font-[family-name:var(--font-lora)] text-5xl font-bold text-foreground tracking-tight">
            Fluid
          </span>
          <p className="mt-6 font-[family-name:var(--font-lora)] text-xl text-foreground/80 leading-relaxed">
            Write with clarity.<br />Edit with precision.
          </p>
          <ul className="mt-10 space-y-3 text-base text-muted-foreground">
            <li>AI-assisted writing and editing</li>
            <li>Real-time collaboration</li>
            <li>Version history and branching</li>
            <li>Export to any format</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center px-8 bg-background">
        <SignIn />
      </div>
    </div>
  );
}
