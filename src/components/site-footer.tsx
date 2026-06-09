export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="container-page flex flex-col items-start justify-between gap-4 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Sayan Samanta. Made as part of my journey learning AI.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/sayanrup" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/sayan-samanta-b92792131" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
