export default function OptionsGrid({ items }) {
  return (
    <div>
      <p className="font-mono text-[0.56rem] tracking-[0.12em] uppercase text-coral mt-4 mb-2 font-medium">
        Options
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-1.5 list-none">
        {items.map((item) => (
          <li
            key={item}
            className="text-[0.78rem] py-2 px-3 bg-sand border border-border-light rounded-lg text-smoke text-center transition-all duration-200 hover:bg-white hover:border-border hover:text-volcanic cursor-default"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
