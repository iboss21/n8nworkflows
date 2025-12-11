"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, ShoppingCart, Database, BarChart3, Mail, Calendar } from "lucide-react";
import Link from "next/link";

export function WorkflowShowcase() {
  const categories = [
    {
      icon: MessageSquare,
      name: "Communication & Messaging",
      count: 450,
      examples: ["Slack", "Telegram", "Discord", "WhatsApp"],
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: ShoppingCart,
      name: "E-commerce & Retail",
      count: 280,
      examples: ["Shopify", "WooCommerce", "PayPal", "Stripe"],
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: Database,
      name: "Data Processing & Analysis",
      count: 380,
      examples: ["Airtable", "PostgreSQL", "MongoDB", "Redis"],
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: BarChart3,
      name: "CRM & Sales",
      count: 220,
      examples: ["Salesforce", "HubSpot", "Pipedrive", "Zoho"],
      color: "from-orange-600 to-red-600",
    },
    {
      icon: Mail,
      name: "Email Automation",
      count: 320,
      examples: ["Gmail", "Outlook", "Mailchimp", "SendGrid"],
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: Calendar,
      name: "Scheduling & Planning",
      count: 180,
      examples: ["Google Calendar", "Calendly", "Notion", "Todoist"],
      color: "from-yellow-600 to-orange-600",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Browse workflows organized by use case and integration type
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl mb-2">
                    {category.name}
                  </CardTitle>
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r ${category.color} bg-clip-text">
                    {category.count}+ workflows
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/workflows">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              View All Categories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
