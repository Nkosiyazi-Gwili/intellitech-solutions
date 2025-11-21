const getApiUrl = (path) => {
  // Use environment variable for API URL
  const baseUrl = process.env.API_URL || 'https://intellitech-solutions-backend.vercel.app';
  return `${baseUrl}/api${path}`;
};

export const api = {
  async get(url) {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    
    const response = await fetch(getApiUrl(url), {
      headers: {
        'Authorization': token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json',
      },
    });
    
    if (response.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/dashboard';
      }
      throw new Error('Unauthorized');
    }
    
    return response.json();
  },

  async post(url, data) {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    
    const response = await fetch(getApiUrl(url), {
      method: 'POST',
      headers: {
        'Authorization': token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (response.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/dashboard';
      }
      throw new Error('Unauthorized');
    }
    
    return response.json();
  },

  async put(url, data) {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    
    const response = await fetch(getApiUrl(url), {
      method: 'PUT',
      headers: {
        'Authorization': token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (response.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/dashboard';
      }
      throw new Error('Unauthorized');
    }
    
    return response.json();
  },

  async delete(url) {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    
    const response = await fetch(getApiUrl(url), {
      method: 'DELETE',
      headers: {
        'Authorization': token ? `Bearer ${token}` : '',
      },
    });
    
    if (response.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/dashboard';
      }
      throw new Error('Unauthorized');
    }
    
    return response.json();
  },
};