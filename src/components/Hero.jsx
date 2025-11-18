import { useState } from "react";
import { Stethoscope, CalendarDays, ShieldCheck, MessageSquare } from "lucide-react";

export default function Hero() {
  const [email, setEmail] = useState("");
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.12),transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          MediCare Plus
        </h1>
        <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
          Accessible, secure, and modern healthcare for everyone. Book appointments, message your doctor, and access medical reports online.
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{Icon: Stethoscope, label: "Specialists"}, {Icon: CalendarDays, label: "Appointments"}, {Icon: MessageSquare, label: "Messaging"}, {Icon: ShieldCheck, label: "Secure"}].map(({Icon, label}) => (
            <div key={label} className="flex items-center gap-2 justify-center bg-slate-800/50 border border-blue-500/20 rounded-xl px-4 py-3 text-blue-100">
              <Icon className="w-5 h-5 text-blue-400"/>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-2">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email" className="w-64 md:w-80 rounded-xl bg-slate-900/60 border border-blue-500/30 px-4 py-3 text-blue-100 outline-none focus:ring-2 focus:ring-blue-500"/>
          <button className="rounded-xl bg-blue-600 hover:bg-blue-500 transition px-5 py-3 text-white font-medium">Notify Me</button>
        </div>
      </div>
    </section>
  );
}
