"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Download, Filter, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Workflow {
  id: string;
  name: string;
  category: string;
  nodes: number;
  integrations: string[];
  filename: string;
}

export default function WorkflowsPage() {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, this would fetch from the API
    // For now, we'll use mock data
    setLoading(false);
    
    // Mock data - in production this would come from the API
    const mockWorkflows: Workflow[] = [
      {
        id: "1",
        name: "Slack to Email Notification",
        category: "Communication",
        nodes: 5,
        integrations: ["Slack", "Gmail"],
        filename: "slack_email_notification.json"
      },
      {
        id: "2",
        name: "Shopify Order Processing",
        category: "E-commerce",
        nodes: 8,
        integrations: ["Shopify", "PostgreSQL", "Slack"],
        filename: "shopify_order_processing.json"
      },
      // Add more mock workflows as needed
    ];
    
    setWorkflows(mockWorkflows);
  }, []);

  const categories = [
    "all",
    "Communication",
    "E-commerce",
    "CRM",
    "Data Processing",
    "Marketing",
    "Project Management"
  ];

  const filteredWorkflows = workflows.filter(workflow => {
    const matchesSearch = workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workflow.integrations.some(int => int.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || workflow.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            <h1 className="text-2xl font-bold text-white">Browse Workflows</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search workflows by name or integration..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="text-gray-400 w-5 h-5 flex-shrink-0" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-purple-600 hover:bg-purple-700" 
                  : "border-white/20 text-white hover:bg-white/10"
                }
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing <span className="text-white font-semibold">{filteredWorkflows.length}</span> workflows
          </p>
        </div>

        {/* Workflows Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="text-white text-xl">Loading workflows...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkflows.map((workflow) => (
              <Card
                key={workflow.id}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <CardHeader>
                  <CardTitle className="text-white text-lg mb-2">
                    {workflow.name}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded">
                      {workflow.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {workflow.nodes} nodes
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-2">Integrations:</div>
                    <div className="flex flex-wrap gap-2">
                      {workflow.integrations.map((integration, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded"
                        >
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredWorkflows.length === 0 && !loading && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No workflows found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="mt-4 bg-purple-600 hover:bg-purple-700"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
