"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Check, Copy, Share2, Users } from "lucide-react"

const cities = [
  { name: "New York", status: "coming" },
  { name: "Los Angeles", status: "coming" },
  { name: "Chicago", status: "coming" },
  { name: "Austin", status: "coming" },
]

export function WaitlistSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  
  // Simulated referral link
  const referralLink = "dinely.app/invite/abc123"
  const referralCount = 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setSubmitted(true)
    }
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://${referralLink}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: 'Join Dinely',
        text: 'Get early access to Dinely - the AI that finds and books restaurants for you!',
        url: `https://${referralLink}`,
      })
    } else {
      handleCopyLink()
    }
  }

  return (
    <section id="waitlist" className="py-16 lg:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          {!submitted ? (
            <>
              {/* Live city badge */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">
                    Currently live in Miami
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                  Get early access
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Be the first to experience AI-powered dining
                </p>
              </div>

              {/* Waitlist form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-14 px-5 rounded-xl bg-background border-border text-base"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-14 px-5 rounded-xl bg-background border-border text-base"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone number (optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-14 px-5 rounded-xl bg-background border-border text-base"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-lg font-semibold shadow-lg shadow-primary/25"
                >
                  Get Early Access
                </Button>
              </form>

              {/* Coming soon cities */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Not in Miami? We're expanding soon
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {cities.map((city) => (
                    <div 
                      key={city.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary rounded-full text-sm"
                    >
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-foreground">{city.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Confirmation + Referral screen */
            <div className="text-center">
              {/* Success message */}
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {"You're in!"}
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                {"We'll notify you when it's your turn"}
              </p>

              {/* Referral section */}
              <div className="mt-8 bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Move up the waitlist</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-5">
                  Invite friends to jump ahead in line
                </p>

                {/* Referral link */}
                <div className="flex gap-2">
                  <div className="flex-1 bg-muted rounded-xl px-4 py-3 text-sm text-foreground truncate">
                    {referralLink}
                  </div>
                  <Button
                    onClick={handleCopyLink}
                    variant="outline"
                    className="rounded-xl px-4"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Share button */}
                <Button
                  onClick={handleShare}
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12 font-semibold"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share with friends
                </Button>

                {/* Referral count */}
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Friends invited: <span className="font-semibold text-foreground">{referralCount}</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
