"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { submitProjectRequest, type ContactState } from "@/lib/actions";

const services = [
  { value: "website", label: "Website creation" },
  { value: "product", label: "Digital product / SaaS" },
  { value: "motion", label: "Motion design" },
  { value: "other", label: "Something else" },
];

function FieldError({ messages }: { messages?: string[] }) {
  if (!messages?.length) return null;
  return (
    <p role="alert" className="mt-1.5 font-mono text-[0.7rem] text-red-400">
      {messages[0]}
    </p>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      aria-busy={pending}
      className="btn btn-primary group w-full px-6 py-4 disabled:cursor-wait disabled:opacity-80"
    >
      {pending ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          Sending…
        </>
      ) : (
        <>
          Send the brief
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </>
      )}
    </button>
  );
}

const initialState: ContactState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction] = useActionState(submitProjectRequest, initialState);

  if (state.status === "success") {
    return (
      <div className="plate flex flex-col items-start p-8 md:p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint-bright text-mint-ink">
          <Check size={22} strokeWidth={2.5} />
        </span>
        <h3 className="mt-6 font-display text-2xl text-ink">Brief received.</h3>
        <p className="mt-3 max-w-md leading-relaxed text-graphite">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="plate p-6 md:p-8" noValidate>
      {state.status === "error" && (
        <p
          role="alert"
          className="mb-6 rounded-brand border border-red-500/40 bg-red-500/10 px-4 py-3 font-mono text-xs text-red-300"
        >
          {state.message}
        </p>
      )}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="data-label mb-2 block">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Ada Lovelace"
            className="w-full rounded-brand border border-line-strong bg-paper px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted focus:border-mint focus:ring-2 focus:ring-mint/30"
          />
          <FieldError messages={state.errors?.name} />
        </div>
        <div>
          <label htmlFor="email" className="data-label mb-2 block">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-brand border border-line-strong bg-paper px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted focus:border-mint focus:ring-2 focus:ring-mint/30"
          />
          <FieldError messages={state.errors?.email} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="service" className="data-label mb-2 block">
          What do you need?
        </label>
        <select
          id="service"
          name="service"
          defaultValue="website"
          className="w-full appearance-none rounded-brand border border-line-strong bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-mint focus:ring-2 focus:ring-mint/30"
        >
          {services.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
        <FieldError messages={state.errors?.service} />
      </div>

      <div className="mt-5">
        <label htmlFor="details" className="data-label mb-2 block">
          The brief
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          required
          placeholder="What are you building, who's it for, and when do you need it?"
          className="w-full resize-none rounded-brand border border-line-strong bg-paper px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted focus:border-mint focus:ring-2 focus:ring-mint/30"
        />
        <FieldError messages={state.errors?.details} />
      </div>

      <div className="mt-7">
        <SubmitButton />
      </div>
    </form>
  );
}
