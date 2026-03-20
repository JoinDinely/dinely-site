"use client"

import { Heart, Sparkles, Play } from "lucide-react"

const feedItems = [
  {
    id: 1,
    restaurant: "Carbone Miami",
    caption: "AI picked this spot",
    likes: "24.5K",
    emoji: "🍝",
    gradient: "from-orange-100 to-red-100",
  },
  {
    id: 2,
    restaurant: "Zuma",
    caption: "Perfect for date night",
    likes: "18.2K",
    emoji: "🍣",
    gradient: "from-rose-100 to-pink-100",
  },
  {
    id: 3,
    restaurant: "Cecconi's",
    caption: "AI picked this spot",
    likes: "31.8K",
    emoji: "🧀",
    gradient: "from-amber-100 to-orange-100",
  },
  {
    id: 4,
    restaurant: "KYU Miami",
    caption: "Hidden gem discovery",
    likes: "15.7K",
    emoji: "🥬",
    gradient: "from-green-100 to-emerald-100",
  },
]

export function SocialFeedSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Social Discovery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            See what others are discovering
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
            Join the first users discovering where to eat with Dinely
          </p>
        </div>

        {/* TikTok-style scrolling cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {feedItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[240px] sm:w-[280px] snap-center"
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                {/* Video-style preview */}
                <div className={`h-[320px] sm:h-[360px] bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
                  <span className="text-7xl sm:text-8xl">{item.emoji}</span>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-background/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg opacity-80">
                      <Play className="w-6 h-6 text-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* AI picked badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 bg-background/90 backdrop-blur rounded-full">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-foreground">{item.caption}</span>
                  </div>
                  
                  {/* Like button */}
                  <div className="absolute right-3 bottom-3">
                    <div className="w-10 h-10 bg-background/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                {/* Card content */}
                <div className="p-4">
                  <h3 className="font-bold text-foreground">{item.restaurant}</h3>
                  <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                    <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
                    <span>{item.likes} likes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
