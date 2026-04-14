import { budgetTotal, budgetCategories } from '../data/budget'
import BudgetCard from './BudgetCard'
import BudgetDonut from './BudgetDonut'

export default function Budget() {
  return (
    <div id="budget" className="pt-16 pb-6 px-6 md:px-8 max-w-[920px] mx-auto">
      <p className="font-mono text-[0.58rem] tracking-[0.22em] uppercase text-celeste mb-1">
        Money
      </p>
      <h2 className="font-display text-[2rem] font-semibold text-volcanic mb-8">
        Budget Breakdown
      </h2>

      {/* Total bar */}
      <div className="bg-volcanic rounded-card p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6">
        <div>
          <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-white/40 mb-1">
            Estimated Total
          </p>
          <p className="font-display text-[2.6rem] font-bold text-white leading-none">
            {budgetTotal.cash}
          </p>
        </div>
        <div className="text-[0.72rem] text-white/35 md:text-right">
          + {budgetTotal.hilton}<br />
          + {budgetTotal.hyatt}
        </div>
      </div>

      {/* Donut */}
      <div className="mb-8">
        <BudgetDonut />
      </div>

      {/* Category cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {budgetCategories.map((cat) => (
          <BudgetCard key={cat.category} {...cat} />
        ))}
      </div>
    </div>
  )
}
