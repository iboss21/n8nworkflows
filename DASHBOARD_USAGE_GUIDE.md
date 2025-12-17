# 🎯 Dashboard Usage Guide - Copy & Paste Workflows

> **Quick Guide**: How to use the n8n Workflow Dashboard to find and copy workflows

---

## 🚀 Quick Start (3 Steps)

### Step 1: Start the Dashboard

```bash
# Navigate to the repository
cd n8nworkflows

# Install dependencies (first time only)
pip install -r requirements.txt

# Start the dashboard
python run.py

# Dashboard will open at: http://localhost:8000
```

### Step 2: Find Your Workflow

**Option A: Use Search**
1. Type keywords in the search box (e.g., "email", "slack", "openai")
2. Results update instantly as you type

**Option B: Use Filters**
1. **Trigger Type**: Filter by how workflow starts (Webhook, Manual, Scheduled, Complex)
2. **Complexity**: Filter by workflow size (Low, Medium, High)
3. **Category**: Browse by use case (AI, Communication, Data Processing, etc.)
4. **Active Only**: Show only active workflows

### Step 3: Copy & Paste

**Quick Copy (Fastest)**:
1. Find the workflow card
2. Click **"📋 Copy JSON"** button
3. Workflow JSON is copied to clipboard
4. Paste in n8n (Ctrl+V / Cmd+V)

**View Details First**:
1. Click **"👁️ View"** button
2. Review workflow details, integrations, and JSON
3. Click **"📋 Copy JSON to Clipboard"** in modal
4. Or click **"💾 Download JSON"** to save file

---

## 📋 Detailed Workflow

### Finding Workflows

#### 1. **Search by Keywords**

Type any of these in the search box:
- **Integration name**: "gmail", "slack", "openai", "airtable"
- **Purpose**: "automation", "notification", "sync", "backup"
- **Technology**: "email", "database", "api", "webhook"

**Examples**:
- `email automation` → Find email-related workflows
- `slack notification` → Find Slack alert workflows
- `openai chatgpt` → Find AI-powered workflows
- `google sheets sync` → Find spreadsheet automations

#### 2. **Filter by Trigger Type**

- **Webhook**: API-triggered workflows (for external systems)
- **Manual**: On-demand execution (click to run)
- **Scheduled**: Time-based automation (cron, intervals)
- **Complex**: Multiple triggers or advanced setups

#### 3. **Filter by Complexity**

- **Low (≤10 nodes)**: Simple, focused workflows
  - Perfect for: Quick automations, single-purpose tasks
  - Examples: Simple notifications, data forwarding

- **Medium (11-20 nodes)**: Standard business workflows
  - Perfect for: Common business processes, integrations
  - Examples: Form to CRM, email parsing, data sync

- **High (>20 nodes)**: Complex enterprise automations
  - Perfect for: Advanced logic, multi-step processes
  - Examples: AI assistants, complex pipelines, orchestrations

#### 4. **Browse by Category**

Categories available:
- 🤖 **AI Agent Development** - ChatGPT, OpenAI, machine learning
- 💼 **Business Process Automation** - Workflows, scheduling, tasks
- ☁️ **Cloud Storage & File Management** - Google Drive, Dropbox
- 📧 **Communication & Messaging** - Email, Slack, Telegram, Discord
- 🎨 **Creative Content & Video** - Content generation, media
- 🛒 **E-commerce & Retail** - Online stores, payments
- 💰 **Financial & Accounting** - Invoices, payments, reports
- 📊 **Data Processing & Analysis** - ETL, databases, analytics
- 🔗 **CRM & Sales** - Customer management, leads
- 📅 **Project Management** - Tasks, collaboration, tracking
- 📱 **Social Media Management** - LinkedIn, Twitter, scheduling
- 🔧 **Technical Infrastructure** - DevOps, monitoring, deployment
- 🌐 **Web Scraping & Data Extraction** - APIs, crawling

### Copying Workflows

#### Method 1: Quick Copy (Recommended)

1. **Find workflow** using search or filters
2. **Click "📋 Copy JSON"** on the workflow card
3. **Wait for confirmation** - Button shows "✅ Copied!"
4. **Open n8n**
5. **Paste** (Ctrl+V or Cmd+V)
6. **Update credentials** and webhook URLs
7. **Test** the workflow
8. **Activate**

#### Method 2: View Details First

1. **Click "👁️ View"** to open workflow modal
2. **Review**:
   - Description and purpose
   - Number of nodes
   - Integrations used
   - Trigger type and complexity
   - Full JSON code
3. **Copy**:
   - Click **"📋 Copy JSON to Clipboard"**
   - Or click **"💾 Download JSON"** to save file
4. **Import to n8n** as above

### Understanding Workflow Cards

Each workflow card shows:

