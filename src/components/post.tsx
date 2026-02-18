import { Post as PostType } from "@/types/forum";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Reply } from "lucide-react";

interface PostProps {
  post: PostType;
  isOriginalPost?: boolean;
}

export function Post({ post, isOriginalPost = false }: PostProps) {
  const timeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
      const interval = Math.floor(seconds / secondsInUnit);
      if (interval >= 1) {
        return `${interval} ${unit}${interval > 1 ? "s" : ""} ago`;
      }
    }

    return "just now";
  };

  return (
    <Card className={isOriginalPost ? "border-primary/50" : ""}>
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-2 min-w-[80px]">
            <Avatar className="h-12 w-12">
              <AvatarImage src={post.author.avatar} alt={post.author.username} />
              <AvatarFallback>{post.author.username[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <p className="font-semibold text-sm">{post.author.username}</p>
              <p className="text-xs text-muted-foreground">{post.author.postCount} posts</p>
              {isOriginalPost && (
                <Badge variant="default" className="mt-1 text-xs">
                  OP
                </Badge>
              )}
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="text-sm text-muted-foreground">
              {timeAgo(post.createdAt)}
            </div>
            
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <p className="text-foreground leading-relaxed">{post.content}</p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <Button variant="ghost" size="sm" className="gap-2">
                <Heart className="h-4 w-4" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Reply className="h-4 w-4" />
                Reply
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
