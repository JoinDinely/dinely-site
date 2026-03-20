import { Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-10 bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Brand */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-bold text-foreground">Dinely</span>
          </div>
          
          <p className="text-muted-foreground text-sm max-w-xs">
            Your AI-powered restaurant concierge
          </p>
          
          {/* Social links */}
          <div className="flex gap-3 mt-5">
            <a 
              href="#" 
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-foreground" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-foreground" />
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>

          <div className="mt-8 pt-6 border-t border-border w-full">
            <p className="text-sm text-muted-foreground">
              © 2026 Dinely. Made in Miami
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
