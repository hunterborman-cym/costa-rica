import { useState } from 'react'
import { ChevronDown, Phone, Globe, MessageCircle, ShieldCheck } from 'lucide-react'

export default function TripExtras() {
  return (
    <div className="pt-8 pb-6 px-6 md:px-8 max-w-[920px] mx-auto">
      <p className="font-mono text-[0.58rem] tracking-[0.22em] uppercase text-celeste mb-1">
        Reference
      </p>
      <h2 className="font-display text-[2rem] font-semibold text-volcanic mb-6">
        Trip Essentials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <CollapsibleCard title="Spanish Phrases" icon={MessageCircle}>
          <Phrase es="Pura vida" en="Pure life (greeting / goodbye / everything)" />
          <Phrase es="La cuenta, por favor" en="The check, please" />
          <Phrase es="Una cerveza, por favor" en="One beer, please" />
          <Phrase es="¿Dónde está...?" en="Where is...?" />
          <Phrase es="Muchas gracias" en="Thank you very much" />
          <Phrase es="¿Cuánto cuesta?" en="How much does it cost?" />
          <Phrase es="No entiendo" en="I don't understand" />
          <Phrase es="Necesito ayuda" en="I need help" />
          <Phrase es="¡Qué rico!" en="How delicious!" />
          <Phrase es="Con mucho gusto" en="With pleasure (you're welcome)" />
        </CollapsibleCard>

        <CollapsibleCard title="Emergency Contacts" icon={ShieldCheck}>
          <Contact label="Emergency (CR)" number="911" />
          <Contact label="US Embassy San José" number="+506 2519-2000" />
          <Contact label="DAN Dive Emergency" number="+1 919-684-9111" />
          <Contact label="Hospital Liberia (CIMA)" number="+506 2690-5500" />
          <Contact label="Waldorf Astoria" number="+506 2696-0000" />
          <Contact label="Rio Perdido" number="+506 2673-3600" />
        </CollapsibleCard>

        <CollapsibleCard title="Currency" icon={Globe}>
          <div className="space-y-2">
            <div className="flex justify-between items-center py-1.5 border-b border-border-light">
              <span className="text-[0.82rem] text-volcanic font-medium">$1 USD</span>
              <span className="font-mono text-[0.75rem] text-smoke">≈ 510 CRC</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-border-light">
              <span className="text-[0.82rem] text-volcanic font-medium">$10 USD</span>
              <span className="font-mono text-[0.75rem] text-smoke">≈ 5,100 CRC</span>
            </div>
            <div className="flex justify-between items-center py-1.5">
              <span className="text-[0.82rem] text-volcanic font-medium">$100 USD</span>
              <span className="font-mono text-[0.75rem] text-smoke">≈ 51,000 CRC</span>
            </div>
            <p className="text-[0.72rem] text-smoke-light mt-2">USD widely accepted. Visa/Mastercard at most places. Carry some colones for small vendors.</p>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="Documents & Essentials" icon={Phone}>
          <ul className="space-y-1.5">
            {['Passport (valid 6+ months)', 'Dive certifications (PADI cards)', 'Travel insurance docs', 'Rental car confirmation', 'Hotel confirmations', 'Waterproof phone case', 'Reef-safe sunscreen', 'Bug spray (DEET)', 'Quick-dry towel'].map(item => (
              <li key={item} className="text-[0.78rem] text-[#4a4a5a] flex items-start gap-2">
                <span className="text-celeste mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </CollapsibleCard>
      </div>
    </div>
  )
}

function CollapsibleCard({ title, icon: Icon, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white border border-border-light rounded-card overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3.5 cursor-pointer hover:bg-black/[0.01] transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <Icon size={16} className="text-celeste" />
          <span className="font-display text-[0.95rem] font-semibold text-volcanic">{title}</span>
        </div>
        <ChevronDown size={14} className={`text-smoke transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 pt-1">{children}</div>
        </div>
      </div>
    </div>
  )
}

function Phrase({ es, en }) {
  return (
    <div className="flex justify-between items-start py-1.5 border-b border-border-light last:border-0">
      <span className="font-display text-[0.82rem] italic text-volcanic">{es}</span>
      <span className="text-[0.7rem] text-smoke text-right ml-3">{en}</span>
    </div>
  )
}

function Contact({ label, number }) {
  return (
    <div className="flex justify-between items-center py-1.5 border-b border-border-light last:border-0">
      <span className="text-[0.78rem] text-[#4a4a5a]">{label}</span>
      <span className="font-mono text-[0.68rem] text-volcanic font-medium">{number}</span>
    </div>
  )
}
