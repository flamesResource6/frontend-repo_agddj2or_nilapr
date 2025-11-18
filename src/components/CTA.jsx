export default function CTA(){
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-600 to-emerald-500 p-[1px]">
          <div className="rounded-2xl bg-slate-900/70 p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to modernize healthcare?</h3>
            <p className="mt-2 text-blue-100/80">Sign in to book appointments, message doctors, and access reports.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="#" className="rounded-xl bg-white/10 hover:bg-white/20 text-white px-6 py-3">Login</a>
              <a href="#" className="rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-6 py-3">Create account</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
