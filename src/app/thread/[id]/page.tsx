import { ForumHeader } from "@/components/forum-header";
import { Post } from "@/components/post";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { mockThreads } from "@/lib/mock-data";
import { ArrowLeft, Eye, MessageSquare } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ThreadPage({ params }: { params: { id: string } }) {
  const thread = mockThreads.find((t) => t.id === params.id);

  if (!thread) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <ForumHeader />

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Forum
          </Button>
        </Link>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{thread.category}</Badge>
              <span className="text-sm text-muted-foreground">•</span>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{thread.postCount} replies</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{thread.views} views</span>
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold">{thread.title}</h1>
          </div>

          <Separator />

          <div className="space-y-4">
            <Post post={thread.posts[0]} isOriginalPost={true} />
            
            {thread.posts.slice(1).map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>

          {!thread.isLocked && (
            <>
              <Separator />
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Reply to this thread</h3>
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Write your reply..."
                      className="min-h-[150px]"
                    />
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button>Post Reply</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {thread.isLocked && (
            <Card className="bg-muted">
              <CardContent className="p-6 text-center text-muted-foreground">
                🔒 This thread is locked. No new replies can be posted.
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
