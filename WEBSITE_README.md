# 🚀 n8n Workflows Platform - Complete Guide

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue)](https://www.docker.com/)

A complete platform featuring 2,057+ professional n8n workflows with a modern landing page, knowledge base, and powerful search functionality.

## 🌟 What's New

### Modern Landing Page & Knowledge Base
We've added a beautiful, production-ready landing page and documentation system built with Next.js 14!

**Features:**
- 🎨 Stunning modern UI with gradient designs and animations
- 📚 Comprehensive documentation and tutorials
- 🔍 Workflow browser with search and filtering
- 📱 Fully responsive mobile design
- 🚀 Easy deployment with Docker and Coolify support

**See the Screenshots:**
- [Landing Page](https://github.com/user-attachments/assets/f7a7e166-00cb-42f1-9ff3-a03a67804871)
- [Documentation](https://github.com/user-attachments/assets/1c1acdc1-7e6d-47fe-9ce3-2aa06908ccb0)

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Features](#features)
- [Architecture](#architecture)
- [Deployment](#deployment)
- [Development](#development)
- [Documentation](#documentation)
- [Contributing](#contributing)

## ⚡ Quick Start

### Option 1: Run the Full Platform (Frontend + Backend)

```bash
# Clone the repository
git clone https://github.com/iboss21/n8nworkflows.git
cd n8nworkflows

# Start everything with Docker Compose
docker-compose -f docker-compose.frontend.yml up -d

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
```

### Option 2: Development Mode

```bash
# Terminal 1 - Start the backend API
pip install -r requirements.txt
python run.py

# Terminal 2 - Start the frontend
cd website
npm install
npm run dev

# Frontend: http://localhost:3000
# Backend: http://localhost:8000
```

## 🎯 Features

### Landing Page & UI
- **Modern Design**: Sleek, professional interface with gradient backgrounds
- **Hero Section**: Engaging copy with clear calls-to-action
- **Statistics Dashboard**: Real-time stats (2,057 workflows, 365 integrations, 29K+ nodes)
- **Feature Showcase**: Highlighted features with beautiful icons
- **Category Browser**: Visual cards for all workflow categories
- **Responsive**: Perfect on desktop, tablet, and mobile

### Workflow Collection
- **2,057 Professional Workflows**: Curated and categorized
- **365 Unique Integrations**: All major platforms and services
- **29,445 Total Nodes**: Production-ready automation components
- **Smart Categorization**: Organized by use case and service type
- **Quality Assurance**: All workflows analyzed and validated

### Search & Discovery
- **Full-Text Search**: Powered by SQLite FTS5
- **Advanced Filtering**: By category, integration, trigger type
- **Instant Results**: Sub-100ms response times
- **Smart Suggestions**: Intelligent search recommendations

### Documentation
- **Getting Started Guide**: Step-by-step tutorials
- **API Reference**: Complete REST API documentation
- **Best Practices**: Tips for workflow optimization
- **FAQ**: Common questions answered
- **Video Tutorials**: Coming soon!

## 🏗️ Architecture

```
n8nworkflows/
├── website/                    # Next.js 14 Frontend
│   ├── app/                   # App router pages
│   │   ├── page.tsx          # Landing page
│   │   ├── workflows/        # Workflow browser
│   │   └── docs/             # Documentation
│   ├── components/           # React components
│   └── lib/                  # Utilities & API client
│
├── workflows/                 # 2,057 JSON workflow files
├── Documentation/            # Generated documentation
│
├── api_server.py            # Python FastAPI backend
├── workflow_db.py           # Database management
├── Dockerfile               # Backend Docker config
├── Dockerfile.frontend      # Frontend Docker config
└── docker-compose.frontend.yml  # Full-stack deployment
```

## 🚀 Deployment

### Deploy to Coolify (Recommended)

Coolify provides the easiest deployment experience with automatic SSL and monitoring.

**Quick Deploy:**

1. Open your Coolify dashboard
2. Create new application → Docker Compose
3. Point to this repository
4. Select `docker-compose.frontend.yml`
5. Set environment variables
6. Deploy!

**Detailed Guide:** See [COOLIFY_DEPLOYMENT.md](COOLIFY_DEPLOYMENT.md)

### Deploy to VPS

```bash
# On your VPS
git clone https://github.com/iboss21/n8nworkflows.git
cd n8nworkflows

# Start with Docker Compose
docker-compose -f docker-compose.frontend.yml up -d

# Configure Nginx (optional)
# See COOLIFY_DEPLOYMENT.md for Nginx configuration
```

### Deploy Frontend to Vercel

```bash
cd website
vercel
```

## 💻 Development

### Backend (Python)

```bash
# Install dependencies
pip install -r requirements.txt

# Initialize database
python workflow_db.py

# Start development server
python run.py

# API available at http://localhost:8000
```

### Frontend (Next.js)

```bash
# Install dependencies
cd website
npm install

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

### Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

**Backend:**
- Python 3.11+
- FastAPI
- SQLite with FTS5
- Pydantic

## 📚 Documentation

### For Users
- **[Getting Started](website/README.md)** - Quick start guide
- **[Deployment Guide](COOLIFY_DEPLOYMENT.md)** - Deploy to Coolify or VPS
- **[API Documentation](docs/api-endpoints.md)** - REST API reference

### For Developers
- **[Contributing Guide](CONTRIBUTING.md)** - How to contribute
- **[Architecture](docs/architecture.md)** - System design
- **[Development Setup](docs/development.md)** - Local development

### Workflow Documentation
- **[Browse Online](https://yourdomain.com/workflows)** - Search all workflows
- **[Category Guide](Documentation/)** - Workflows by category
- **[Integration List](docs/integrations.md)** - Supported services

## 🔧 Configuration

### Environment Variables

**Frontend (`.env.local` in website/):**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**Backend (`.env` in root):**
```env
PORT=8000
HOST=0.0.0.0
DATABASE_PATH=./data/workflows.db
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Add Workflows**: Submit your n8n workflows
2. **Improve Docs**: Enhance documentation and tutorials
3. **Report Bugs**: Open issues for any problems
4. **Suggest Features**: Share your ideas

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📊 Statistics

- **2,057 Workflows** - Production-ready automations
- **365 Integrations** - Major platforms supported
- **29,445 Nodes** - Total automation components
- **189 Categories** - Organized by service
- **15 Use Cases** - Communication, CRM, E-commerce, etc.

## 📖 Use Cases

The platform includes workflows for:

- 💬 **Communication & Messaging**: Slack, Discord, Telegram, WhatsApp
- 🛒 **E-commerce & Retail**: Shopify, WooCommerce, PayPal, Stripe
- 📊 **CRM & Sales**: Salesforce, HubSpot, Pipedrive, Zoho
- 📧 **Email Automation**: Gmail, Outlook, Mailchimp, SendGrid
- 📅 **Scheduling**: Google Calendar, Calendly, Notion, Todoist
- 💾 **Data Processing**: Airtable, PostgreSQL, MongoDB, Redis
- 📈 **Analytics**: Google Analytics, Mixpanel, Amplitude
- 🎨 **Creative**: Figma, Canva, Adobe Creative Cloud
- 🔒 **Security**: 2FA, OAuth, API authentication
- 🤖 **AI/ML**: OpenAI, Anthropic, Google AI

## 🌐 Community

- **GitHub Discussions**: Ask questions and share ideas
- **Issues**: Report bugs and request features
- **Pull Requests**: Contribute code and workflows
- **Discord**: Join our community (coming soon!)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- n8n team for creating an amazing automation platform
- All contributors who've shared their workflows
- The open-source community for inspiration and support

## 📞 Support

- **Documentation**: Check our [docs](website/app/docs/page.tsx)
- **Issues**: Open a [GitHub issue](https://github.com/iboss21/n8nworkflows/issues)
- **Discussions**: Join [GitHub Discussions](https://github.com/iboss21/n8nworkflows/discussions)

---

Made with ❤️ by the community. **Star this repo** if you find it useful!
