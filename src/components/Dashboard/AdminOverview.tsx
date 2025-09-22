import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  BarChart3,
  Filter,
  Download,
  Bell
} from "lucide-react";

const adminStats = {
  totalRequests: 47,
  pendingRequests: 12,
  completedToday: 8,
  activeUsers: 156,
  avgResponseTime: "2.4 hours",
  completionRate: 94
};

const recentComplaints = [
  {
    id: "REQ001",
    student: "Rahul Kumar - 21BCE1234",
    type: "Electrical",
    issue: "Power socket not working in Room 204B",
    block: "A Block",
    priority: "high",
    status: "pending",
    timeAgo: "5 minutes ago"
  },
  {
    id: "REQ002", 
    student: "Priya Sharma - 21CSE5678",
    type: "Cleaning",
    issue: "Washroom cleaning required",
    block: "B Block",
    priority: "medium",
    status: "progress",
    timeAgo: "1 hour ago"
  },
  {
    id: "REQ003",
    student: "Amit Patel - 21EEE9012",
    type: "Carpenter",
    issue: "Door lock replacement needed",
    block: "C Block",
    priority: "low",
    status: "completed",
    timeAgo: "3 hours ago"
  }
];

const AdminOverview = () => {
  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Requests</p>
                <p className="text-3xl font-bold text-vit-blue">{adminStats.totalRequests}</p>
                <p className="text-xs text-muted-foreground mt-1">This month</p>
              </div>
              <BarChart3 className="h-8 w-8 text-vit-blue" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-3xl font-bold text-status-pending">{adminStats.pendingRequests}</p>
                <p className="text-xs text-muted-foreground mt-1">Needs attention</p>
              </div>
              <Clock className="h-8 w-8 text-status-pending" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed Today</p>
                <p className="text-3xl font-bold text-status-completed">{adminStats.completedToday}</p>
                <p className="text-xs text-muted-foreground mt-1">Great progress!</p>
              </div>
              <CheckCircle className="h-8 w-8 text-status-completed" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Students</p>
                <p className="text-3xl font-bold text-vit-orange">{adminStats.activeUsers}</p>
                <p className="text-xs text-muted-foreground mt-1">Online now</p>
              </div>
              <Users className="h-8 w-8 text-vit-orange" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-4xl font-bold text-info">{adminStats.avgResponseTime}</p>
              <p className="text-sm text-muted-foreground">Average response time</p>
              <div className="mt-4 flex justify-center">
                <Badge variant="secondary" className="bg-info/10 text-info">
                  15% faster than last month
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-4xl font-bold text-success">{adminStats.completionRate}%</p>
              <p className="text-sm text-muted-foreground">Successfully resolved</p>
              <div className="mt-4 flex justify-center">
                <Badge variant="secondary" className="bg-success/10 text-success">
                  Excellent performance
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Complaints */}
      <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Recent Complaints
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentComplaints.map((complaint) => (
            <div key={complaint.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm text-muted-foreground">{complaint.id}</span>
                    <Badge variant="outline" className={
                      complaint.priority === 'high' ? 'border-destructive text-destructive' :
                      complaint.priority === 'medium' ? 'border-warning text-warning' :
                      'border-success text-success'
                    }>
                      {complaint.priority}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-foreground mt-1">{complaint.issue}</h4>
                  <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                    <span>{complaint.student}</span>
                    <span>•</span>
                    <span>{complaint.block}</span>
                    <span>•</span>
                    <span>{complaint.type}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <Badge className={
                    complaint.status === 'pending' ? 'bg-status-pending text-black' :
                    complaint.status === 'progress' ? 'bg-status-progress text-white' :
                    'bg-status-completed text-white'
                  }>
                    {complaint.status === 'progress' ? 'In Progress' : complaint.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">{complaint.timeAgo}</p>
                </div>
                <Button size="sm" variant="outline">
                  <Bell className="h-4 w-4 mr-2" />
                  Assign
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminOverview;