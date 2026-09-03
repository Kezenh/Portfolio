export default function Footer() {
  return (
    <footer className="border-t-4 border-slate-700 p-4">
      <nav className="flex justify-start gap-6">
        <a href="https://github.com/Kezenh" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-slate-400">GitHub</a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-slate-400">LinkedIn &lt;-- A FAIRE</a>
        <a href="mailto:quentin.rampteau@gmail.com" className="transition-colors hover:text-slate-400">quentin.rampteau@gmail.com</a>
      </nav>
    </footer>
  );
}