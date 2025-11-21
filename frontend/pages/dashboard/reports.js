import DashboardLayout from '../../components/DashboardLayout';

export default function Reports() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
            <p className="text-gray-600">Analytics and business intelligence</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Generate Report
          </button>
        </div>
        
        <div className="bg-white rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">📈</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Reports & Analytics</h3>
          <p className="text-gray-600">Advanced reporting features coming soon...</p>
        </div>
      </div>
    </DashboardLayout>
  );
}