export default function Logo({ className = "" }) {
  return (
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 font-mono text-sm font-bold text-white shadow-sm ${className}`}
      aria-hidden="true"
    >
      RM
    </span>
  );
}
