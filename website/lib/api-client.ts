// API client for n8n workflows backend

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface Workflow {
  id: string;
  name: string;
  filename: string;
  category: string;
  nodes: number;
  connections: number;
  integrations: string[];
  trigger_type?: string;
  size?: number;
  created_at?: string;
  updated_at?: string;
}

export interface SearchParams {
  query?: string;
  category?: string;
  page?: number;
  limit?: number;
}

export interface SearchResponse {
  workflows: Workflow[];
  total: number;
  page: number;
  pages: number;
}

export interface StatsResponse {
  total_workflows: number;
  total_integrations: number;
  total_nodes: number;
  categories: Record<string, number>;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Search workflows
  async searchWorkflows(params: SearchParams = {}): Promise<SearchResponse> {
    const queryParams = new URLSearchParams();
    
    if (params.query) queryParams.append('q', params.query);
    if (params.category) queryParams.append('category', params.category);
    if (params.page) queryParams.append('page', params.page.toString());
    if (params.limit) queryParams.append('limit', params.limit.toString());

    return this.request<SearchResponse>(`/api/workflows?${queryParams.toString()}`);
  }

  // Get workflow by ID
  async getWorkflow(id: string): Promise<Workflow> {
    return this.request<Workflow>(`/api/workflows/${id}`);
  }

  // Get workflow JSON
  async getWorkflowJson(filename: string): Promise<any> {
    return this.request<any>(`/api/workflows/${filename}/json`);
  }

  // Get statistics
  async getStats(): Promise<StatsResponse> {
    return this.request<StatsResponse>('/api/stats');
  }

  // Get categories
  async getCategories(): Promise<string[]> {
    const response = await this.request<{ categories: string[] }>('/api/categories');
    return response.categories;
  }

  // Download workflow
  getDownloadUrl(filename: string): string {
    return `${this.baseUrl}/api/workflows/${filename}/download`;
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export class for custom instances
export default ApiClient;
