import { Clock } from "lucide-react";

interface Props {
  onDone: () => void;
  onHistory: () => void;
}

const Confirmation = ({ onDone, onHistory }: Props) => {
  return (
    <div className="animate-fade-slide-in flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="text-6xl mb-6">🌷</div>

      <h1 className="font-display text-3xl font-bold text-foreground tracking-tight mb-4">
        Vibe logged
      </h1>

      <p className="text-muted-foreground text-base leading-relaxed max-w-xs mb-12">
        Thank you for pausing and noticing. Even this small check-in matters.
      </p>

      <div className="max-w-sm w-full space-y-3">
        <button className="vibe-button w-full" onClick={onDone}>
          Done
        </button>

        <button
          onClick={onHistory}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-[28px] text-base font-medium transition-all duration-200 hover:scale-[1.01]"
          style={{
            background: "hsl(var(--muted))",
            color: "hsl(var(--muted-foreground))",
            border: "1.5px solid hsl(var(--primary) / 0.25)",
          }}
        >
          <Clock className="w-4 h-4" />
          View History
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
