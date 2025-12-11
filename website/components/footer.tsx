"use client";

import { Github, Twitter, Mail, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const links = {
    product: [
      { name: "Workflows", href: "/workflows" },
      { name: "Documentation", href: "/docs" },
      { name: "Categories", href: "/workflows#categories" },
      { name: "API", href: "/docs/api" },
    ],
    resources: [
      { name: "Getting Started", href: "/docs/getting-started" },
      { name: "Tutorials", href: "/docs/tutorials" },
      { name: "Best Practices", href: "/docs/best-practices" },
      { name: "FAQ", href: "/docs/faq" },
    ],
    community: [
      { name: "GitHub", href: "https://github.com/iboss21/n8nworkflows" },
      { name: "Discussions", href: "https://github.com/iboss21/n8nworkflows/discussions" },
      { name: "Issues", href: "https://github.com/iboss21/n8nworkflows/issues" },
      { name: "Contribute", href: "https://github.com/iboss21/n8nworkflows/blob/main/CONTRIBUTING.md" },
    ],
  };

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              n8n Workflows
            </h3>
            <p className="text-gray-400 mb-4">
              The world's most comprehensive collection of n8n workflow automations.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/iboss21/n8nworkflows"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              {links.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 n8n Workflows Collection. Open source under MIT License.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by the community
          </p>
        </div>
      </div>
    </footer>
  );
}
