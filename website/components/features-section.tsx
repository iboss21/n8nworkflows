"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Download, Sparkles, Code2, Workflow } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "Instant Search",
      description: "Find exactly what you need with our powerful full-text search powered by SQLite FTS5. Search by name, integration, or category.",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: Filter,
      title: "Smart Filtering",
      description: "Browse by categories like Communication, CRM, Data Processing, E-commerce, and more. Filter by complexity and trigger type.",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Download,
      title: "One-Click Deploy",
      description: "Download any workflow as JSON and import directly into your n8n instance. No manual setup required.",
      gradient: "from-green-600 to-emerald-600",
    },
    {
      icon: Sparkles,
      title: "Quality Assured",
      description: "Every workflow is analyzed, categorized, and validated. Get professional-grade automation templates.",
      gradient: "from-yellow-600 to-orange-600",
    },
    {
      icon: Code2,
      title: "Developer Friendly",
      description: "Built with modern tech stack: Next.js, Python API, and SQLite. Easy to extend and customize.",
      gradient: "from-red-600 to-pink-600",
    },
    {
      icon: Workflow,
      title: "Visual Diagrams",
      description: "View Mermaid diagrams of workflow structures. Understand complex automations at a glance.",
      gradient: "from-indigo-600 to-purple-600",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-400">
            Powerful features to accelerate your automation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
