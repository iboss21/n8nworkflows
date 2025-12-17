# ⚡ N8N Workflow Collection & Documentation

> **🎉 NEW: Enhanced Copy & Paste Dashboard!**
>
> **Browse, search, and copy 2,057+ workflows with one click!**
> 
> - 📋 **One-Click Copy** - Copy workflow JSON directly to clipboard
> - 🔍 **Smart Search** - Find workflows by name, integration, or keyword  
> - 🎯 **Advanced Filters** - Filter by trigger, complexity, and category
> - 💾 **Easy Download** - Save workflows as JSON files
> - 🌙 **Dark Mode** - Eye-friendly interface
> 
> **[📖 Read Workflow Catalog](WORKFLOWS_README.md)** | **[🎯 Dashboard Usage Guide](DASHBOARD_USAGE_GUIDE.md)**

---

## 🚀 Quick Start - 3 Simple Steps

### Step 1: Start the Dashboard

```bash
git clone https://github.com/iboss21/n8nworkflows.git
cd n8nworkflows
pip install -r requirements.txt
python run.py
```

### Step 2: Browse & Search

Open http://localhost:8000 in your browser:
- 🔍 Search for workflows by keyword
- 🎛️ Filter by trigger type, complexity, or category
- 👁️ Preview workflow details

### Step 3: Copy & Paste

1. Click **"📋 Copy JSON"** on any workflow
2. Open your n8n instance
3. Paste (Ctrl+V / Cmd+V) 
4. Update credentials and activate!

**That's it!** Your workflow is ready to use.

---

## 📚 Documentation

