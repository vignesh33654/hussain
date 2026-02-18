import { ForumHeader } from "@/components/forum-header";
import { CategoryCard } from "@/components/category-card";
import { ThreadCard } from "@/components/thread-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockCategories, mockThreads } from "@/lib/mock-data";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const pinnedThreads = mockThreads.filter(t => t.isPinned);
  const recentThreads = mockThreads.filter(t => !t.isPinned);

  return (
    <div className="min-h-screen bg-background">
      <ForumHeader />
      
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="threads" className="space-y-6">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="threads">Threads</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>

          <TabsContent value="threads" className="space-y-6">
            {pinnedThreads.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">📌 Pinned Threads</h2>
                <div className="space-y-3">
                  {pinnedThreads.map((thread) => (
                    <ThreadCard key={thread.id} thread={thread} />
                  ))}
                </div>
                <Separator className="my-6" />
              </div>
            )}

            <div>
              <h2 className="text-2xl font-bold mb-4">Recent Threads</h2>
              <div className="space-y-3">
                {recentThreads.map((thread) => (
                  <ThreadCard key={thread.id} thread={thread} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="categories" className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockCategories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 WebForum. Built with Next.js and shadcn/ui</p>
        </div>
      </footer>
    </div>
  );
}
