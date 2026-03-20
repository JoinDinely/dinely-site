"use client"

import { Button } from "@/components/ui/button"

export function Navbar() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-bold text-foreground">Dinely</span>
          </div>

          <Button 
            onClick={scrollToWaitlist}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 text-sm font-semibold"
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </nav>
  )
}
