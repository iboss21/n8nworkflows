# Coolify Deployment Configuration for n8n Workflows Platform

## Prerequisites
- Coolify instance running
- Domain name configured (optional but recommended)
- Docker installed on your VPS

## Deployment Steps

### Option 1: Deploy via Coolify UI

1. **Create New Application**
   - Go to your Coolify dashboard
   - Click "New Resource" → "Application"
   - Select "Docker Compose"

2. **Configure Repository**
   - Repository URL: `https://github.com/iboss21/n8nworkflows`
   - Branch: `main` (or your deployment branch)
   - Build Pack: `docker-compose`
   - Docker Compose file: `docker-compose.frontend.yml`

3. **Environment Variables**
   Add these environment variables in Coolify:
   ```
   API_URL=http://api:8000
   NODE_ENV=production
   PORT=3000
   ```

4. **Port Configuration**
   - Frontend Port: 3000
   - API Port: 8000
   - Enable both ports in Coolify

5. **Domain Configuration**
   - Add your domain (e.g., `workflows.yourdomain.com`)
   - Enable SSL/TLS (Coolify handles Let's Encrypt automatically)

6. **Deploy**
   - Click "Deploy" button
   - Monitor deployment logs
   - Access your application once deployment is complete

### Option 2: Deploy via Coolify CLI

```bash
# Install Coolify CLI
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash

# Clone repository
git clone https://github.com/iboss21/n8nworkflows.git
cd n8nworkflows

# Deploy using docker-compose
coolify deploy --compose docker-compose.frontend.yml
```

## VPS Direct Deployment (Without Coolify)

### Requirements
- Ubuntu 20.04+ or Debian 11+
- 2GB RAM minimum (4GB recommended)
- 20GB disk space
- Docker & Docker Compose installed

### Installation Steps

```bash
# 1. Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# 2. Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 3. Clone repository
git clone https://github.com/iboss21/n8nworkflows.git
cd n8nworkflows

# 4. Build and start services
docker-compose -f docker-compose.frontend.yml up -d

# 5. Check status
docker-compose -f docker-compose.frontend.yml ps

# 6. View logs
docker-compose -f docker-compose.frontend.yml logs -f
```

### Nginx Reverse Proxy (Optional)

If you want to use Nginx as a reverse proxy:

```bash
# Install Nginx
sudo apt update
sudo apt install nginx certbot python3-certbot-nginx -y

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/n8n-workflows
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name workflows.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /api {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site and get SSL:

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/n8n-workflows /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Get SSL certificate
sudo certbot --nginx -d workflows.yourdomain.com
```

## Environment Variables

Create a `.env` file for production:

```env
# Frontend
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://your-api-domain.com
PORT=3000

# Backend
API_PORT=8000
API_HOST=0.0.0.0
PYTHONUNBUFFERED=1
```

## Monitoring & Maintenance

### Check Application Status
```bash
docker-compose -f docker-compose.frontend.yml ps
```

### View Logs
```bash
# All services
docker-compose -f docker-compose.frontend.yml logs -f

# Specific service
docker-compose -f docker-compose.frontend.yml logs -f frontend
docker-compose -f docker-compose.frontend.yml logs -f api
```

### Update Application
```bash
# Pull latest changes
git pull origin main

# Rebuild and restart
docker-compose -f docker-compose.frontend.yml down
docker-compose -f docker-compose.frontend.yml up -d --build
```

### Backup
```bash
# Backup volumes
docker run --rm -v n8n-workflows_api-data:/data -v $(pwd):/backup alpine tar czf /backup/api-data-backup.tar.gz -C /data .
```

## Troubleshooting

### Frontend not loading
```bash
# Check frontend logs
docker-compose -f docker-compose.frontend.yml logs frontend

# Restart frontend
docker-compose -f docker-compose.frontend.yml restart frontend
```

### API connection issues
```bash
# Check API logs
docker-compose -f docker-compose.frontend.yml logs api

# Test API connectivity
curl http://localhost:8000/health
```

### Port conflicts
```bash
# Check which process is using the port
sudo lsof -i :3000
sudo lsof -i :8000

# Kill the process if needed
sudo kill -9 <PID>
```

## Security Recommendations

1. **Firewall Configuration**
   ```bash
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   sudo ufw enable
   ```

2. **Use Strong Passwords**: If adding authentication later

3. **Keep Systems Updated**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

4. **Enable Docker logging**
   ```bash
   # Configure in /etc/docker/daemon.json
   {
     "log-driver": "json-file",
     "log-opts": {
       "max-size": "10m",
       "max-file": "3"
     }
   }
   ```

## Support

- GitHub Issues: https://github.com/iboss21/n8nworkflows/issues
- Documentation: https://your-domain.com/docs
- Coolify Docs: https://coolify.io/docs
