import { Label } from "@/components/label";

export default function Home() {
  return (
    <div className="min-h-screen bg-mono-100">
      {/* Content constrained to 900px, centered */}
      <div className="mx-auto w-full max-w-[900px]">
        {/* Logo — center sits at y=0, top half above viewport.
            Revealed naturally during overscroll bounce. */}
        <div className="flex justify-center">
          <img
            src="/logo.svg"
            alt="Motoniq"
            width={270}
            height={256}
            className="-translate-y-1/2 w-[160px] md:w-[270px]"
          />
        </div>

        {/* Hero — starts at the visual bottom of the logo (gap = 0) */}
        <section className="-mt-20 md:-mt-32 flex w-full flex-col items-center gap-2 py-10 md:py-16">
          <span className="font-pp-fraktion-mono text-[14px] leading-[20px] tracking-[-0.01em] uppercase text-mono-700">
            Motoniq
          </span>
          <h1 className="text-h3 md:text-h2 lg:text-h1 text-center text-mono-700">
            The Mind for Every Machine
          </h1>
          <p className="text-b2 md:text-b1 text-center text-mono-500 max-w-[560px]">
            Advancing the physical world with generalised intelligence,
            grounded in physics.
          </p>
        </section>

        {/* Contacts */}
        <section className="px-6 md:px-12">
          <div className="flex flex-col">
            {/* Top divider */}
            <div className="h-px bg-mono-200 mb-8 md:mb-16" />
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-8 pb-8 md:pb-16">
              {/* Get In Touch */}
              <div className="flex flex-col items-center md:items-start gap-2">
                <h5 className="text-h6 text-mono-700 text-center md:text-left">Get In Touch</h5>
                <Label href="mailto:contact@motonic.ai">contact@motonic.ai</Label>
              </div>

              <div className="h-px w-full md:h-auto md:w-px md:self-stretch bg-mono-200" />

              {/* Opportunities */}
              <div className="flex flex-col items-center md:items-start gap-2">
                <h5 className="text-h6 text-mono-700 text-center md:text-left">Opportunities</h5>
                <Label href="mailto:careers@motonic.ai">careers@motonic.ai</Label>
              </div>

              <div className="h-px w-full md:h-auto md:w-px md:self-stretch bg-mono-200" />

              {/* Locations */}
              <div className="flex flex-col items-center md:items-start gap-2">
                <h5 className="text-h6 text-mono-700 text-center md:text-left">Locations</h5>
                <Label className="whitespace-nowrap">USA · London · Singapore</Label>
              </div>
            </div>

            {/* Divider — same width as the 3 groups above */}
            <div className="h-px bg-mono-200" />
          </div>
        </section>

        {/* Mission */}
        <section className="px-6 md:px-12 py-10 md:py-16">
          <div className="flex w-full flex-col gap-3 md:gap-4 rounded-4 bg-mono-200 p-4 md:p-6">
            <span className="font-pp-fraktion-mono text-[14px] leading-[20px] tracking-[-0.01em] uppercase text-mono-500">
              Our Mission
            </span>
            <p className="text-b2 text-mono-700">
              Motoniq is building a new class of physical intelligence. Systems that understand the
              physical world the way humans do, learn from watching, reason through contact, generalise
              across any machine, and operate safely alongside other beings.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="px-6 md:px-12">
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-b2 text-mono-600 text-justify hyphens-auto">
              Language models changed everything. One model. Trained on the internet. Intelligence that could understand, reason and respond across any domain.
            </p>
            <p className="text-b2 text-mono-600 text-justify hyphens-auto">
              Robotics is still waiting for its "GPT" moment. Machines remain scripted, brittle outside the lab, unable to generalise beyond what they were explicitly shown.
            </p>
            <p className="text-b2 text-mono-600 text-justify hyphens-auto">
              Not because the data doesn't exist. Because the architecture doesn't. The physical world runs on physics — force, friction, contact, consequence. Models built so far were retrofitted, fine-tuned, constrained and reliant on expensive teleoperation. They learn what the world looks like. Not how it works.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section className="px-6 md:px-12 pt-8 md:pt-12">
          <div className="flex flex-col gap-4 md:gap-6">
            <h5 className="text-h5 text-mono-700">We are building the physics-grounded world model that does</h5>
            <p className="text-b2 text-mono-600 text-justify hyphens-auto">
              Omnis doesn't just predict what the world looks like. It understands what the world does. How objects resist. How surfaces transfer force. How a system behaves before contact is made. This is beyond imitation. This is reasoning.
            </p>
            <p className="text-b2 text-mono-600 text-justify hyphens-auto">
              Connect any robot. Describe the task. Deploy in any environment. No engineers. No weeks of setup. This is Intelligence as a Service — the layer that any machine can run on, getting better with every cycle.
            </p>
            <p className="text-b2 text-mono-600 text-justify hyphens-auto">
              Every deployment makes the next one smarter. Every robot connected learns from every other. Robot to robot. Robot to human. Designed for every industry, for a world where machines and people work together safely.
            </p>
            <p className="text-b2 text-mono-600 text-justify hyphens-auto">
              Our proprietary models, data engines and hardware systems are built by world leading ML researchers, theoretical physicists, roboticists and mathematicians who believe the next era of intelligence doesn't start in language. It starts in the world.
            </p>
          </div>
        </section>

        {/* Footer */}

        <footer className="px-6 md:px-12 py-8">
          <div className="h-px bg-mono-200 mb-8" />
          <div className="flex items-center justify-between">
            <img src="/logotype.svg" alt="Motoniq" width={71} height={13} className="md:w-[95px] md:h-[17px]" />
            <span className="font-pp-fraktion-mono text-d4 uppercase text-mono-500">
              © 2026 Motoniq Labs Inc
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
