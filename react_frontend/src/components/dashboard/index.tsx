import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import api from '../../services/api';
import type { DashboardData, ApiResponse, TestApiResponse } from '../../types';
import './index.css';

const Dashboard: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [testResult, setTestResult] = useState<TestApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [testLoading, setTestLoading] = useState<boolean>(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async (): Promise<void> => {
    try {
      const response = await api.get<ApiResponse<{ dashboard: DashboardData }>>('/api/dashboard');
      setDashboardData(response.data.data.dashboard);
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async (): Promise<void> => {
    await logout();
    navigate('/login');
  };

  const handleTestApi = async (): Promise<void> => {
    setTestLoading(true);
    try {
      const response = await api.post<TestApiResponse>('/api/test', {
        message: 'Hello from React frontend!',
        data: { 
            test: true, random: Math.random(),          
            appName: import.meta.env.VITE_APP_NAME,
            appVersion: import.meta.env.VITE_APP_VERSION,
            environment: import.meta.env.VITE_APP_ENV 
        }
      });
      setTestResult(response.data);
    } catch  {
      setTestResult({
          success: false,
          message: 'API test failed',
          received: {
              message: '',
              data: null,
              authenticatedUser: '',
              timestamp: new Date().toISOString()
          }
      } as unknown as TestApiResponse);
    } finally {
      setTestLoading(false);
    }
  };

  const handleHealthCheck = async (): Promise<void> => {
    try {
      const response = await api.get<ApiResponse<{ message: string; timestamp: string }>>('/api/health');
      alert(`Health Check: ${response.data.data.message}\nEnvironment: ${import.meta.env.VITE_APP_ENV}`);
    } catch {
      alert('Health check failed');
    }
  };

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>Dashboard - {import.meta.env.VITE_APP_NAME}</h1>
          <p>Welcome back, {user?.fullName || user?.email}! | v{import.meta.env.VITE_APP_VERSION}</p>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>

      <div className="dashboard-content">
        <section className="welcome-section">
          <h2>{dashboardData?.welcomeMessage}</h2>
        </section>

        <section className="stats-section">
          <h3>Statistics</h3>
          <div className="stats-grid">
            {dashboardData?.stats.map((stat) => (
              <div key={stat.id} className="stat-card">
                <h4>{stat.title}</h4>
                <p className="stat-value">{stat.value}</p>
                <span className="stat-category">{stat.category}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="recent-activity">
          <h3>Recent Activity</h3>
          <ul>
            {dashboardData?.recentActivity.map((activity, index) => (
              <li key={index}>
                <strong>{activity.action}</strong> - {new Date(activity.timestamp).toLocaleString()}
              </li>
            ))}
          </ul>
        </section>

        <section className="api-test-section">
          <h3>API Testing</h3>
          <div className="api-buttons">
            <button onClick={handleTestApi} disabled={testLoading}>
              {testLoading ? 'Testing...' : 'Test API Call'}
            </button>
            <button onClick={handleHealthCheck}>
              Health Check
            </button>
          </div>
          
          {testResult && (
            <div className="test-result">
              <h4>Test Result:</h4>
              <pre>{JSON.stringify(testResult, null, 2)}</pre>
            </div>
          )}
        </section>

        <section className="user-info">
          <h3>User Information</h3>
          <div className="user-details">
            <p><strong>ID:</strong> {user?.id}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Full Name:</strong> {user?.fullName || 'N/A'}</p>
            <p><strong>Member Since:</strong> {user ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;