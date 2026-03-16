import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col transition-colors duration-300">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-4 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-black tracking-tighter uppercase">Taxenos</div>
            <div className="hidden md:flex space-x-8 text-sm font-semibold opacity-70">
              <a href="#platform" className="hover:opacity-100 transition-opacity">Platform</a>
              <a href="#services" className="hover:opacity-100 transition-opacity">Services</a>
              <a href="#why-taxenos" className="hover:opacity-100 transition-opacity">Why Taxenos</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="mailto:joshua@jdqworks.com?subject=Taxenos%20Consultation"
              className="hidden sm:block bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 hover:text-white transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* HERO */}
        <section className="py-24 px-8 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-500 mb-6">
                Tax technology consulting + SaaS tooling
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.02]">
                Close the <span className="text-blue-500">gaps</span> your tax software leaves behind.
              </h1>

              <p className="text-xl opacity-70 mb-10 leading-relaxed max-w-2xl">
                Taxenos helps businesses stabilize AvaTax environments, fix broken tax workflows,
                and extend tax platforms with tools the UI never bothered to build.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="mailto:joshua@jdqworks.com?subject=Taxenos%20Consultation"
                  className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-500 transition-all text-center"
                >
                  Schedule Consultation
                </a>

                <a
                  href="#services"
                  className="border border-slate-300 dark:border-slate-700 px-10 py-4 rounded-xl font-bold hover:border-blue-500 hover:text-blue-500 transition-all text-center"
                >
                  Explore Services
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-2xl font-black text-blue-500">AvaTax</p>
                  <p className="opacity-70">Configuration, rescue, remediation</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-blue-500">Imports</p>
                  <p className="opacity-70">UDFs, certs, bulk data, missing workflows</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-blue-500">SaaS Tools</p>
                  <p className="opacity-70">Purpose-built extensions for tax ops</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block bg-slate-100 dark:bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 font-mono text-sm space-y-3 opacity-90">
              <p className="text-blue-500">$ taxenos --analyze-stack --platform=avatax</p>
              <p className="text-green-500">✓ Integration gaps identified</p>
              <p className="text-green-500">✓ Manual workflows reduced</p>
              <p className="text-green-500">✓ Bulk import path designed</p>
              <p className="text-green-500">✓ Environment stabilized</p>
              <p className="font-bold border-b border-blue-500 mt-4 inline-block pb-1">
                Status: Production no longer held together with duct tape and hope.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 px-8 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-14">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                Services built for real tax platform problems
              </h2>
              <p className="text-lg opacity-70 leading-relaxed">
                Not vague “digital transformation” fluff. Actual hands-on help for the messy parts:
                implementation cleanup, platform rescue, data imports, exemption workflows, and process gaps
                between UI limitations and API reality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-8 bg-slate-50 dark:bg-slate-950">
                <h3 className="text-xl font-bold mb-4">AvaTax Rescue</h3>
                <p className="opacity-70 leading-relaxed">
                  Diagnose broken implementations, bad mappings, misfiring tax logic, and unstable transaction flows.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-8 bg-slate-50 dark:bg-slate-950">
                <h3 className="text-xl font-bold mb-4">Bulk Import Solutions</h3>
                <p className="opacity-70 leading-relaxed">
                  Close product gaps with import tooling for UDFs, exemptions, certificate images, and other painful manual processes.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-8 bg-slate-50 dark:bg-slate-950">
                <h3 className="text-xl font-bold mb-4">Implementation Support</h3>
                <p className="opacity-70 leading-relaxed">
                  Support for ERP, eCommerce, and connector-based tax setups when the default install leaves things half-baked.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-8 bg-slate-50 dark:bg-slate-950">
                <h3 className="text-xl font-bold mb-4">Tax SaaS Extensions</h3>
                <p className="opacity-70 leading-relaxed">
                  Purpose-built tools that add missing business functionality where tax software vendors stop short.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PLATFORM */}
        <section id="platform" className="py-24 px-8 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                The platform side of Taxenos
              </h2>
              <p className="text-lg opacity-70 leading-relaxed mb-8">
                Taxenos is not just consulting. The long-term goal is a suite of practical tax operations tools
                that solve the ugly, repetitive, high-friction work tax teams still get stuck doing manually.
              </p>

              <div className="space-y-5">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                  <h3 className="font-bold text-lg mb-2">Import automation</h3>
                  <p className="opacity-70">
                    Faster movement of tax-related data into systems that were never designed for sane bulk operations.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                  <h3 className="font-bold text-lg mb-2">Operational utilities</h3>
                  <p className="opacity-70">
                    Tools for reconciliation, review, transformation, and exception handling across tax workflows.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                  <h3 className="font-bold text-lg mb-2">Future SaaS modules</h3>
                  <p className="opacity-70">
                    Expandable product modules for customers who need capability beyond what standard tax platforms expose.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8">
              <div className="text-sm uppercase tracking-[0.2em] text-blue-500 font-bold mb-4">
                Coming Soon
              </div>
              <h3 className="text-3xl font-black tracking-tight mb-4">
                Tax tooling for teams tired of doing platform work by hand
              </h3>
              <p className="opacity-70 leading-relaxed mb-8">
                Early product direction includes tax operations utilities, bulk import workflows,
                and practical extensions for environments where the tax engine is powerful
                but the admin experience is missing key business functionality.
              </p>
              <a
                href="mailto:joshua@jdqworks.com?subject=Taxenos%20Early%20Interest"
                className="inline-block bg-foreground text-background px-6 py-3 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all"
              >
                Ask About Early Access
              </a>
            </div>
          </div>
        </section>

        {/* WHY TAXENOS */}
        <section id="why-taxenos" className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-14">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                Why Taxenos
              </h2>
              <p className="text-lg opacity-70 leading-relaxed">
                This is built around actual AvaTax and tax-ops experience, not generic agency copy pasted
                from the internet by someone who thinks nexus is a Marvel villain.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-4 italic">Deep platform experience</h3>
                <p className="opacity-70 text-sm leading-relaxed">
                  Built on years of direct AvaTax support, escalation handling, implementation guidance, and technical problem-solving.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 italic">Gap-first thinking</h3>
                <p className="opacity-70 text-sm leading-relaxed">
                  Focused on the places where product UI, customer process, and API capability fail to meet in the middle.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 italic">Practical outcomes</h3>
                <p className="opacity-70 text-sm leading-relaxed">
                  The goal is simple: reduce manual effort, stabilize the system, and make tax operations less fragile.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-xs uppercase tracking-widest font-bold">
          <div className="text-white text-lg">Taxenos</div>

          <div className="flex gap-8">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#platform" className="hover:text-white transition-colors">Platform</a>
            <a href="mailto:joshua@jdqworks.com" className="hover:text-white transition-colors">Contact</a>
          </div>

          <p>© 2026 JDQ Works LLC</p>
        </div>
      </footer>
    </div>
  );
}