```
┌─────────────────────────────────────┐
│ [Active] or [Inactive] Badge        │
│                                      │
│ Workflow Name (Title)                │
│ Brief description of what it does... │
│                                      │
│ ⚡ Trigger Type  📊 Complexity       │
│ 🔗 Number of Nodes                   │
│                                      │
│ [Integration] [Integration] [+More]  │
│                                      │
│ [📋 Copy JSON]  [👁️ View]           │
└─────────────────────────────────────┘
```

**Badge Colors**:
- 🟢 **Green (Active)**: Workflow is active in source system
- ⚪ **Gray (Inactive)**: Workflow was saved as inactive

**Complexity Colors**:
- 🟢 **Green (Low)**: Simple workflows, quick to set up
- 🟡 **Yellow (Medium)**: Standard workflows, moderate setup
- 🔴 **Red (High)**: Complex workflows, more configuration needed

---

## 🎨 Dashboard Features

### Search Bar
- **Real-time search** - Results update as you type
- **Searches**: Name, description, integrations, tags
- **No need to press Enter** - Instant results

### Filters
- **Combine filters** - Use multiple filters together
- **Reset** - Clear filters by selecting "All"
- **Persists** - Filters stay active while browsing

### Theme Toggle
- **Click 🌙/☀️** to switch between light and dark mode
- **Saved** - Your preference is remembered
- **System sync** - Respects system dark mode

### Load More
- **Initial load**: 30 workflows
- **Click "Load More"** - Load next 30
- **Infinite scroll** support (optional)

### Statistics Bar
- **Total Workflows**: All available workflows
- **Active**: Workflows marked as active
- **Integrations**: Unique services covered
- **Total Nodes**: Combined workflow complexity

---

## 📥 Importing to n8n

### Method 1: Direct Paste (Easiest)

1. **Copy** workflow JSON from dashboard
2. **Open n8n** in browser
3. **Click anywhere** in the canvas
4. **Paste** (Ctrl+V or Cmd+V)
5. **Confirm import**

### Method 2: Import Menu

1. **Copy** workflow JSON from dashboard
2. **Open n8n**
3. **Click menu** (☰) → "Import workflow"
4. **Select** "Import from clipboard"
5. **Paste** JSON
6. **Click** "Import"

### Method 3: Import File

1. **Download** workflow JSON from dashboard
2. **Open n8n**
3. **Click menu** (☰) → "Import workflow"
4. **Select** "Import from file"
5. **Choose** downloaded JSON file
6. **Click** "Import"

### After Importing

⚠️ **Important Steps**:

1. **Update Credentials**
   - Click each node with ⚠️ warning
   - Select or add credentials
   - Test connection

2. **Update Webhook URLs**
   - Find Webhook nodes
   - Copy new webhook URL
   - Update in external systems

3. **Review Parameters**
   - Check file paths
   - Update email addresses
   - Verify API endpoints
   - Adjust schedule timings

4. **Test Workflow**
   - Click "Execute Workflow"
   - Check all nodes run successfully
   - Verify output data

5. **Activate**
   - Toggle "Active" switch
   - Workflow starts running

---

## 💡 Tips & Tricks

### Finding the Right Workflow

**Start Broad, Then Filter**:
1. Search general term (e.g., "email")
2. Add trigger filter (e.g., "Webhook")
3. Add complexity (e.g., "Medium")
4. Browse results

**Use Integration Names**:
- Search for specific service: "salesforce", "hubspot", "stripe"
- Combine services: "gmail slack" finds workflows connecting both

**Check Multiple Categories**:
- Same workflow might fit multiple categories
- Try related categories if not finding what you need

### Copying Efficiently

**Keyboard Shortcuts**:
- After clicking Copy, immediately switch to n8n
- Use Alt+Tab (Windows) or Cmd+Tab (Mac)
- Paste directly: Ctrl+V / Cmd+V

**Copy Multiple Workflows**:
1. Open multiple n8n tabs
2. Copy workflow
3. Switch tab (Ctrl+Tab)
4. Paste
5. Repeat for next workflow

**Save for Later**:
- Click "💾 Download JSON" for workflows you might use later
- Organize downloaded files by category or project
- Import when needed

### Understanding Integrations

**Popular Combinations**:
- **HTTP Request + Database**: API to database sync
- **Form Trigger + Email**: Form submission notifications
- **Webhook + Slack**: Event notifications to team
- **Schedule + Google Sheets**: Automated reports
- **OpenAI + Email**: AI-powered email responses

**Integration Count**:
- More integrations = more complex workflow
- Verify you have access to all listed services
- Check if any require paid plans

### Troubleshooting

**Workflow Not Working After Import**:
1. ✅ Check credentials are configured
2. ✅ Verify webhook URLs are updated
3. ✅ Test each node individually
4. ✅ Check n8n version compatibility
5. ✅ Review execution logs

**Copy Button Not Working**:
- Check browser clipboard permissions
- Try "View" → "Copy JSON" instead
- Download and import file as alternative
- Manually copy JSON from viewer

