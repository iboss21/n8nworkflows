"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Zap, Globe, Shield } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Zap,
      value: "2,057",
      label: "Total Workflows",
      description: "Professionally organized and categorized",
      color: "text-yellow-400",
    },
    {
      icon: Globe,
      value: "365",
      label: "Integrations",
      description: "Popular platforms and services",
      color: "text-blue-400",
    },
    {
      icon: TrendingUp,
      value: "29,445",
      label: "Total Nodes",
      description: "Production-ready automation steps",
      color: "text-green-400",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Open Source",
      description: "Free to use and modify",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Automation Experts
          </h2>
          <p className="text-xl text-gray-400">
            The most comprehensive n8n workflow collection on the internet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <Icon className={`w-10 h-10 ${stat.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-300 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
