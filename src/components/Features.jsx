import { HeartPulse, FileText, Star, Search } from "lucide-react";

const features = [
  {
    icon: HeartPulse,
    title: "Doctor Profiles",
    desc: "Browse detailed profiles with specialization, qualifications, and fees.",
  },
  {
    icon: Search,
    title: "Smart Search",
    desc: "Filter doctors and services by availability, specialization, and location.",
  },
  {
    icon: FileText,
    title: "Medical Reports",
    desc: "View lab results, prescriptions, and visit summaries online.",
  },
  {
    icon: Star,
    title: "Ratings & Feedback",
    desc: "Share your experience and help others choose the right doctor.",
  },
];

export default function Features(){
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Core capabilities</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({icon:Icon, title, desc})=> (
            <div key={title} className="rounded-2xl border border-blue-500/20 bg-slate-800/50 p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Icon className="text-blue-400 w-5 h-5"/>
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-1 text-blue-100/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
