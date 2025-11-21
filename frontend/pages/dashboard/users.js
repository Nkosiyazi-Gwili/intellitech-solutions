import DashboardLayout from '../../components/DashboardLayout';

export default function Users() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Users</h1>
            <p className="text-gray-600">Manage team members and permissions</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Add User
          </button>
        </div>
        
        <div className="bg-white rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">👥</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">User Management</h3>
          <p className="text-gray-600">User management system coming soon...</p>
        </div>
      </div>
    </DashboardLayout>
  );
}