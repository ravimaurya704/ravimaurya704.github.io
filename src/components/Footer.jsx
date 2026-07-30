import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
    </footer>
  );
}
