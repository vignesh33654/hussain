import { Category } from "@/types/forum";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className="text-4xl">{category.icon}</div>
          <div className="flex-1">
            <CardTitle className="text-xl">{category.name}</CardTitle>
            <CardDescription className="mt-1">{category.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MessageSquare className="h-4 w-4" />
          <span>{category.threadCount.toLocaleString()} threads</span>
        </div>
      </CardContent>
    </Card>
  );
}
