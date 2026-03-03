import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { FileText } from "lucide-react";

const poemsData = [
  {
    id: 1,
    title: "Running with the Wind",
    topic: "Friendship",
    description: "A poem about a past friendship",
    pdfUrl: "/poems/running-with-the-wind.pdf",
    coverUrl: "/poem-covers/running-with-the-wind.png",
  },
  {
    id: 2,
    title: "Not MY cup of tea",
    topic: "Self",
    description: "Acceptance",
    pdfUrl: "/poems/not-my-cup.pdf",
    coverUrl: "/poem-covers/not-my-cup.png",
  },
];

const topics = ["All", "Self", "Friendship", "Miscell"];

export default function PoemOrganizer() {
  const [selectedTopic, setSelectedTopic] = useState("All");

  const filteredPoems =
    selectedTopic === "All"
      ? poemsData
      : poemsData.filter((p) => p.topic === selectedTopic);

  const completedDays = poemsData.length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-3xl sm:text-4xl font-semibold font-mono tracking-tight underline">poems</h2>
        <p className="text-sm font-mono">
          {completedDays} poems written/on this website • Currently trying to write one poem a week in 2026
        </p>
      </div>

      {/* Topic Filter */}
      <div className="flex flex-wrap gap-2 font-mono">
        {topics.map((topic) => (
          <Button
            key={topic}
            variant={selectedTopic === topic ? "default" : "outline"}
            onClick={() => setSelectedTopic(topic)}
            className="text-sm px-3 py-1 h-auto"
          >
            {topic}
          </Button>
        ))}
      </div>

      {/* Poems Grid */}
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredPoems.map((poem) => (
            <motion.div
              key={poem.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Card className="overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition">
                {/* Cover */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={poem.coverUrl}
                    alt={`${poem.title} cover`}
                    className="h-full w-full object-cover hover:scale-105 transition-transform"
                  />
                </div>

                <CardContent className="p-3 sm:p-4 space-y-1 sm:space-y-2 font-mono">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {poem.topic}
                  </p>
                  <h3 className="text-sm sm:text-lg font-medium leading-tight">{poem.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                    {poem.description}
                  </p>
                  <a
                    href={poem.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-primary hover:underline"
                  >
                    <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                    Read full poem
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}