**No Results in Search**:
- Check spelling
- Try broader terms
- Remove filters
- Browse by category instead

**Dashboard Not Loading**:
- Verify server is running
- Check port 8000 is not in use
- Run `python run.py --reindex`
- Clear browser cache

---

## 🔧 Advanced Usage

### API Access

The dashboard runs on a FastAPI server with full API access:

```bash
# Get statistics
curl http://localhost:8000/api/stats

# Search workflows
curl "http://localhost:8000/api/workflows?q=email&trigger=Webhook"

# Get specific workflow
curl http://localhost:8000/api/workflows/FILENAME.json

# Download workflow
curl http://localhost:8000/api/workflows/FILENAME.json/download
```

**API Documentation**:
Visit `http://localhost:8000/docs` for interactive API docs

### Command Line Usage

```bash
# Search workflows in database
python workflow_db.py --search "email automation"

# Get database statistics
python workflow_db.py --stats

# Force reindex all workflows
python workflow_db.py --index --force
```

### Programmatic Import

```python
# Example: Import workflows via n8n API
import requests
import json

# Read workflow JSON
with open('workflow.json') as f:
    workflow = json.load(f)

# Import to n8n
n8n_url = "http://your-n8n-instance:5678"
api_key = "your-api-key"

response = requests.post(
    f"{n8n_url}/api/v1/workflows",
    headers={"X-N8N-API-KEY": api_key},
    json=workflow
)

print(f"Imported: {response.json()}")
```

---

## 📱 Mobile Usage

The dashboard is fully responsive for mobile devices:

### Mobile Features
- ✅ Touch-friendly interface
- ✅ Responsive grid layout
- ✅ Mobile-optimized search
- ✅ Swipe-friendly modals
- ✅ Copy to clipboard support

### Mobile Tips
1. **Landscape mode** - Better for viewing workflow details
2. **Save bookmark** - Add to home screen for quick access
3. **Share workflows** - Use browser share feature
4. **Download option** - Useful when clipboard doesn't work

---

## 🎓 Learning Resources

### Understanding Workflows

**Workflow Components**:
- **Trigger Nodes**: Start the workflow (first node)
- **Action Nodes**: Perform operations (main logic)
- **Logic Nodes**: Control flow (IF, Switch, Merge)
- **Data Nodes**: Transform data (Set, Function, Code)

**Reading Workflow Cards**:
- **Node count**: Higher = more complex
- **Integrations**: Services you'll need access to
- **Trigger type**: How workflow starts
- **Active status**: Was it being used?

### n8n Resources

- **Official Docs**: https://docs.n8n.io/
- **Community**: https://community.n8n.io/
- **YouTube**: Search "n8n tutorials"
- **Examples**: https://n8n.io/workflows/

---

## ❓ FAQ

### Q: Can I modify workflows after copying?
**A**: Yes! All workflows can be customized. Change nodes, add steps, modify logic as needed.

### Q: Do I need all the integrations listed?
**A**: Yes, for the workflow to run as-is. You can modify workflows to use different services.

### Q: Are credentials included?
**A**: No, for security. You must add your own credentials after importing.

### Q: Can I contribute workflows?
**A**: Yes! See WORKFLOWS_README.md for contribution guidelines.

### Q: What if a workflow doesn't work?
**A**: Check credentials, webhook URLs, and n8n version. See Troubleshooting section.

### Q: How often are workflows updated?
**A**: Repository is community-maintained. New workflows added regularly.

### Q: Can I use these workflows commercially?
**A**: Yes, MIT licensed. Free for commercial use with attribution.

### Q: Do workflows require n8n cloud or self-hosted?
**A**: Works with both! Self-hosted recommended for full control.

---

## 🆘 Getting Help

### Support Channels

1. **Documentation**
   - Read WORKFLOWS_README.md
   - Check this usage guide
   - Review n8n docs

2. **GitHub Issues**
   - Report bugs
   - Request features
   - Ask questions

3. **n8n Community**
   - community.n8n.io
   - Active user base
   - Quick responses

4. **Discord/Slack**
   - Real-time help
   - Community support
   - Share experiences

---

## ✅ Quick Checklist

Before importing any workflow:

- [ ] Read workflow description
- [ ] Check required integrations
- [ ] Verify you have access to all services
- [ ] Review complexity level
- [ ] Copy or download workflow JSON

After importing:

- [ ] Update all credentials
- [ ] Update webhook URLs
- [ ] Review and adjust parameters
- [ ] Test in manual mode first
- [ ] Check execution logs
- [ ] Activate workflow

---

<div align="center">

**🎯 Happy Automating!**

Need help? Check [WORKFLOWS_README.md](WORKFLOWS_README.md) or open an [issue](https://github.com/iboss21/n8nworkflows/issues)

</div>
