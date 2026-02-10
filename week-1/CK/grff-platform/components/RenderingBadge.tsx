type RenderingType = "SSG" | "SSR" | "CSR" | "ISR";

interface RenderingBadgeProps {
  type: RenderingType;
  explanation: string;
}

export default function RenderingBadge({
  type,
  explanation,
}: RenderingBadgeProps) {
  const colors = {
    SSG: "bg-emerald-50 border-emerald-400 text-emerald-900",
    SSR: "bg-sky-50 border-sky-400 text-sky-900",
    CSR: "bg-violet-50 border-violet-400 text-violet-900",
    ISR: "bg-amber-50 border-amber-400 text-amber-900",
  };

  return (
    <div className={`border-2 rounded-lg p-6 mb-6 ${colors[type]}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl font-bold">{type}</span>
        <span className="text-sm font-medium opacity-90">
          Rendering Strategy
        </span>
      </div>
      <p className="text-sm leading-relaxed text-gray-900">{explanation}</p>
    </div>
  );
}
