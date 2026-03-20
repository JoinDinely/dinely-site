"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content - optimized for mobile first */}
          <div className="text-center lg:text-left">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                Launching in Miami - Limited early access
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Stop scrolling.{" "}
              <span className="text-primary">Start eating.</span>
            </h1>
            
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Dinely is an AI that finds and books the perfect restaurant for you instantly.
            </p>
            
            {/* CTAs - prominent above the fold */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToWaitlist}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToWaitlist}
                className="rounded-full px-8 py-6 text-lg font-semibold border-2 hover:bg-secondary transition-all"
              >
                Join the Waitlist
              </Button>
            </div>
            
            </div>
          
          {/* Right - iPhone mockup with AI chat */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-[260px] sm:w-[300px] h-[540px] sm:h-[620px] bg-foreground rounded-[2.5rem] p-2.5 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-background rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="h-10 bg-background flex items-center justify-center">
                    <div className="w-20 h-5 bg-foreground rounded-full" />
                  </div>
                  
                  {/* App content */}
                  <div className="px-4 py-3">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="font-semibold text-foreground text-sm">Dinely AI</span>
                    </div>
                    
                    {/* Chat bubbles */}
                    <div className="space-y-3">
                      <div className="flex justify-end">
                        <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md px-4 py-2.5 max-w-[180px]">
                          <p className="text-sm">Where should I eat tonight?</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-start">
                        <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[200px]">
                          <p className="text-sm text-foreground">Found a perfect sushi spot nearby — want me to book it?</p>
                        </div>
                      </div>
                      
                      {/* Restaurant card */}
                      <div className="bg-card border border-border rounded-xl p-3 shadow-sm">
                        <div className="w-full h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg mb-2 flex items-center justify-center">
                          <span className="text-2xl">🍣</span>
                        </div>
                        <h4 className="font-semibold text-foreground text-sm">Zuma Miami</h4>
                        <p className="text-xs text-muted-foreground">Japanese • $$$$ • 0.3mi</p>
                        <div className="w-full mt-2 bg-primary/10 text-primary rounded-lg py-2 text-center text-xs font-semibold">
                          Available at 7:30 PM
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md px-4 py-2.5">
                          <p className="text-sm">Yes, book it!</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-start">
                        <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[200px]">
                          <p className="text-sm text-foreground">Done! Your table is confirmed for 7:30 PM.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
