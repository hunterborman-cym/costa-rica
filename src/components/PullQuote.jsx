export default function PullQuote({ text }) {
  return (
    <blockquote className="my-4 pl-4 border-l-[3px] border-coral">
      <p className="font-display text-[1.15rem] italic text-volcanic/80 leading-relaxed">
        {text}
      </p>
    </blockquote>
  )
}
