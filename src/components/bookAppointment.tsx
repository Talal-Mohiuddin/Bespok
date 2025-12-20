"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { MapPin, ChevronDown, Check } from "lucide-react";

const ACCENT = "#A66242";
const ERR = "#C94134";
const BORDER = "#111111";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  consent: boolean;
  newsletter: boolean;
  captcha: boolean;
};

type Errors = Partial<Record<keyof FormState, string>>;

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const phoneOk = (v: string) => {
  const cleaned = v.trim().replace(/\D/g, "");
  return cleaned.length >= 7 && cleaned.length <= 15;
};

export default function BookAppointment() {
  const STORE_ADDRESS = "7–8 Madni Plaza, Jinnah Avenue, Blue Area, Islamabad";
  const DIRECTIONS_URL =
    "https://www.google.com/maps/search/?api=1&query=7-8%20Madni%20Plaza%2C%20Jinnah%20Avenue%2C%20Blue%20Area%2C%20Islamabad";

  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    consent: false,
    newsletter: false,
    captcha: false,
  });

  const [touched, setTouched] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const minDate = useMemo(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }, []);

  const errors: Errors = useMemo(() => {
    const e: Errors = {};
    if (!form.firstName.trim()) e.firstName = "Name is required.";
    if (!form.lastName.trim()) e.lastName = "Name is required.";

    if (!form.email.trim()) {
      e.email = "This field is required. Please input a valid email.";
    } else if (!emailOk(form.email)) {
      e.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      e.phone = "Phone number is required.";
    } else if (!phoneOk(form.phone)) {
      e.phone = "Please enter a valid phone number (7-15 digits).";
    }

    if (!form.date) e.date = "This field is required.";
    if (!form.time) e.time = "This field is required.";
    if (!form.consent) e.consent = "You must agree to the Privacy Policy.";
    if (!form.captcha)
      e.captcha = "Verification expired. Check the checkbox again.";

    return e;
  }, [form]);

  const showError = (k: keyof FormState) =>
    Boolean((submitted || touched[k]) && errors[k]);

  const setField = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((p) => ({ ...p, [k]: v }));

  const touch = (k: keyof FormState) =>
    setTouched((p) => ({ ...p, [k]: true }));

  const onSubmit = async () => {
    setSubmitted(true);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", form);
      setSubmitSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          consent: false,
          newsletter: false,
          captcha: false,
        });
        setTouched({});
        setSubmitted(false);
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1400px] px-10 py-32">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="font-serif text-[32px]" style={{ color: ACCENT }}>
              Appointment Confirmed!
            </h2>
            <p className="max-w-[500px] text-[18px] text-black/70">
              Thank you for booking with us. We've sent a confirmation email to{" "}
              <strong>{form.email}</strong>. We look forward to seeing you on{" "}
              {new Date(form.date).toLocaleDateString()} at {form.time}.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white">
      {/* OUR STORE HEADER */}
      <div className="mx-auto max-w-[1400px] px-10 pt-10">
        <h2
          className="text-center font-serif text-[34px] tracking-wide"
          style={{ color: ACCENT }}
        >
          Our Store
        </h2>

        <div className="mt-4 flex flex-col items-center gap-3 text-[18px] text-black/55">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6" style={{ color: ACCENT }} />
            <span className="font-sans">Shop: {STORE_ADDRESS}</span>
          </div>

          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[18px] font-sans hover:underline"
            style={{ color: ACCENT }}
          >
            <span className="inline-block rotate-45">➤</span>
            Get Directions
          </a>
        </div>
      </div>

      {/* BOOKING SECTION */}
      <div className="mx-auto max-w-[1400px] px-10 pb-20 pt-14">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[400px_1fr]">
          {/* LEFT IMAGE */}
          <div className="w-full">
            <div className="overflow-hidden border border-black/10 bg-white">
              <img
                src="/book-appointments.webp"
                alt="Bespoke tailoring consultation"
                className="h-[680px] w-full object-cover object-center"
                draggable={false}
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="flex flex-col">
            <h3
              className="text-center font-serif text-[32px] leading-[1.3]"
              style={{ color: ACCENT }}
            >
              Experience True Bespoke Tailoring,
              <br />
              Book Your Appointment Today
            </h3>

            <div className="mx-auto mt-12 w-full max-w-[880px]">
              <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
                {/* First Name */}
                <Field
                  id="firstName"
                  error={showError("firstName") ? errors.firstName : undefined}
                >
                  <UnderlineInput
                    name="firstName"
                    value={form.firstName}
                    onChange={(v) => setField("firstName", v)}
                    onBlur={() => touch("firstName")}
                    error={showError("firstName")}
                    autoComplete="given-name"
                    placeholder="First Name"
                  />
                </Field>

                {/* Last Name */}
                <Field
                  id="lastName"
                  error={showError("lastName") ? errors.lastName : undefined}
                >
                  <UnderlineInput
                    name="lastName"
                    value={form.lastName}
                    onChange={(v) => setField("lastName", v)}
                    onBlur={() => touch("lastName")}
                    error={showError("lastName")}
                    autoComplete="family-name"
                    placeholder="Last Name"
                  />
                </Field>

                {/* Email */}
                <Field
                  id="email"
                  error={showError("email") ? errors.email : undefined}
                >
                  <UnderlineInput
                    name="email"
                    value={form.email}
                    onChange={(v) => setField("email", v)}
                    onBlur={() => touch("email")}
                    error={showError("email")}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="Email Address"
                  />
                </Field>

                {/* Phone */}
                <Field
                  id="phone"
                  error={showError("phone") ? errors.phone : undefined}
                >
                  <PhoneUnderline
                    name="phone"
                    value={form.phone}
                    onChange={(v) => setField("phone", v)}
                    onBlur={() => touch("phone")}
                    error={showError("phone")}
                  />
                </Field>

                {/* Choose Date */}
                <Field
                  id="date"
                  error={showError("date") ? errors.date : undefined}
                >
                  <DateInput
                    name="date"
                    value={form.date}
                    onChange={(v) => setField("date", v)}
                    onBlur={() => touch("date")}
                    error={showError("date")}
                    min={minDate}
                  />
                </Field>

                {/* Choose Time */}
                <Field
                  id="time"
                  error={showError("time") ? errors.time : undefined}
                >
                  <UnderlineTime
                    name="time"
                    value={form.time}
                    onChange={(v) => setField("time", v)}
                    onBlur={() => touch("time")}
                    error={showError("time")}
                    options={[
                      { value: "", label: "Choose Time" },
                      { value: "10:00", label: "10:00 AM" },
                      { value: "11:00", label: "11:00 AM" },
                      { value: "12:00", label: "12:00 PM" },
                      { value: "14:00", label: "02:00 PM" },
                      { value: "15:00", label: "03:00 PM" },
                      { value: "16:00", label: "04:00 PM" },
                    ]}
                  />
                </Field>
              </div>

              {/* Checkboxes + Recaptcha + Submit */}
              <div className="mt-14 space-y-8">
                <div className="space-y-6">
                  <CheckRow
                    id="consent"
                    checked={form.consent}
                    onChange={(v) => setField("consent", v)}
                    onBlur={() => touch("consent")}
                    error={showError("consent") ? errors.consent : undefined}
                  >
                    <span className="text-[15px] leading-[1.75] text-black/55">
                      I agree to the{" "}
                      <a
                        href="/privacy"
                        className="underline"
                        style={{ color: ACCENT }}
                      >
                        Privacy Policy
                      </a>{" "}
                      and consent to the use of my data.
                    </span>
                  </CheckRow>

                  <CheckRow
                    id="newsletter"
                    checked={form.newsletter}
                    onChange={(v) => setField("newsletter", v)}
                    onBlur={() => touch("newsletter")}
                  >
                    <span className="text-[15px] leading-[1.75] text-black/55">
                      Yes, send me styling tips, fashion advice, special offers,
                      and exclusive updates. You'll hear from us no more than
                      twice a month.
                    </span>
                  </CheckRow>
                </div>

                <button
                  type="button"
                  onClick={onSubmit}
                  disabled={isSubmitting}
                  className="h-[52px] w-full lg:w-[180px] bg-black font-serif text-[18px] text-white transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  children,
  error,
}: {
  id: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      {children}
      {error && (
        <p className="mt-2 text-[13px]" style={{ color: ERR }} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function UnderlineInput({
  name,
  value,
  onChange,
  onBlur,
  error,
  type = "text",
  inputMode,
  autoComplete,
  min,
  placeholder,
}: {
  name: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error: boolean;
  type?: "text" | "email" | "date";
  inputMode?: "text" | "email" | "numeric" | "tel";
  autoComplete?: string;
  min?: string;
  placeholder?: string;
}) {
  return (
    <input
      id={name}
      name={name}
      value={value}
      type={type}
      inputMode={inputMode}
      autoComplete={autoComplete}
      min={min}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      className="mt-3 w-full bg-transparent pb-2 text-[18px] text-black/85 outline-none border-b-2 transition-colors placeholder:text-black/35"
      style={{ borderBottomColor: error ? ERR : BORDER }}
      aria-invalid={error}
    />
  );
}

function PhoneUnderline({
  name,
  value,
  onChange,
  onBlur,
  error,
}: {
  name: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error: boolean;
}) {
  return (
    <div
      className="mt-3 flex items-center gap-4 border-b-2 pb-2 transition-colors"
      style={{ borderBottomColor: error ? ERR : BORDER }}
    >
      <div className="flex items-center gap-2">
        {/* <div className="h-4 w-6 overflow-hidden rounded-[2px] border border-black/10">
          <div className="flex h-full">
            <div className="w-full bg-[#01411C]" />
          </div>
        </div> */}
        <span className="text-[16px] text-black/70">+92</span>
      </div>

      <input
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder="Phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        className="flex-1 bg-transparent text-[18px] text-black/85 outline-none placeholder:text-black/35"
        aria-invalid={error}
      />
    </div>
  );
}

function DateInput({
  name,
  value,
  onChange,
  onBlur,
  error,
  min,
}: {
  name: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error: boolean;
  min?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const displayValue = value
    ? new Date(value).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker?.();
    }
  };

  return (
    <div className="relative" onClick={handleClick}>
      <input
        ref={inputRef}
        id={name}
        name={name}
        value={value}
        type="date"
        min={min}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        aria-invalid={error}
      />
      <div
        className="mt-3 w-full bg-transparent pb-2 text-[18px] outline-none border-b-2 transition-colors cursor-pointer"
        style={{
          borderBottomColor: error ? ERR : BORDER,
          color: value ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0.35)",
        }}
      >
        {displayValue || "Choose Date"}
      </div>
    </div>
  );
}

function UnderlineTime({
  name,
  value,
  onChange,
  onBlur,
  error,
  options,
}: {
  name: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error: boolean;
  options: Array<{ value: string; label: string }>;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!wrapRef.current?.contains(t)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  const label = options.find((o) => o.value === value)?.label ?? "Choose Time";

  return (
    <div ref={wrapRef} className="relative">
      <button
        id={name}
        name={name}
        type="button"
        onClick={() => setOpen((p) => !p)}
        onBlur={onBlur}
        className="mt-3 flex w-full items-center justify-between bg-transparent pb-2 text-left outline-none border-b-2 transition-colors"
        style={{ borderBottomColor: error ? ERR : BORDER }}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span
          className={[
            "text-[18px]",
            value ? "text-black/85" : "text-black/35",
          ].join(" ")}
        >
          {label}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-black transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 z-50 mt-2 max-h-[240px] overflow-y-auto border bg-white shadow-lg"
          style={{ borderColor: BORDER }}
          role="listbox"
        >
          {options
            .filter((o) => o.value !== "")
            .map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => {
                  onChange(o.value);
                  setOpen(false);
                }}
                className="block w-full px-6 py-3 text-left text-[16px] text-black hover:bg-[#381a12] hover:text-white transition-colors"
                role="option"
                aria-selected={value === o.value}
              >
                {o.label}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}

function CheckRow({
  id,
  checked,
  onChange,
  onBlur,
  error,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  onBlur: () => void;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="flex items-start gap-4 cursor-pointer">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          onBlur={onBlur}
          className="mt-[2px] h-5 w-5 rounded-[2px] border border-black/30 cursor-pointer"
          style={{ accentColor: ACCENT }}
          aria-invalid={!!error}
        />
        <div>{children}</div>
      </label>
      {error && (
        <p
          className="mt-2 ml-9 text-[13px]"
          style={{ color: ERR }}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
