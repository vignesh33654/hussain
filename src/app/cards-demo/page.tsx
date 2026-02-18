"use client";

import { ForumHeader } from "@/components/forum-header";
import { 
  StatsCard, 
  ProfileCard, 
  SocialPostCard, 
  EventCard, 
  ProductCard 
} from "@/components/custom-cards";
import { Separator } from "@/components/ui/separator";
import { Users, MessageSquare, TrendingUp, Activity } from "lucide-react";

export default function CardsDemo() {
  return (
    <div className="min-h-screen bg-background">
      <ForumHeader />

      <main className="container mx-auto px-4 py-8 space-y-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Custom Card Components</h1>
          <p className="text-muted-foreground">
            A collection of reusable card components built with shadcn/ui
          </p>
        </div>

        <Separator />

        {/* Stats Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Stats Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Total Users"
              value="12,345"
              description="from last month"
              icon={<Users />}
              trend={{ value: 12.5, isPositive: true }}
            />
            <StatsCard
              title="Messages"
              value="8,523"
              description="from last month"
              icon={<MessageSquare />}
              trend={{ value: 5.3, isPositive: true }}
            />
            <StatsCard
              title="Engagement"
              value="89.2%"
              description="from last month"
              icon={<TrendingUp />}
              trend={{ value: 2.1, isPositive: false }}
            />
            <StatsCard
              title="Active Now"
              value="2,341"
              description="online users"
              icon={<Activity />}
            />
          </div>
        </section>

        <Separator />

        {/* Profile Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Profile Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProfileCard
              name="Sarah Johnson"
              username="sarahj"
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
              bio="Full-stack developer passionate about creating beautiful web experiences."
              stats={{
                posts: 234,
                followers: 1523,
                following: 432
              }}
              badges={["Pro", "Verified"]}
              onFollow={() => console.log("Follow clicked")}
              isFollowing={false}
            />
            <ProfileCard
              name="Mike Chen"
              username="mikechen"
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
              bio="Designer & Creative Director. Making the web more beautiful, one pixel at a time."
              stats={{
                posts: 567,
                followers: 3421,
                following: 289
              }}
              badges={["Creator", "Premium"]}
              onFollow={() => console.log("Follow clicked")}
              isFollowing={true}
            />
            <ProfileCard
              name="Alex Rivera"
              username="alexr"
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
              bio="Tech enthusiast and community builder. Coffee addict ☕"
              stats={{
                posts: 89,
                followers: 892,
                following: 156
              }}
              badges={["Member"]}
              onFollow={() => console.log("Follow clicked")}
            />
          </div>
        </section>

        <Separator />

        {/* Social Post Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Social Post Cards</h2>
          <div className="max-w-2xl space-y-4">
            <SocialPostCard
              author={{
                name: "Emma Wilson",
                username: "emmaw",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
              }}
              content="Just launched my new portfolio website! 🚀 Built with Next.js 14, TypeScript, and Tailwind CSS. The performance improvements are incredible. Check it out and let me know what you think!"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
              timestamp="2 hours ago"
              likes={156}
              comments={23}
              shares={12}
              isLiked={false}
              onLike={() => console.log("Liked")}
              onComment={() => console.log("Comment")}
              onShare={() => console.log("Share")}
              onBookmark={() => console.log("Bookmark")}
            />
            <SocialPostCard
              author={{
                name: "David Park",
                username: "davidp",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
              }}
              content="Hot take: The best way to learn web development is by building real projects. Tutorials are great, but nothing beats hands-on experience. What's your learning approach? 💭"
              timestamp="5 hours ago"
              likes={89}
              comments={45}
              shares={8}
              isLiked={true}
              isBookmarked={true}
              onLike={() => console.log("Liked")}
              onComment={() => console.log("Comment")}
              onShare={() => console.log("Share")}
              onBookmark={() => console.log("Bookmark")}
            />
          </div>
        </section>

        <Separator />

        {/* Event Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Event Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              title="Next.js Conference 2024"
              description="Join us for a full day of Next.js talks, workshops, and networking with the community."
              date="March 25, 2024"
              time="9:00 AM - 6:00 PM PST"
              location="San Francisco, CA"
              image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop"
              attendees={234}
              maxAttendees={500}
              tags={["Conference", "Tech"]}
              onRegister={() => console.log("Register")}
              isRegistered={false}
            />
            <EventCard
              title="Web Design Workshop"
              description="Learn modern web design principles and create stunning interfaces with Figma and CSS."
              date="April 10, 2024"
              time="2:00 PM - 5:00 PM EST"
              location="Online"
              image="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop"
              attendees={156}
              maxAttendees={200}
              tags={["Workshop", "Design"]}
              onRegister={() => console.log("Register")}
              isRegistered={true}
            />
            <EventCard
              title="TypeScript Masterclass"
              description="Deep dive into advanced TypeScript patterns and best practices for enterprise applications."
              date="April 18, 2024"
              time="1:00 PM - 4:00 PM GMT"
              location="London, UK"
              image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop"
              attendees={89}
              maxAttendees={100}
              tags={["Masterclass"]}
              onRegister={() => console.log("Register")}
            />
          </div>
        </section>

        <Separator />

        {/* Product Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Product Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
              name="Premium Headphones"
              description="Wireless noise-cancelling headphones with superior sound quality"
              price={199.99}
              originalPrice={299.99}
              image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop"
              rating={4.5}
              reviews={328}
              badge="Best Seller"
              inStock={true}
              onAddToCart={() => console.log("Add to cart")}
              onViewDetails={() => console.log("View details")}
            />
            <ProductCard
              name="Smart Watch Pro"
              description="Track your fitness and stay connected with this advanced smartwatch"
              price={399.99}
              image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop"
              rating={4.8}
              reviews={521}
              badge="New"
              inStock={true}
              onAddToCart={() => console.log("Add to cart")}
              onViewDetails={() => console.log("View details")}
            />
            <ProductCard
              name="Laptop Stand"
              description="Ergonomic aluminum laptop stand for better posture"
              price={49.99}
              originalPrice={79.99}
              image="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop"
              rating={4.3}
              reviews={156}
              inStock={true}
              onAddToCart={() => console.log("Add to cart")}
              onViewDetails={() => console.log("View details")}
            />
            <ProductCard
              name="Mechanical Keyboard"
              description="RGB backlit mechanical keyboard for gaming and typing"
              price={129.99}
              image="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop"
              rating={4.7}
              reviews={892}
              badge="Popular"
              inStock={false}
              onAddToCart={() => console.log("Add to cart")}
              onViewDetails={() => console.log("View details")}
            />
          </div>
        </section>
      </main>

      <footer className="border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Custom Card Components - Built with shadcn/ui</p>
        </div>
      </footer>
    </div>
  );
}
