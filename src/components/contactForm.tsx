"use client"

import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronUp } from "lucide-react";

const BG = "#F3F1ED";
const ACCENT = "#A66242";
const BORDER = "#111111";
const ERR = "#C94134";
const DROPDOWN_HOVER = "#3B1D17";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  lookingFor: string;
  date: string;
  message: string;
  consent: boolean;
  newsletter: boolean;
  captcha: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;
type Option = { value: string; label: string };

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const phoneOk = (v: string) => v.trim().length >= 7;

export default function ReachUsForm() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    lookingFor: "",
    date: "",
    message: "",
    consent: false,
    newsletter: false,
    captcha: false,
  });

  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);

  const options: Option[] = useMemo(
    () => [
      { value: "suits", label: "Suits" },
      { value: "shirts", label: "Shirts" },
      { value: "jackets", label: "Jackets" },
      { value: "occasion", label: "Occassion-Specific" },
      { value: "other", label: "Other" },
    ],
    []
  );

  const errors: FormErrors = useMemo(() => {
    const e: FormErrors = {};

    if (!form.firstName.trim()) e.firstName = "This field is required.";
    if (!form.lastName.trim()) e.lastName = "This field is required.";

    if (!form.email.trim())
      e.email = "This field is required. Please input a valid email.";
    else if (!emailOk(form.email))
      e.email = "This field is required. Please input a valid email.";

    if (!form.phone.trim())
      e.phone = "This field is required. Please input a phone number.";
    else if (!phoneOk(form.phone))
      e.phone = "This field is required. Please input a phone number.";

    if (!form.lookingFor)
      e.lookingFor = "This field is required. Please select a value.";

    if (!form.date) e.date = "This field is required.";

    if (!form.consent)
      e.consent = "This field is required. Please check the checkbox.";

    if (!form.captcha)
      e.captcha = "Verification expired. Check the checkbox again.";

    return e;
  }, [form]);

  const showError = (key: keyof FormState) =>
    Boolean((submitted || touched[key]) && errors[key]);

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((p) => ({ ...p, [key]: value }));
  };

  const markTouched = (key: keyof FormState) =>
    setTouched((p) => ({ ...p, [key]: true }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (Object.keys(errors).length > 0) return;

    // Submit logic here
    console.log("Submit", form);
  };

  return (
    <section className="w-full" style={{ backgroundColor: BG }}>
      <div className="mx-auto max-w-[1400px] px-10 py-24">
        <h2
          className="text-center font-serif text-[26px] tracking-wide"
          style={{ color: ACCENT }}
        >
          Reach Us
        </h2>

        <div onSubmit={onSubmit} className="mx-auto mt-16 max-w-[1220px]">
          <div className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-2">
            {/* First Name */}
            <Field label="First Name" error={showError("firstName") ? errors.firstName : undefined}>
              <UnderlineInput
                value={form.firstName}
                onChange={(v) => setField("firstName", v)}
                onBlur={() => markTouched("firstName")}
                error={showError("firstName")}
              />
            </Field>

            {/* Last Name */}
            <Field label="Last Name" error={showError("lastName") ? errors.lastName : undefined}>
              <UnderlineInput
                value={form.lastName}
                onChange={(v) => setField("lastName", v)}
                onBlur={() => markTouched("lastName")}
                error={showError("lastName")}
              />
            </Field>

            {/* Email */}
            <Field
              label="Email Address"
              error={showError("email") ? errors.email : undefined}
            >
              <UnderlineInput
                value={form.email}
                onChange={(v) => setField("email", v)}
                onBlur={() => markTouched("email")}
                error={showError("email")}
                inputMode="email"
              />
            </Field>

            {/* Phone */}
            <Field label="Phone" error={showError("phone") ? errors.phone : undefined}>
              <UnderlineInput
                value={form.phone}
                onChange={(v) => setField("phone", v)}
                onBlur={() => markTouched("phone")}
                error={showError("phone")}
                inputMode="tel"
              />
            </Field>

            {/* Dropdown (LEFT) */}
            <Field label="What are you looking for?" error={showError("lookingFor") ? errors.lookingFor : undefined}>
              <UnderlineDropdown
                placeholder="Select an option"
                value={form.lookingFor}
                onChange={(v) => setField("lookingFor", v)}
                onBlur={() => markTouched("lookingFor")}
                error={showError("lookingFor")}
                options={options}
              />
            </Field>

            {/* Date (RIGHT) */}
            <Field label="Choose Date" error={showError("date") ? errors.date : undefined}>
              <UnderlineInput
                value={form.date}
                onChange={(v) => setField("date", v)}
                onBlur={() => markTouched("date")}
                error={showError("date")}
                type="date"
              />
            </Field>

            {/* Message full width */}
            <div className="lg:col-span-2">
              <Field label="Message(Optional)">
                <UnderlineInput
                  value={form.message}
                  onChange={(v) => setField("message", v)}
                  onBlur={() => markTouched("message")}
                  error={false}
                />
              </Field>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="mt-14 space-y-6">
            <CheckboxRow
              checked={form.consent}
              onChange={(v) => setField("consent", v)}
              onBlur={() => markTouched("consent")}
              error={showError("consent") ? errors.consent : undefined}
            >
              <span className="text-[#8B8B8B]">
                I agree to the{" "}
                <a href="/privacy" className="underline" style={{ color: ACCENT }}>
                  Privacy Policy
                </a>{" "}
                and consent to the use of my data.
              </span>
            </CheckboxRow>

            <CheckboxRow
              checked={form.newsletter}
              onChange={(v) => setField("newsletter", v)}
              onBlur={() => markTouched("newsletter")}
            >
              <span className="text-[#8B8B8B]">
                Yes, I'd like to receive styling tips, fashion advice, and exclusive
                updates from Bespoke Tailoring. I understand I'll receive no more than
                two emails per month.
              </span>
            </CheckboxRow>
          </div>

          {/* Captcha + Submit */}
          <div className="mt-16">
            <button
              onClick={onSubmit}
              className="mt-10 inline-flex h-[52px] w-full lg:w-[150px] items-center justify-center bg-black font-serif text-[18px] text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-[18px] text-black/85">{label}</label>
      {children}
      {error && (
        <p className="mt-2 text-[13px]" style={{ color: ERR }}>
          {error}
        </p>
      )}
    </div>
  );
}

