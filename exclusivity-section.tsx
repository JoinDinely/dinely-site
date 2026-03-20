"use client"

import { Button } from "@/components/ui/button"
import { Zap, Users, MapPin } from "lucide-react"

export function ExclusivitySection() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Miami badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Currently live in Miami
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Early access is limited
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto">
            Be one of the first in Miami to experience AI-powered dining
          </p>

          {/* Progress indicator */}
          <div className="mt-10 max-w-sm mx-auto">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Spots filling up...</span>
              <span className="font-semibold text-foreground">73% claimed</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                style={{ width: '73%' }}
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Only <span className="font-semibold text-foreground">270</span> early access spots remaining
            </p>
          </div>

          {/* Feature highlights */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Priority Access</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Skip the public launch line
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Invite Friends</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Move up the waitlist faster
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">🎁</span>
              </div>
              <h3 className="font-semibold text-foreground">Exclusive Perks</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Early adopter benefits
              </p>
            </div>
          </div>

          <Button 
            onClick={scrollToWaitlist}
            size="lg"
            className="mt-10 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-lg shadow-primary/25"
          >
            Claim Your Spot
          </Button>
        </div>
      </div>
    </section>
  )
}
