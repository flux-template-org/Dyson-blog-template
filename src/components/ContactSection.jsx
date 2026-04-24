import { MotionWrapper } from "./utils/MotionWrapper.jsx";

export default function ContactSection({ data = {} }) {
  const { label, title, description, details = [] } = data;

  return (
    <section className="w-full max-w-8xl mx-auto px-4 py-16">
      <hr className="mb-6 border-t border-gray-200" />
      {label && (
        <span className="text-xs text-gray-400 uppercase tracking-widest font-light">
          {label}
        </span>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10">
        <MotionWrapper type="fade-up" className="flex flex-col gap-6">
          {title && (
            <h1 className="text-4xl md:text-5xl font-light grotesque-font text-gray-900 leading-tight">
              {title}
            </h1>
          )}
          {description && (
            <p className="text-sm font-light text-gray-500 leading-relaxed max-w-sm">
              {description}
            </p>
          )}
          {details.length > 0 && (
            <div className="flex flex-col gap-4 mt-4">
              {details.map((d, idx) => (
                <div key={idx} className="flex flex-col gap-0.5">
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-light">{d.label}</span>
                  <span className="text-sm font-light text-gray-800">{d.value}</span>
                </div>
              ))}
            </div>
          )}
        </MotionWrapper>

        <MotionWrapper type="fade-up" as="form" method="POST" action="/api/contact" className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="first" className="text-xs text-gray-400 font-light uppercase tracking-widest">First name</label>
              <input id="first" type="text" name="first" required className="px-4 py-3 border border-gray-200 rounded text-sm font-light focus:outline-none focus:border-gray-400 bg-transparent" placeholder="James" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="last" className="text-xs text-gray-400 font-light uppercase tracking-widest">Last name</label>
              <input id="last" type="text" name="last" required className="px-4 py-3 border border-gray-200 rounded text-sm font-light focus:outline-none focus:border-gray-400 bg-transparent" placeholder="Dyson" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xs text-gray-400 font-light uppercase tracking-widest">Email</label>
            <input id="email" type="email" name="email" required className="px-4 py-3 border border-gray-200 rounded text-sm font-light focus:outline-none focus:border-gray-400 bg-transparent" placeholder="james@example.com" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="subject" className="text-xs text-gray-400 font-light uppercase tracking-widest">Subject</label>
            <input id="subject" type="text" name="subject" className="px-4 py-3 border border-gray-200 rounded text-sm font-light focus:outline-none focus:border-gray-400 bg-transparent" placeholder="Product enquiry" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-xs text-gray-400 font-light uppercase tracking-widest">Message</label>
            <textarea id="message" name="message" required rows={5} className="px-4 py-3 border border-gray-200 rounded text-sm font-light focus:outline-none focus:border-gray-400 bg-transparent resize-none" placeholder="Tell us how we can help..." />
          </div>
          <button type="submit" className="self-start px-8 py-3 bg-gray-900 text-white text-sm font-light rounded hover:bg-gray-700 transition">
            Send message
          </button>
        </MotionWrapper>
      </div>
    </section>
  );
}
