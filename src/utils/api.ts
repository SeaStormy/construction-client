const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const fetchProjects = async () => {
  const response = await fetch(`${API_URL}/api/projects`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
};

export const fetchProject = async (id: string) => {
  const response = await fetch(`${API_URL}/api/projects/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch project');
  }
  return response.json();
};

export const createProject = async (projectData: any) => {
  const response = await fetch(`${API_URL}/api/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),
  });
  if (!response.ok) {
    throw new Error('Failed to create project');
  }
  return response.json();
};

export const updateProject = async (id: string, projectData: any) => {
  const response = await fetch(`${API_URL}/api/projects/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),
  });
  if (!response.ok) {
    throw new Error('Failed to update project');
  }
  return response.json();
};

export const deleteProject = async (id: string) => {
  const response = await fetch(`${API_URL}/api/projects/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete project');
  }
  return response.json();
};

export const fetchSettings = async () => {
  const response = await fetch(`${API_URL}/api/settings`);
  if (!response.ok) {
    throw new Error('Failed to fetch settings');
  }
  return response.json();
};

export const updateSettings = async (settingsData: any) => {
  const response = await fetch(`${API_URL}/api/settings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(settingsData),
  });
  if (!response.ok) {
    throw new Error('Failed to update settings');
  }
  return response.json();
};
