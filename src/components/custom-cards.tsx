import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  TrendingUp,
  Calendar,
  Clock,
  Eye,
  Star
} from "lucide-react";

// Stats Card Component
interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatsCard({ 
  title, 
  value, 
  description, 
  icon, 
  trend,
  className 
}: StatsCardProps) {
  return (
    <Card className={cn("hover:shadow-lg transition-shadow", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && (
          <div className="h-8 w-8 text-muted-foreground">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        {(description || trend) && (
          <div className="flex items-center gap-2 mt-2">
            {trend && (
              <div className={cn(
                "flex items-center gap-1 text-xs font-medium",
                trend.isPositive ? "text-green-600" : "text-red-600"
              )}>
                <TrendingUp className={cn(
                  "h-3 w-3",
                  !trend.isPositive && "rotate-180"
                )} />
                {Math.abs(trend.value)}%
              </div>
            )}
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Profile Card Component
interface ProfileCardProps {
  name: string;
  username: string;
  avatar?: string;
  bio?: string;
  stats?: {
    posts?: number;
    followers?: number;
    following?: number;
  };
  badges?: string[];
  onFollow?: () => void;
  isFollowing?: boolean;
  className?: string;
}

export function ProfileCard({
  name,
  username,
  avatar,
  bio,
  stats,
  badges,
  onFollow,
  isFollowing = false,
  className
}: ProfileCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="h-24 bg-gradient-to-r from-primary/20 to-primary/10" />
      <CardContent className="pt-0 pb-6">
        <div className="flex flex-col items-center -mt-12">
          <Avatar className="h-24 w-24 border-4 border-background">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="text-2xl">{name[0]}</AvatarFallback>
          </Avatar>
          
          <div className="mt-4 text-center">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm text-muted-foreground">@{username}</p>
          </div>

          {badges && badges.length > 0 && (
            <div className="flex gap-2 mt-3 flex-wrap justify-center">
              {badges.map((badge, index) => (
                <Badge key={index} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </div>
          )}

          {bio && (
            <p className="text-sm text-center text-muted-foreground mt-4 max-w-xs">
              {bio}
            </p>
          )}

          {stats && (
            <div className="flex gap-6 mt-4">
              {stats.posts !== undefined && (
                <div className="text-center">
                  <div className="font-bold">{stats.posts}</div>
                  <div className="text-xs text-muted-foreground">Posts</div>
                </div>
              )}
              {stats.followers !== undefined && (
                <div className="text-center">
                  <div className="font-bold">{stats.followers}</div>
                  <div className="text-xs text-muted-foreground">Followers</div>
                </div>
              )}
              {stats.following !== undefined && (
                <div className="text-center">
                  <div className="font-bold">{stats.following}</div>
                  <div className="text-xs text-muted-foreground">Following</div>
                </div>
              )}
            </div>
          )}

          {onFollow && (
            <Button 
              className="mt-4 w-full max-w-xs" 
              variant={isFollowing ? "outline" : "default"}
              onClick={onFollow}
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Social Post Card Component
interface SocialPostCardProps {
  author: {
    name: string;
    username: string;
    avatar?: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares?: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onBookmark?: () => void;
  className?: string;
}

export function SocialPostCard({
  author,
  content,
  image,
  timestamp,
  likes,
  comments,
  shares = 0,
  isLiked = false,
  isBookmarked = false,
  onLike,
  onComment,
  onShare,
  onBookmark,
  className
}: SocialPostCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold leading-none">{author.name}</p>
              <p className="text-sm text-muted-foreground">@{author.username}</p>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">{timestamp}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed">{content}</p>
        
        {image && (
          <div className="rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt="Post content" 
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </CardContent>

      <CardFooter className="border-t pt-4">
        <div className="flex items-center justify-between w-full">
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-2"
            onClick={onLike}
          >
            <Heart className={cn("h-4 w-4", isLiked && "fill-red-500 text-red-500")} />
            {likes}
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-2"
            onClick={onComment}
          >
            <MessageCircle className="h-4 w-4" />
            {comments}
          </Button>
          
          {shares > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="gap-2"
              onClick={onShare}
            >
              <Share2 className="h-4 w-4" />
              {shares}
            </Button>
          )}
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onBookmark}
          >
            <Bookmark className={cn("h-4 w-4", isBookmarked && "fill-current")} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

// Event Card Component
interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location?: string;
  image?: string;
  attendees?: number;
  maxAttendees?: number;
  tags?: string[];
  onRegister?: () => void;
  isRegistered?: boolean;
  className?: string;
}

export function EventCard({
  title,
  description,
  date,
  time,
  location,
  image,
  attendees,
  maxAttendees,
  tags,
  onRegister,
  isRegistered = false,
  className
}: EventCardProps) {
  return (
    <Card className={cn("overflow-hidden hover:shadow-lg transition-shadow", className)}>
      {image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          {tags && tags.length > 0 && (
            <Badge variant="secondary">{tags[0]}</Badge>
          )}
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{time}</span>
          </div>
          {location && (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">📍</span>
              <span>{location}</span>
            </div>
          )}
        </div>

        {attendees !== undefined && (
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                {attendees} {maxAttendees && `/ ${maxAttendees}`} attending
              </span>
              {maxAttendees && (
                <span className="text-muted-foreground">
                  {Math.round((attendees / maxAttendees) * 100)}%
                </span>
              )}
            </div>
            {maxAttendees && (
              <div className="w-full bg-secondary rounded-full h-2">
                <div 
                  className="bg-primary rounded-full h-2 transition-all"
                  style={{ width: `${(attendees / maxAttendees) * 100}%` }}
                />
              </div>
            )}
          </div>
        )}
      </CardContent>

      {onRegister && (
        <CardFooter>
          <Button 
            className="w-full" 
            onClick={onRegister}
            variant={isRegistered ? "outline" : "default"}
          >
            {isRegistered ? "Registered ✓" : "Register Now"}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

// Product Card Component
interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviews?: number;
  badge?: string;
  inStock?: boolean;
  onAddToCart?: () => void;
  onViewDetails?: () => void;
  className?: string;
}

export function ProductCard({
  name,
  description,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  badge,
  inStock = true,
  onAddToCart,
  onViewDetails,
  className
}: ProductCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className={cn("overflow-hidden hover:shadow-lg transition-all group", className)}>
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <Badge className="absolute top-3 left-3">{badge}</Badge>
        )}
        {discount > 0 && (
          <Badge className="absolute top-3 right-3" variant="destructive">
            -{discount}%
          </Badge>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <Badge variant="secondary" className="text-lg">Out of Stock</Badge>
          </div>
        )}
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="line-clamp-1 text-lg">{name}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {rating !== undefined && (
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                  )}
                />
              ))}
            </div>
            {reviews !== undefined && (
              <span className="text-sm text-muted-foreground">
                ({reviews})
              </span>
            )}
          </div>
        )}

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        {onAddToCart && (
          <Button 
            className="flex-1" 
            onClick={onAddToCart}
            disabled={!inStock}
          >
            Add to Cart
          </Button>
        )}
        {onViewDetails && (
          <Button 
            variant="outline" 
            onClick={onViewDetails}
          >
            <Eye className="h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
