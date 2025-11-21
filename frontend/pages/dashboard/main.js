import { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

export default function DashboardMain() {
  const [stats, setStats] = useState({
    totalClients: 0,
    activeProjects: 0,
    pendingTickets: 0,
    revenue: 0
  });
  const [recentActivities, setRecentActivities] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch all data in parallel
      const [clientsRes, projectsRes, ticketsRes] = await Promise.all([
        fetch('http://localhost:5000/api/clients'),
        fetch('http://localhost:5000/api/projects'),
        fetch('http://localhost:5000/api/support')
      ]);

      const clients = await clientsRes.json();
      const projects = await projectsRes.json();
      const tickets = await ticketsRes.json();

      setStats({
        totalClients: clients.data?.length || 0,
        activeProjects: projects.data?.filter(p => p.status === 'in-progress').length || 0,
        pendingTickets: tickets.data?.filter(t => t.status === 'open').length || 0,
        revenue: projects.data?.reduce((sum, p) => sum + (p.budget || 0), 0) || 0
      });

      setProjects(projects.data?.slice(0, 3) || []);
      
      // Generate recent activities
      const activities = [
        ...(projects.data?.slice(0, 2).map(p => ({
          id: p.id,
          type: 'info',
          message: `Project "${p.name}" ${p.status === 'completed' ? 'completed' : 'updated'}`,
          time: '2 hours ago'
        })) || []),
        ...(tickets.data?.slice(0, 2).map(t => ({
          id: t.id,
          type: t.priority === 'high' ? 'warning' : 'info',
          message: `Support ticket "${t.title}" ${t.status === 'resolved' ? 'resolved' : 'created'}`,
          time: '5 hours ago'
        })) || [])
      ];
      setRecentActivities(activities);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  const getProgressColor = (progress) => {
    if (progress === 100) return 'bg-green-500';
    if (progress >= 75) return 'bg-blue-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Welcome back, Admin! 👋</h1>
          <p className="text-blue-100">Here's what's happening with your projects today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Clients</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalClients}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Projects</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.activeProjects}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📁</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Pending Tickets</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.pendingTickets}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎫</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Revenue</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">${stats.revenue.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 mt-2 rounded-full ${
                    activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-gray-900 text-sm">{activity.message}</p>
                    <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Projects */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Projects</h3>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{project.name}</span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      project.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">{project.client}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 text-right">{project.progress}% complete</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}