function UnderlineInput({
  value,
  onChange,
  onBlur,
  error,
  type = "text",
  inputMode,
}: {
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error: boolean;
  type?: React.HTMLInputTypeAttribute;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <input
      value={value}
      type={type}
      inputMode={inputMode}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      className="mt-3 w-full bg-transparent pb-2 text-[18px] text-black/85 outline-none border-b border-b-[2px]"
      style={{ borderBottomColor: error ? ERR : BORDER }}
    />
  );
}

function UnderlineDropdown({
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  options,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error: boolean;
  options: Option[];
}) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const selectedLabel = useMemo(() => {
    const hit = options.find((o) => o.value === value);
    return hit?.label ?? "";
  }, [options, value]);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!btnRef.current?.contains(t) && !listRef.current?.contains(t)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative w-full">
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((p) => !p)}
        onBlur={onBlur}
        className="mt-3 flex w-full items-center justify-between bg-transparent pb-2 text-left outline-none border-b border-b-[2px]"
        style={{ borderBottomColor: error ? ERR : BORDER }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span
          className={[
            "text-[18px]",
            value ? "text-black/85" : "text-black/35",
          ].join(" ")}
        >
          {value ? selectedLabel : placeholder}
        </span>

        <ChevronUp
          className={[
            "h-5 w-5 text-black transition-transform",
            open ? "rotate-0" : "rotate-180",
          ].join(" ")}
          strokeWidth={2}
        />
      </button>

      {open && (
        <div
          ref={listRef}
          role="listbox"
          className="absolute left-0 right-0 z-50 mt-2 overflow-hidden bg-white shadow-lg"
          style={{ border: `1px solid ${BORDER}` }}
        >
          <div className="max-h-[280px] overflow-y-auto">
            {options.map((opt) => {
              const active = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={[
                    "block w-full px-6 py-3 text-left text-[16px] transition-colors",
                    active ? "text-white" : "text-black",
                  ].join(" ")}
                  style={{
                    backgroundColor: active ? DROPDOWN_HOVER : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = DROPDOWN_HOVER;
                      e.currentTarget.style.color = "#fff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#000";
                    }
                  }}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function CheckboxRow({
  checked,
  onChange,
  onBlur,
  children,
  error,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  onBlur: () => void;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label className="flex items-start gap-4">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          onBlur={onBlur}
          className="mt-[2px] h-5 w-5 rounded-[2px] border border-black/30"
          style={{ accentColor: ACCENT }}
        />
        <div className="text-[15px] leading-[1.75]">{children}</div>
      </label>

      {error && (
        <p className="mt-2 text-[13px]" style={{ color: ERR }}>
          {error}
        </p>
      )}
    </div>
  );
}