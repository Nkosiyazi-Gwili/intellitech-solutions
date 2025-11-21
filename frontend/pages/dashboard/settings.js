import DashboardLayout from '../../components/DashboardLayout';

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600">Configure your dashboard preferences</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">⚙️</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Settings</h3>
          <p className="text-gray-600">Configuration options coming soon...</p>
        </div>
      </div>
    </DashboardLayout>
  );
}