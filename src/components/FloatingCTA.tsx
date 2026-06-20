export default function FloatingCTA() {
  return (
    <>
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 hidden rounded-full bg-gradient-to-r from-amber-300 to-orange-400 px-5 py-3 text-sm font-bold text-[#17151f] shadow-2xl shadow-stone-950/25 transition-all duration-300 hover:-translate-y-1 hover:brightness-105 md:inline-flex"
      >
        Book Free Strategy Call
      </a>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-amber-100/10 bg-[#17151f]/95 p-3 backdrop-blur md:hidden">
        <a
          href="#contact"
          className="block rounded-full bg-gradient-to-r from-amber-300 to-orange-400 px-5 py-3 text-center text-sm font-bold text-[#17151f]"
        >
          Book Free Strategy Call
        </a>
      </div>
    </>
  );
}
