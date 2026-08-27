export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center text-xs text-cream/40 border-t border-mutedGold/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Darsheel Sharma. All rights reserved.</p>
        <p className="uppercase tracking-widest font-mono">Jaipur Royal Aesthetic</p>
      </div>
    </footer>
  );
}
