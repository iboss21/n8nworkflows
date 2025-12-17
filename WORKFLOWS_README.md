# ⚡ n8n Workflow Library - Ready-to-Use Automations

> **Browse 2,000+ production-ready n8n workflows** - Search, copy, and paste directly into your n8n instance

[![Workflows](https://img.shields.io/badge/workflows-2057-blue)](https://github.com/iboss21/n8nworkflows)
[![Active](https://img.shields.io/badge/active-215-green)](https://github.com/iboss21/n8nworkflows)
[![Integrations](https://img.shields.io/badge/integrations-311-purple)](https://github.com/iboss21/n8nworkflows)
[![License](https://img.shields.io/badge/license-MIT-orange)](LICENSE)

---

## 🚀 Quick Start - Copy & Paste Workflows

### Option 1: Use the Interactive Dashboard (Recommended)

```bash
# Clone the repository
git clone https://github.com/iboss21/n8nworkflows.git
cd n8nworkflows

# Install dependencies
pip install -r requirements.txt

# Start the dashboard server
python run.py

# Open your browser
# Navigate to: http://localhost:8000
```

**Dashboard Features:**
- 🔍 **Instant Search** - Find workflows by name, integration, or keyword
- 📋 **One-Click Copy** - Copy workflow JSON directly to clipboard
- 🎯 **Smart Filters** - Filter by trigger type, complexity, and category
- 👁️ **Preview** - View workflow details before copying
- 💾 **Download** - Save workflows as JSON files
- 🌙 **Dark Mode** - Easy on the eyes

### Option 2: Manual Import

1. Browse the `workflows/` directory
2. Find the workflow you need
3. Copy the JSON file
4. In n8n: Click `☰` → `Import workflow` → Paste JSON
5. Update credentials and webhook URLs
6. Activate and run!

---

## 📊 Repository Stats

| Metric | Count | Description |
|--------|-------|-------------|
| **Total Workflows** | 2,057 | Complete automation workflows |
| **Active Workflows** | 215 | Ready-to-run workflows |
| **Total Nodes** | 76,618 | Individual workflow steps |
| **Unique Integrations** | 311 | Different services & APIs |
| **Categories** | 15+ | Organized by use case |

### Trigger Distribution
- **Complex** (722 workflows) - Multi-trigger advanced automations
- **Manual** (565 workflows) - User-initiated workflows
- **Webhook** (543 workflows) - API-triggered automations
- **Scheduled** (227 workflows) - Time-based executions

### Complexity Levels
- **Low** (≤10 nodes) - Simple, focused automations
- **Medium** (11-20 nodes) - Standard business workflows
- **High** (>20 nodes) - Complex enterprise automations

---

## 🗂️ Workflow Categories

### 🤖 AI & Machine Learning
**503 workflows** featuring AI integrations

- **OpenAI Integration** - ChatGPT, GPT-4, embeddings
- **AI Assistants** - Customer support bots, email responders
- **Content Generation** - Blog posts, social media, documentation
- **Data Analysis** - Text classification, sentiment analysis
- **Image Processing** - AI image generation, analysis

**Popular Workflows:**
- AI Email Auto-responder with OpenAI
- ChatGPT-powered Customer Support Bot
- AI Content Generator for Social Media
- Automated Document Analysis with AI

### 📧 Communication & Messaging
**822 workflows** for communication automation

- **Email Automation** - Gmail, Outlook, IMAP/SMTP
- **Chat Platforms** - Slack, Discord, Telegram, WhatsApp
- **Notifications** - Multi-channel alert systems
- **Team Collaboration** - Message routing, thread management

**Popular Workflows:**
- Email to Slack Notification Bridge
- Automated Email Response System
- Team Chat Message Aggregator
- Multi-channel Notification Hub

### 📊 Data Processing & Analysis
**822 workflows** for data handling

- **HTTP Requests** - API calls, webhooks, data fetching
- **Data Transformation** - Filtering, mapping, aggregation
- **Batch Processing** - Large dataset handling
- **ETL Pipelines** - Extract, transform, load workflows

**Popular Workflows:**
- Webhook to Database Pipeline
- API Data Aggregation System
- Batch Data Processing Workflow
- Real-time Data Transformation

### 📝 Forms & Surveys
**309 workflows** for form automation

- **Form Triggers** - Typeform, Jotform, Google Forms
- **Response Processing** - Data validation, storage
- **Multi-step Forms** - Complex survey flows
- **Lead Capture** - Form to CRM automation

**Popular Workflows:**
- Form Submission to CRM
- Survey Response Processing
- Lead Qualification System
- Event Registration Automation

### 📑 Spreadsheets & Documents
**285 workflows** for document automation

- **Google Sheets** - Read, write, update spreadsheets
- **Excel Processing** - File manipulation, data sync
- **Document Generation** - PDF creation, reports
- **Data Export** - Automated reporting

**Popular Workflows:**
- CRM to Google Sheets Sync
- Automated Report Generation
- Spreadsheet Data Aggregator
- Invoice Generator

### 💬 Social Media Management
**184 workflows** for social media

- **Telegram Bots** - Custom bot creation, automation
- **LinkedIn Automation** - Post scheduling, engagement
- **Twitter/X Integration** - Tweet monitoring, posting
- **Multi-platform Publishing** - Cross-post content

**Popular Workflows:**
- Social Media Post Scheduler
- Telegram Bot with AI Responses
- LinkedIn Content Automation
- Twitter Monitoring System

### 🔗 API Integrations
**323 workflows** with webhook triggers

- **Webhook Listeners** - Real-time event handling
- **API Endpoints** - Custom API creation
- **Third-party Integrations** - External service connections
- **Event Processing** - Asynchronous workflows

**Popular Workflows:**
- Custom API Gateway
- Multi-service Webhook Router
- Payment Webhook Handler
- Event Notification System

### 📅 Scheduling & Calendar
**227 workflows** with time-based triggers

- **Cron Schedules** - Recurring task automation
- **Calendar Integration** - Cal.com, Google Calendar
- **Reminder Systems** - Automated notifications
- **Booking Automation** - Appointment management

**Popular Workflows:**
- Daily Report Generator
- Weekly Task Summary
- Appointment Reminder System
- Scheduled Data Backup

### 📦 Cloud Storage
**174 workflows** for file management

- **Google Drive** - File sync, backup, sharing
- **Dropbox** - Automated file operations
- **Cloud Sync** - Multi-cloud file management
- **Backup Systems** - Automated backups

**Popular Workflows:**
- Automated File Backup
- Cloud Storage Sync
- Document Archive System
- File Processing Pipeline

### 💼 CRM & Sales
**150 workflows** for customer management

- **Slack Integration** - Team notifications, updates
- **Lead Management** - Contact tracking, scoring
- **Sales Automation** - Pipeline management
- **Customer Support** - Ticket handling

**Popular Workflows:**
- Lead Capture to CRM
- Sales Pipeline Automation
- Customer Support Ticketing
- Deal Notification System

### 🗄️ Database Operations
**118 workflows** for data storage

- **Airtable** - Database automation, sync
- **PostgreSQL** - Query execution, data management
- **NoSQL Databases** - Document operations
- **Data Sync** - Multi-database synchronization

**Popular Workflows:**
- Database to Spreadsheet Sync
- Automated Data Backup
- Multi-table Data Aggregation
- Real-time Database Updates

### 📰 Content Management
**80 workflows** for content automation

- **HTML Processing** - Web scraping, parsing
- **Markdown Conversion** - Document formatting
- **Content Publishing** - Blog post automation
- **SEO Optimization** - Metadata management

**Popular Workflows:**
- Blog Post Publisher
- Content Aggregation System
- Web Scraper to Database
- SEO Content Optimizer

### 📖 Knowledge Management
**69 workflows** for information organization

- **Notion Integration** - Database automation, page creation
- **Note Taking** - Automated note organization
- **Documentation** - Auto-generated docs
- **Knowledge Bases** - Content management

**Popular Workflows:**
- Notion Content Automator
- Documentation Generator
- Knowledge Base Updater
- Note Sync System

### 💻 Developer Tools
**189 workflows** for development automation

- **Workflow Execution** - Sub-workflow management
- **Code Deployment** - CI/CD automation
- **GitHub Integration** - Repository management
- **Testing Automation** - Automated testing flows

**Popular Workflows:**
- Multi-step Workflow Orchestrator
- Automated Deployment Pipeline
- GitHub Event Handler
- Test Result Aggregator

### 🔧 Utility & Productivity
**286 workflows** for general automation

- **Data Splitting** - Batch processing, chunking
- **File Operations** - Read, write, convert files
- **Text Processing** - String manipulation
- **Conditional Logic** - Complex decision trees

**Popular Workflows:**
- Batch Data Processor
- File Format Converter
- Multi-condition Router
- Data Validation System

---

## 🎯 Popular Workflows by Use Case

### Business Process Automation
1. **Lead Capture & CRM Sync** - Capture leads from forms and sync to CRM
2. **Invoice Generation** - Automatic invoice creation and delivery
3. **Customer Onboarding** - Multi-step customer setup automation
4. **Report Generation** - Automated daily/weekly/monthly reports
5. **Approval Workflows** - Multi-level approval systems

### Marketing Automation
1. **Email Campaigns** - Automated email sequences
2. **Social Media Scheduling** - Cross-platform posting
3. **Lead Nurturing** - Automated follow-up sequences
4. **Analytics Reporting** - Marketing metrics aggregation
5. **Content Distribution** - Multi-channel content publishing

### IT & DevOps
1. **Server Monitoring** - Automated health checks and alerts
2. **Deployment Automation** - CI/CD pipeline automation
3. **Backup Systems** - Automated data backup workflows
4. **Log Aggregation** - Centralized logging systems
5. **Incident Response** - Automated alert handling

### E-commerce
1. **Order Processing** - Automated order fulfillment
2. **Inventory Management** - Stock level monitoring
3. **Customer Support** - Automated ticket handling
4. **Payment Processing** - Webhook-based payment handling
5. **Shipping Automation** - Label generation and tracking

### Data & Analytics
1. **Data Pipelines** - ETL automation workflows
2. **Report Generation** - Scheduled data reports
3. **Dashboard Updates** - Real-time data sync
4. **Data Validation** - Automated quality checks
5. **API Data Collection** - Multi-source data aggregation

---

## 🔍 How to Find the Right Workflow

### Using the Dashboard

1. **Search by Name**: Type keywords in the search bar
   - Example: "email automation", "slack notification", "database sync"

2. **Filter by Trigger Type**:
   - **Webhook** - For API-triggered workflows
   - **Manual** - For on-demand execution
   - **Scheduled** - For time-based automation
   - **Complex** - For multi-trigger workflows

3. **Filter by Complexity**:
   - **Low** - Simple, quick-to-implement workflows
   - **Medium** - Standard business automations
   - **High** - Complex enterprise workflows

4. **Browse by Category**:
   - AI & Machine Learning
   - Communication & Messaging
   - Data Processing
   - And 12 more categories...

### Using the File System

Workflows are organized by primary integration:
```
workflows/
├── Activecampaign/    # Email marketing workflows
├── Airtable/          # Database automation
├── Gmail/             # Email automation
├── Google Sheets/     # Spreadsheet workflows
├── OpenAI/            # AI-powered workflows
├── Slack/             # Team communication
├── Telegram/          # Bot automation
└── ...                # 180+ more directories
```

---

## 💡 Usage Examples

### Example 1: Copy Workflow via Dashboard

1. Open dashboard: `http://localhost:8000`
2. Search for "email automation"
3. Click **"📋 Copy JSON"** on desired workflow
4. Open n8n → Import workflow → Paste
5. Update credentials
6. Activate workflow

### Example 2: Manual File Import

```bash
# Find workflow file
cd workflows/Gmail/

# Copy desired workflow
cat 1234_Gmail_Slack_Notification_Webhook.json

# In n8n:
# 1. Click menu (☰)
# 2. Select "Import workflow"
# 3. Paste the JSON content
# 4. Configure credentials
# 5. Test and activate
```

### Example 3: Batch Import Multiple Workflows

```python
# Use the import script
python import_workflows.py

# Select workflows to import
# Script will handle the n8n API import
```

---

## 🔧 Customization Guide

### Before Using Any Workflow

1. **Update Credentials**
   - Replace all API keys and tokens
   - Update service credentials
   - Configure OAuth connections

2. **Modify Webhook URLs**
   - Update webhook endpoints
   - Configure callback URLs
   - Test webhook connectivity

3. **Adjust Parameters**
   - Update file paths
   - Modify email addresses
   - Configure service-specific settings

4. **Test in Development**
   - Use test mode first
   - Validate data processing
   - Check error handling

### Common Customizations

**Email Workflows:**
- Update sender/receiver addresses
- Modify email templates
- Configure SMTP/IMAP settings

**API Workflows:**
- Update API endpoints
- Modify request parameters
- Configure authentication

**Database Workflows:**
- Update connection strings
- Modify table/collection names
- Adjust query parameters

---

## 📚 Integration Reference

### Top 30 Most Used Integrations

| Integration | Count | Use Cases |
|-------------|-------|-----------|
| **HTTP Request** | 822 | API calls, webhooks, data fetching |
| **OpenAI** | 503 | AI chat, content generation, analysis |
| **Webhook** | 323 | API triggers, event handling |
| **Form Trigger** | 309 | Form submissions, surveys |
| **Google Sheets** | 285 | Spreadsheet automation, data sync |
| **Split Out** | 286 | Data transformation, batch processing |
| **Split in Batches** | 222 | Large dataset handling |
| **Gmail** | 198 | Email automation, monitoring |
| **Execute Workflow** | 189 | Sub-workflow execution |
| **Telegram** | 184 | Bot automation, notifications |
| **Google Drive** | 174 | File management, backup |
| **Slack** | 150 | Team notifications, alerts |
| **Cal.com** | 147 | Calendar, booking automation |
| **Airtable** | 118 | Database operations |
| **Extract from File** | 114 | Document processing |
| **Respond to Webhook** | 80 | API responses |
| **HTML** | 80 | Web scraping, parsing |
| **Email Send** | 71 | Email notifications |
| **Markdown** | 71 | Document formatting |
| **Notion** | 69 | Knowledge management |
| **Convert to File** | 69 | File format conversion |
| **n8n** | 52 | Workflow management |
| **PostgreSQL** | 50 | Database operations |
| **GitHub** | 45 | Repository automation |
| **Item Lists** | 44 | Data manipulation |
| **LinkedIn** | 43 | Social media automation |
| **Read/Write File** | 41 | File operations |
| **Spreadsheet File** | 36 | Excel processing |
| **HubSpot** | 35 | CRM automation |
| **Twitter/X** | 34 | Social media monitoring |

---

## 🚀 Getting Started

### Prerequisites

- **n8n Instance** - Self-hosted or cloud version
- **Python 3.7+** - For running the dashboard (optional)
- **Git** - For cloning the repository

### Installation Steps

```bash
# 1. Clone repository
git clone https://github.com/iboss21/n8nworkflows.git
cd n8nworkflows

# 2. Install Python dependencies (for dashboard)
pip install -r requirements.txt

# 3. Index workflows (first time only)
python workflow_db.py --index

# 4. Start dashboard server
python run.py

# 5. Open browser
# Navigate to http://localhost:8000
```

### Alternative: Static File Serving

```bash
# Serve with any HTTP server
python -m http.server 8080

# Or use Node.js
npx http-server -p 8080

# Access static dashboard at:
# http://localhost:8080/static/dashboard.html
```

---

## 🤝 Contributing

We welcome workflow contributions! Here's how to add your workflows:

### Adding New Workflows

1. **Export from n8n**
   - Open workflow in n8n
   - Click menu (☰) → Export workflow
   - Save as JSON file

2. **Clean Sensitive Data**
   - Remove all credentials
   - Clear API keys and tokens
   - Remove personal URLs
   - Sanitize any PII data

3. **Name Properly**
   - Format: `[ID]_[Service1]_[Service2]_[Purpose]_[Trigger].json`
   - Example: `2058_Gmail_Slack_Notification_Webhook.json`

4. **Add to Repository**
   ```bash
   # Create directory if needed
   mkdir -p workflows/YourService/
   
   # Add workflow file
   cp your_workflow.json workflows/YourService/
   
   # Commit changes
   git add workflows/YourService/
   git commit -m "Add: Gmail to Slack notification workflow"
   git push
   ```

5. **Update Index**
   ```bash
   python workflow_db.py --index --force
   ```

### Quality Guidelines

✅ **Do:**
- Remove all sensitive information
- Test workflow before submitting
- Use descriptive names
- Add relevant tags
- Document special requirements
- Include integration dependencies

❌ **Don't:**
- Include credentials or API keys
- Add untested workflows
- Use generic names like "workflow1"
- Include personal data
- Submit incomplete workflows

---

## 📖 Documentation

### Workflow File Structure

```json
{
  "name": "Workflow Name",
  "nodes": [
    {
      "name": "Node Name",
      "type": "n8n-nodes-base.nodeName",
      "parameters": { ... },
      "credentials": { ... },
      "position": [x, y]
    }
  ],
  "connections": { ... },
  "settings": { ... },
  "staticData": { ... },
  "tags": [ ... ],
  "active": false,
  "createdAt": "...",
  "updatedAt": "..."
}
```

### Node Types Reference

- **Trigger Nodes**: Webhook, Cron, Manual, Form
- **Action Nodes**: HTTP Request, Email, Database
- **Logic Nodes**: IF, Switch, Merge, Loop
- **Data Nodes**: Set, Function, Code
- **Transform Nodes**: Split, Aggregate, Filter

---

## 🔒 Security & Privacy

### Important Security Notes

⚠️ **Before Using Workflows:**

1. **Review All Code**
   - Check JavaScript/Python code nodes
   - Verify external URLs
   - Validate data transformations

2. **Update Credentials**
   - Never use default credentials
   - Use environment variables
   - Enable OAuth when possible
   - Rotate credentials regularly

3. **Sanitize Data**
   - Validate input data
   - Sanitize user inputs
   - Implement rate limiting
   - Use HTTPS for webhooks

4. **Test Safely**
   - Use development environments
   - Test with sample data
   - Monitor execution logs
   - Implement error handling

### Data Privacy

- **No PII Included** - All personal data removed
- **Credentials Excluded** - API keys not included
- **Open Source** - Fully inspectable code
- **Community Maintained** - Peer reviewed workflows

---

## 🐛 Troubleshooting

### Common Issues

**Issue: Workflow fails after import**
- Solution: Update all credentials and API endpoints

**Issue: Webhook not triggering**
- Solution: Update webhook URL to your n8n instance

**Issue: Node version mismatch**
- Solution: Update n8n to latest version or adapt node parameters

**Issue: Missing custom nodes**
- Solution: Install required community nodes from n8n

**Issue: Dashboard not loading workflows**
- Solution: Run `python workflow_db.py --index --force`

### Getting Help

1. **Check Documentation**: Review workflow description and comments
2. **Search Issues**: Look for similar problems in GitHub issues
3. **Community Forum**: Ask on [n8n community](https://community.n8n.io/)
4. **Create Issue**: Open a GitHub issue with details

---

## 📈 Stats & Analytics

### Repository Growth

- **Launch**: September 2024
- **Current**: 2,057 workflows
- **Growth Rate**: ~100 workflows/month
- **Contributors**: Community maintained
- **Stars**: Growing community support

### Most Popular Categories

1. **AI & ML** - 503 workflows (24.4%)
2. **Communication** - 822 workflows (40.0%)
3. **Data Processing** - 822 workflows (40.0%)
4. **Forms & Surveys** - 309 workflows (15.0%)
5. **Spreadsheets** - 285 workflows (13.9%)

### Usage Statistics

- **Total Downloads**: Thousands monthly
- **Active Users**: Growing community
- **Workflow Executions**: Millions combined
- **Integration Coverage**: 311 services

---

## 🌟 Featured Workflows

### AI-Powered Email Assistant
**Category**: AI & Communication | **Complexity**: High | **Nodes**: 42

Automated email management with AI-powered responses, categorization, and intelligent routing.

**Features**:
- OpenAI GPT-4 integration
- Automatic email classification
- Smart response generation
- Vector search for context
- Multi-language support

**Use Case**: Customer support, personal assistant, team inbox management

---

### Form to CRM Pipeline
**Category**: Business Automation | **Complexity**: Medium | **Nodes**: 12

Automated lead capture from forms to CRM with validation and enrichment.

**Features**:
- Form trigger integration
- Data validation
- Lead scoring
- CRM synchronization
- Notification system

**Use Case**: Lead generation, event registration, customer onboarding

---

### Social Media Scheduler
**Category**: Marketing | **Complexity**: Medium | **Nodes**: 18

Cross-platform social media posting with scheduling and analytics.

**Features**:
- Multi-platform posting
- Content scheduling
- Image optimization
- Performance tracking
- Engagement monitoring

**Use Case**: Social media management, content marketing, brand awareness

---

### Data Pipeline Orchestrator
**Category**: Data Engineering | **Complexity**: High | **Nodes**: 35

ETL automation with data transformation, validation, and storage.

**Features**:
- Multi-source data extraction
- Complex transformations
- Error handling
- Data validation
- Scheduled execution

**Use Case**: Business intelligence, data warehousing, analytics

---

## 📱 Mobile & Desktop Access

### Mobile Optimization

The dashboard is fully responsive and works on:
- 📱 iOS Safari
- 📱 Android Chrome
- 📱 Mobile browsers
- 💻 Desktop browsers
- 🖥️ Large displays

### Progressive Web App

Install the dashboard as a PWA:
1. Open dashboard in browser
2. Click "Add to Home Screen"
3. Access like a native app
4. Offline capability (coming soon)

---

## 🔮 Roadmap

### Upcoming Features

- [ ] **Workflow Templates** - Pre-configured templates for common use cases
- [ ] **Visual Workflow Builder** - Drag-and-drop workflow creation
- [ ] **AI-Powered Search** - Semantic search for workflows
- [ ] **Version Control** - Workflow versioning and history
- [ ] **Collaboration** - Share and fork workflows
- [ ] **Marketplace** - Premium workflow marketplace
- [ ] **Analytics** - Usage statistics and performance metrics
- [ ] **Mobile App** - Native mobile application
- [ ] **API Access** - RESTful API for workflow management
- [ ] **Workflow Testing** - Automated testing framework

---

## 📄 License

This repository is licensed under the **MIT License**.

- ✅ Free to use
- ✅ Modify as needed
- ✅ Commercial use allowed
- ✅ Attribution appreciated
- ⚠️ No warranty provided

See [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

### Community Contributors
Thanks to all contributors who have shared their workflows!

### Integrations & Services
- **n8n** - Workflow automation platform
- **OpenAI** - AI integration
- All 311+ service providers

### Open Source Projects
- FastAPI - API framework
- SQLite - Database engine
- Python - Programming language

---

## 📞 Contact & Support

### Get Help
- **Documentation**: Read this README
- **Issues**: [GitHub Issues](https://github.com/iboss21/n8nworkflows/issues)
- **Discussions**: [GitHub Discussions](https://github.com/iboss21/n8nworkflows/discussions)
- **n8n Community**: [community.n8n.io](https://community.n8n.io/)

### Stay Updated
- **Star this repo** - Get notified of updates
- **Watch releases** - New workflow notifications
- **Follow development** - Track progress

---

## 🎉 Quick Links

- 🏠 [Repository Home](https://github.com/iboss21/n8nworkflows)
- 📚 [Browse Workflows](workflows/)
- 🚀 [Getting Started](#-getting-started)
- 🔍 [Search Workflows](#-how-to-find-the-right-workflow)
- 🤝 [Contributing](#-contributing)
- 📖 [n8n Documentation](https://docs.n8n.io/)

---

<div align="center">

**⚡ Made with n8n | 🤖 Powered by Automation | 💚 Open Source**

[Browse Workflows](workflows/) • [Start Dashboard](#-quick-start---copy--paste-workflows) • [Contribute](#-contributing)

</div>
