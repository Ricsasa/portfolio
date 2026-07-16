export default function ProjectCard({
  index,
  total,
  title,
  description,
  category,
  year,
  backgroundImage,
  topImage,
  bottomImage,
  href = '#',
}) {

  console.log(backgroundImage)

  return (
    <div className="group relative isolate aspect-4/5 overflow-hidden md:aspect-4/6 md:max-w-[36.666667%] embla__slide mx-1">
      <article className="m-4 rounded-2x">
        <img src={backgroundImage} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />

        <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/5 via-black/0 to-black/40" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[55%] bg-linear-to-t from-black/55 via-black/15 to-transparent" />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 sm:p-7">
          <span className="text-[10px] font-semibold tracking-[0.12em] text-white/80">
            {index} / {total}
          </span>

          <a
            href={href}
            target="_blank" 
            rel="noopener"
            aria-label={`View ${title}`}
            className="grid size-9 place-items-center rounded-full border border-white/20 text-white/80 backdrop-blur-sm transition-all duration-300 hover:rotate-45 hover:border-white/60 hover:bg-white hover:text-black"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4" aria-hidden="true">
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>

        <div className="absolute inset-x-0 top-[20%] h-[42%] transition-transform duration-700 ease-out group-hover:-translate-y-2">
          <img src={bottomImage} alt="" className="absolute left-[3%] top-[38%] w-[66%] -rotate-11 rounded-sm object-cover shadow-2xl transition-transform duration-700 ease-out group-hover:-rotate-7 group-hover:scale-[1.03]" />
          <img src={topImage} alt="" className="absolute right-[6%] top-0 z-10 w-[66%] -rotate-12 rounded-sm object-cover shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-transform duration-700 ease-out group-hover:rotate-[-8deg] group-hover:scale-[1.04]" />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 p-7 text-white">
          <h3 className="text-[clamp(1.25rem,5vw,1.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]">{title}</h3>
          <p className="mt-3 max-w-77.5 text-xs leading-[1.55] text-white/70">{description}</p>
          <div className="my-4 h-px bg-white/20" />
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.08em] text-white/65">
            <span>{category}</span>
            <span>{year}</span>
          </div>
        </div>
      </article>
    </div>
  );
}
