export default function BudgetCard({ category, amount, note, items, color }) {
  return (
    <div className="bg-white border border-border-light rounded-card overflow-hidden shadow-sm">
      <div className="h-[3px] w-full" style={{ background: color }} />
      <div className="p-5">
      <p className="font-mono text-[0.56rem] tracking-[0.16em] uppercase text-smoke mb-2">
        {category}
      </p>
      <p className="font-display text-[1.7rem] font-bold text-volcanic mb-0.5">
        {amount}
      </p>
      <p className="text-[0.7rem] text-smoke-light mb-3.5">{note}</p>

      <ul className="list-none">
        {items.map((item, i) => (
          <li
            key={i}
            className={`flex justify-between text-[0.8rem] py-2 text-[#5a5a6a] ${
              i < items.length - 1 ? 'border-b border-border-light' : ''
            }`}
          >
            <span>{item.label}</span>
            <span className="font-mono text-[0.72rem] text-volcanic font-medium">
              {item.amount}
            </span>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}
