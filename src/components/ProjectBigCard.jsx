export default function ProjectBigCard({
  title,
  description,
  category,
  year,
  image,
  href,
}) {
  const content = (
    <article className="gsap-reveal-card group h-full overflow-hidden rounded-2xl border border-alice-blue-400/25 bg-alice-blue-950/35 shadow-sm transition-shadow duration-300 hover:shadow-xl">
      <div className="relative aspect-16/10 overflow-hidden bg-alice-blue-900">
        {image ? (
          <img
            src={image}
            alt={`Screenshot of ${title}`}
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-linear-to-br from-alice-blue-800 to-alice-blue-950 p-8 text-center font-mono text-2xl text-alice-blue-100">
            {title}
          </div>
        )}
      </div>

      <div className="flex min-h-52 flex-col p-6 text-alice-blue-50">
        <div className="flex items-start justify-between gap-4 text-xs font-medium uppercase tracking-[0.12em] text-alice-blue-300">
          <span>{category}</span>
          <span>{year}</span>
        </div>
        <h3 className="mt-4 font-mono text-xl leading-tight text-alice-blue-100">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-alice-blue-200">{description}</p>
        {href && <span className="mt-auto pt-6 text-sm font-medium text-alice-blue-300">View project ↗</span>}
      </div>
    </article>
  );

  return href ? (
    <a href={href} className="block h-full" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
      {content}
    </a>
  ) : content;
}
