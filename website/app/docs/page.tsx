"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Book, Code, Rocket, Zap } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
  const sections = [
    {
      icon: Rocket,
      title: "Getting Started",
      description: "Learn how to use and deploy n8n workflows from this collection",
      items: [
        "What is n8n?",
        "Installing n8n",
        "Importing workflows",
        "Basic concepts"
      ]
    },
    {
      icon: Book,
      title: "Tutorials",
      description: "Step-by-step guides for common automation scenarios",
      items: [
        "Building your first workflow",
        "Connecting to APIs",
        "Data transformation",
        "Error handling"
      ]
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Technical documentation for developers",
      items: [
        "REST API endpoints",
        "Search workflows",
        "Filter by category",
        "Download workflows"
      ]
    },
    {
      icon: Zap,
      title: "Best Practices",
      description: "Tips and tricks for efficient workflow automation",
      items: [
        "Workflow organization",
        "Performance optimization",
        "Security considerations",
        "Debugging techniques"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-white">Documentation</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Knowledge Base
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about using and contributing to the n8n workflows collection
          </p>
        </div>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl mb-2">
                    {section.title}
                  </CardTitle>
                  <p className="text-gray-400 text-sm">{section.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Start Guide */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-12">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Quick Start Guide</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">1. Browse Workflows</h3>
              <p>
                Explore our collection of 2,057 workflows using the search and filter features.
                Find workflows by category, integration, or use case.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">2. Download</h3>
              <p>
                Click the download button on any workflow to get the JSON file.
                Each workflow is ready to import into your n8n instance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">3. Import to n8n</h3>
              <p>
                In your n8n instance, go to Workflows → Import from File and select the downloaded JSON.
                Configure any required credentials and activate the workflow.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">4. Customize</h3>
              <p>
                Modify the workflow to fit your specific needs. Add nodes, change integrations,
                or adjust the logic to match your use case.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">What is n8n?</h4>
              <p>
                n8n is a free and open-source workflow automation tool. It allows you to connect 
                different services and automate tasks without writing code.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Are these workflows free to use?</h4>
              <p>
                Yes! All workflows in this collection are open source and free to use, modify, and distribute.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Do I need n8n to use these workflows?</h4>
              <p>
                Yes, you need an n8n instance (self-hosted or cloud) to import and run these workflows.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Can I contribute my own workflows?</h4>
              <p>
                Absolutely! We welcome contributions. Check out our GitHub repository for contribution guidelines.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