### For Users
- **[📖 Workflow Catalog](WORKFLOWS_README.md)** - Browse 2,057+ workflows organized by category
- **[🎯 Dashboard Usage Guide](DASHBOARD_USAGE_GUIDE.md)** - Complete guide to finding and copying workflows
- **[🌐 Online Dashboard](http://localhost:8000)** - Interactive workflow browser (when running)

### For Developers
- **[🔧 Technical Documentation](README_ORIGINAL.md)** - Original README with technical details
- **[🌍 中文文档](README_ZH.md)** - Chinese documentation
- **[🚀 Deployment Guide](DEPLOYMENT.md)** - How to deploy the dashboard

---

## 📊 Repository Statistics

| Metric | Value | Description |
|--------|-------|-------------|
| **Total Workflows** | 2,057 | Complete automation workflows |
| **Active Workflows** | 215 | Production-ready workflows |
| **Total Nodes** | 76,618 | Individual workflow steps |
| **Unique Integrations** | 311 | Different services & APIs |

### Workflow Categories

- 🤖 **AI & Machine Learning** (503) - OpenAI, ChatGPT, ML integrations
- 📧 **Communication** (822) - Email, Slack, Telegram, Discord
- 📊 **Data Processing** (822) - APIs, webhooks, data transformation
- 📝 **Forms & Surveys** (309) - Typeform, Jotform, submissions
- 📑 **Spreadsheets** (285) - Google Sheets, Excel automation
- 💬 **Social Media** (184) - Telegram bots, LinkedIn, Twitter
- 📅 **Scheduling** (227) - Time-based automations, calendars
- ☁️ **Cloud Storage** (174) - Google Drive, Dropbox, files
- 💼 **CRM & Sales** (150) - Customer management, leads
- 🗄️ **Databases** (118) - Airtable, PostgreSQL, data storage

[See full catalog →](WORKFLOWS_README.md)

---

## ✨ Key Features

### Enhanced Dashboard
- **Real-time Search** - Instant results as you type
- **Smart Filters** - Trigger type, complexity, and category
- **One-Click Copy** - Copy JSON to clipboard instantly
- **Preview Modal** - View details before copying
- **Download Option** - Save workflows as files
- **Dark/Light Theme** - Comfortable viewing anytime
- **Mobile Responsive** - Works on all devices

### Workflow Organization
- **2,057 Workflows** - Comprehensive collection
- **15+ Categories** - Organized by use case
- **311 Integrations** - Covering major services
- **Quality Assured** - Tested and documented
- **Production Ready** - Used in real projects

### Documentation System
- **SQLite FTS5** - Lightning-fast full-text search
- **FastAPI Backend** - Modern, high-performance API
- **Sub-100ms Queries** - Instant search results
- **Category Mapping** - Smart workflow categorization
- **Integration Stats** - Track popular services

---

## 🎯 Popular Use Cases

### Business Automation
- Lead capture and CRM sync
- Invoice generation and delivery
- Customer onboarding workflows
- Automated reporting systems
- Approval workflows

### Marketing & Sales
- Email campaign automation
- Social media scheduling
- Lead nurturing sequences
- Analytics reporting
- Content distribution

### IT & DevOps
- Server monitoring and alerts
- Deployment automation
- Backup systems
- Log aggregation
- Incident response

### Data & Analytics
- ETL pipelines
- Data validation
- Real-time dashboards
- Multi-source aggregation
- Scheduled reports

### AI & Automation
- AI-powered email assistants
- ChatGPT integrations
- Content generation
- Data analysis
- Smart notifications

---

## 🛠️ Usage Examples

### Example 1: Quick Copy & Paste

```bash
# 1. Start dashboard
python run.py

# 2. Open browser → http://localhost:8000
# 3. Search for "email automation"
# 4. Click "📋 Copy JSON"
# 5. Open n8n → Paste (Ctrl+V)
# 6. Update credentials → Activate
```

### Example 2: Browse by Category

```bash
# 1. Open dashboard
# 2. Select category: "AI & Machine Learning"
# 3. Filter by complexity: "Medium"
# 4. Browse results
# 5. Click "👁️ View" to preview
# 6. Copy when ready
```

### Example 3: Search Specific Integration

```bash
# Search: "openai gmail"
# Results: All workflows using both OpenAI and Gmail
# Perfect for: AI-powered email automation
```

---

## 🔧 Installation & Setup

### Prerequisites
- Python 3.7+
- pip (Python package manager)
- n8n instance (for importing workflows)

### Quick Install

```bash
# Clone repository
git clone https://github.com/iboss21/n8nworkflows.git
cd n8nworkflows

# Install dependencies
pip install -r requirements.txt

# Index workflows (first time)
python workflow_db.py --index

# Start dashboard
python run.py

# Open browser
# Visit: http://localhost:8000
```

### Verify Installation

```bash
# Check database
python workflow_db.py --stats

# Test API
curl http://localhost:8000/health

# View docs
# Open: http://localhost:8000/docs
```

---

## 📖 Additional Resources

### Documentation
- [Workflow Catalog](WORKFLOWS_README.md) - Detailed workflow guide
- [Dashboard Usage](DASHBOARD_USAGE_GUIDE.md) - How to use the dashboard
- [Technical Docs](README_ORIGINAL.md) - System architecture
- [Deployment Guide](DEPLOYMENT.md) - Production deployment

### Community
- [n8n Documentation](https://docs.n8n.io/) - Official n8n docs
- [n8n Community](https://community.n8n.io/) - Forum and support
- [GitHub Issues](https://github.com/iboss21/n8nworkflows/issues) - Report problems
- [Discussions](https://github.com/iboss21/n8nworkflows/discussions) - Ask questions

### Integrations
Top 10 most used integrations:
1. HTTP Request (822 workflows)
2. OpenAI (503 workflows)
3. Webhook (323 workflows)
4. Form Trigger (309 workflows)
5. Google Sheets (285 workflows)
6. Gmail (198 workflows)
7. Telegram (184 workflows)
8. Google Drive (174 workflows)
9. Slack (150 workflows)
10. Cal.com (147 workflows)

---

## 🤝 Contributing

We welcome contributions! Here's how:

### Adding Workflows

1. Export workflow from n8n (remove credentials)
2. Name file: `[ID]_[Service]_[Purpose]_[Trigger].json`
3. Add to appropriate directory in `workflows/`
4. Commit and push

### Quality Guidelines

✅ Remove all sensitive data
✅ Test workflow before submitting
✅ Use descriptive names
✅ Add relevant tags
✅ Document special requirements

See [Workflow Catalog](WORKFLOWS_README.md#-contributing) for detailed guidelines.

---

## ⚠️ Important Notes

### Security
- **Review workflows** before importing
- **Update credentials** after import
- **Check webhook URLs** and endpoints
- **Test safely** in development first
- **Validate data** from external sources

### Compatibility
- Works with **n8n 1.0+**
- Some workflows require **community nodes**
- External APIs may have **changed**
- **Verify integrations** before use

### License
- **MIT Licensed** - Free to use
- **Commercial use** allowed
- **Attribution** appreciated
- **No warranty** provided

---

## 🌟 Highlights

### What Makes This Special?

✨ **Comprehensive Collection**
- 2,057 workflows covering 311 services
- Real-world, tested automations
- Production-ready examples

✨ **Easy to Use**
- One-click copy to clipboard
- Instant search and filtering
- Mobile-friendly interface

✨ **Well Organized**
- 15+ categories by use case
- Smart categorization
- Integration-based browsing

✨ **Fast & Efficient**
- Sub-100ms search
- SQLite FTS5 indexing
- Modern API backend

✨ **Community Driven**
- Open source
- Regular updates
- Active maintenance

---

## 🚀 Getting Started Now

Ready to automate? Here's your path:

1. **[Start Dashboard](#-quick-start---3-simple-steps)** ← Begin here
2. **[Browse Workflows](WORKFLOWS_README.md)** ← Explore catalog
3. **[Read Usage Guide](DASHBOARD_USAGE_GUIDE.md)** ← Learn best practices
4. **[Import to n8n](#-usage-examples)** ← Start automating!

---

## 📞 Support & Contact

### Need Help?

- 📖 **Documentation** - Read the guides first
- 🐛 **Found a bug?** - [Open an issue](https://github.com/iboss21/n8nworkflows/issues)
- 💡 **Have an idea?** - [Start a discussion](https://github.com/iboss21/n8nworkflows/discussions)
- 💬 **Quick question?** - Check [n8n community](https://community.n8n.io/)

### Stay Updated

- ⭐ **Star this repo** - Get notified of updates
- 👀 **Watch releases** - New workflow notifications
- 🍴 **Fork** - Create your own collection

---

<div align="center">

**⚡ Made with n8n | 🤖 Powered by Automation | 💚 Open Source**

[Browse Workflows](WORKFLOWS_README.md) • [Dashboard Guide](DASHBOARD_USAGE_GUIDE.md) • [Start Dashboard](#-quick-start---3-simple-steps)

---

**🎯 Perfect for**: Developers, automation engineers, business analysts, and anyone looking to streamline workflows!

[![Workflows](https://img.shields.io/badge/workflows-2057-blue)](workflows/)
[![Active](https://img.shields.io/badge/active-215-green)](workflows/)
[![Integrations](https://img.shields.io/badge/integrations-311-purple)](WORKFLOWS_README.md)
[![License](https://img.shields.io/badge/license-MIT-orange)](LICENSE)

</div>
