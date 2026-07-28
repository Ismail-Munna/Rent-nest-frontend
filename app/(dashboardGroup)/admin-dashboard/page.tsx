
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminDashboardPage = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">248</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Requests</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">18</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Live Listings</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">96</CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Platform Overview</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Moderation tools and user management controls are available for keeping the marketplace healthy and active.
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboardPage;