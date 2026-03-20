"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTASection() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
          Be the first to never wonder{" "}
          <span className="text-primary">where to eat again</span>
        </h2>
        
        <p className="mt-5 text-lg text-muted-foreground max-w-lg mx-auto">
          Stop scrolling through options. Let AI find and book the perfect spot for you.
        </p>
        
        <Button 
          onClick={scrollToWaitlist}
          size="lg" 
          className="mt-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
        >
          Join Dinely
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
        
        <p className="mt-6 text-sm text-muted-foreground">
          Limited early access available
        </p>
      </div>
    </section>
  )
}
