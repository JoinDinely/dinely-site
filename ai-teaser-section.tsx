"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Lock } from "lucide-react"

export function AITeaserSection() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Meet your AI dining assistant
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Just ask. Dinely handles the rest.
          </p>
        </div>

        {/* Simulated chat preview */}
        <div className="relative max-w-lg mx-auto">
          <div className="bg-card border border-border rounded-3xl p-5 sm:p-6 shadow-xl">
            {/* Chat header */}
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">Dinely AI</h3>
                <p className="text-xs text-muted-foreground">Your personal concierge</p>
              </div>
            </div>

            {/* Chat messages */}
            <div className="space-y-4">
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%]">
                  <p className="text-sm">Where should I eat tonight?</p>
                </div>
              </div>

              {/* AI response */}
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                  <p className="text-sm text-foreground">
                    Found a perfect sushi spot nearby — want me to book it?
                  </p>
                </div>
              </div>

              {/* Quick action buttons (disabled preview) */}
              <div className="flex gap-2 flex-wrap">
                <div className="px-4 py-2 bg-secondary/60 text-muted-foreground rounded-full text-sm font-medium">
                  Yes, book it!
                </div>
                <div className="px-4 py-2 bg-secondary/60 text-muted-foreground rounded-full text-sm font-medium">
                  Show more options
                </div>
              </div>
            </div>

            {/* Locked input bar */}
            <div className="mt-6 flex gap-3 items-center">
              <div className="flex-1 bg-muted/50 rounded-full px-4 py-3 text-muted-foreground text-sm flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>Unlock in the app...</span>
              </div>
            </div>
          </div>

          {/* Unlock CTA */}
          <div className="mt-6 text-center">
            <Button 
              onClick={scrollToWaitlist}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-5 text-base font-semibold shadow-lg shadow-primary/25"
            >
              <Lock className="w-4 h-4 mr-2" />
              Unlock this in the app
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
