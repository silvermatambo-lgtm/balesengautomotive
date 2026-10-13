import { useMemo, useState } from 'react';
import { MessageCircle, X, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS } from '../data/products';

type Step = 'welcome' | 'name' | 'phone' | 'service' | 'message' | 'review';

const SERVICES = [
  'Order Parts / Quote',
  'Engine Parts',
  'Brake Systems',
  'Filters & Lubricants',
  'Suspension & Steering',
  'Electrical Parts',
  'Transmission & Driveline',
  'Trailer Parts',
  'Tyres & Wheels',
  'Other Enquiry',
];

const WHATSAPP_NUMBER = BUSINESS.whatsapp;
const BUSINESS_NAME = BUSINESS.name;

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>('welcome');
  const [data, setData] = useState({ name: '', phone: '', service: '', message: '' });

  const canContinue = useMemo(() => {
    if (step === 'name') return data.name.trim().length > 1;
    if (step === 'phone') return data.phone.trim().length > 6;
    if (step === 'service') return !!data.service;
    if (step === 'message') return data.message.trim().length > 2;
    return true;
  }, [step, data]);

  const next = () => {
    const order: Step[] = ['welcome', 'name', 'phone', 'service', 'message', 'review'];
    setStep(order[Math.min(order.indexOf(step) + 1, order.length - 1)]);
  };
  const back = () => {
    const order: Step[] = ['welcome', 'name', 'phone', 'service', 'message', 'review'];
    setStep(order[Math.max(order.indexOf(step) - 1, 0)]);
  };
  const sendToWhatsApp = () => {
    const text = `Hi ${BUSINESS_NAME}, I would like assistance.%0A%0AName: ${encodeURIComponent(data.name)}%0APhone: ${encodeURIComponent(data.phone)}%0AEnquiry: ${encodeURIComponent(data.service)}%0AMessage: ${encodeURIComponent(data.message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
    setOpen(false);
  };

  return (
    <div className="fixed bottom-[76px] right-4 z-50 md:bottom-8">
      {open && (
        <div className="animate-chat-slide mb-3 w-[calc(100vw-2rem)] max-w-[360px] overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-green-600 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              <span className="font-semibold text-sm">{BUSINESS_NAME}</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close">
              <X size={20} />
            </button>
          </div>

          <div className="p-4 max-h-[340px] overflow-y-auto">
            {step === 'welcome' && (
              <Bubble>
                Hi! Welcome to {BUSINESS_NAME}. We supply quality truck spares & accessories nationwide. How can we help you today?
              </Bubble>
            )}
            {step === 'name' && <Field label="What is your name?" value={data.name} onChange={(v) => setData({ ...data, name: v })} placeholder="Your full name" />}
            {step === 'phone' && <Field label="Your phone number?" value={data.phone} onChange={(v) => setData({ ...data, phone: v })} placeholder="e.g. 064 821 9928" type="tel" />}
            {step === 'service' && (
              <div>
                <p className="mb-3 text-sm font-semibold text-stone-800">What do you need?</p>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {SERVICES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setData({ ...data, service: s })}
                      className={`w-full text-left rounded-xl border px-3 py-2.5 text-sm transition ${
                        data.service === s ? 'border-green-500 bg-green-50 text-green-800' : 'border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {step === 'message' && (
              <div>
                <p className="mb-3 text-sm font-semibold text-stone-800">Tell us more (part numbers, vehicle, etc.)</p>
                <textarea
                  autoFocus
                  value={data.message}
                  onChange={(e) => setData({ ...data, message: e.target.value })}
                  placeholder="Describe what you need..."
                  rows={4}
                  className="w-full resize-none rounded-xl border border-stone-200 p-3 text-sm outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
                />
              </div>
            )}
            {step === 'review' && (
              <div>
                <div className="mb-4 flex items-center gap-2 text-green-600">
                  <CheckCircle2 size={20} />
                  <b>Ready to send</b>
                </div>
                <div className="space-y-2 rounded-2xl bg-stone-50 p-4 text-sm">
                  <p><b>Name:</b> {data.name}</p>
                  <p><b>Phone:</b> {data.phone}</p>
                  <p><b>Enquiry:</b> {data.service}</p>
                  <p><b>Message:</b> {data.message}</p>
                </div>
                <p className="mt-3 text-xs text-stone-500">Nothing is sent until you press “Continue on WhatsApp”.</p>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 border-t border-stone-100 p-4">
            {step !== 'welcome' && (
              <button onClick={back} className="flex h-11 w-11 items-center justify-center rounded-xl border border-stone-200">
                <ArrowLeft size={17} />
              </button>
            )}
            {step !== 'review' ? (
              <button
                onClick={next}
                disabled={!canContinue}
                className="flex-1 rounded-xl bg-green-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {step === 'welcome' ? 'Start Chat' : 'Continue'}
              </button>
            ) : (
              <button
                onClick={sendToWhatsApp}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-bold text-white hover:bg-green-500"
              >
                <Send size={16} /> Continue on WhatsApp
              </button>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label="Open WhatsApp assistant"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:-translate-y-1 hover:bg-green-400 animate-pulse-red"
      >
        {open ? <X size={27} /> : <MessageCircle size={29} />}
      </button>
    </div>
  );
}

function Bubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 max-w-[90%] rounded-2xl rounded-tl-sm bg-stone-100 px-4 py-3 text-sm leading-relaxed text-stone-700">
      {children}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-stone-800">{label}</p>
      <input
        autoFocus
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
      />
    </div>
  );
}
