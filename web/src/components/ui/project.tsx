import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const activities = [
  {
    title: "Watching Law & Order: SVU 👩🏻‍⚖️",
    description:
      "Fun fact: I'm currently up to date on all 27 seasons of the show\nFavorite episode: 'Ghost' - Season 6, Episode 16",
  },
   {
    title: "Getting Boba🧋",
    description:
      "I am a boba consumer.\nFun facts: I've made my own boba from scratch once and want to visit all 50 states for boba (currently at 8/50)",
  },
  {
    title: "Exercise 🥋",
    description:
      "Jiu-jitsu and pilates are what I've been into recently. Did jiu jitsu for 2 years, took a long break and am back.",
  },
  {
    title: "Cooking🍳and Baking 🍰",
    description:
      "Favorite thing to cook: Vietnamese savory crepe (Banh xeo)\nFavorite thing to bake: Strawberry Cheesecake",
  },
];

export default function BeyondSchoolSection() {
  return (
    <section className="w-full py-10 px-6 bg-blue-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-semibold font-mono underline mb-6 text-center">
        Beyond School📚
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        
                <CardContent className="p-6 flex flex-col gap-2 font-mono">
                  <h3 className="lowercase text-xl font-semibold ">{item.title}</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
