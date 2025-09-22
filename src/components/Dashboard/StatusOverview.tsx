import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  TrendingUp,
  Calendar
} from "lucide-react";

const statusData = [
  {
    id: 1,
    title: "Electrical Issue - Room 204",
    type: "maintenance",
    status: "progress",
    priority: "high",
    createdAt: "2024-01-20",
    assignedTo: "Electrical Team",
    progress: 60,
  },
  {
    id: 2,
    title: "Leave Application - Home Visit",
    type: "leave",
    status: "pending",
    priority: "medium",
    createdAt: "2024-01-21",
    assignedTo: "Warden Office",
    progress: 20,
  },
  {
    id: 3,
    title: "Cleaning Request - Common Area",
    type: "cleaning",
    status: "completed",
    priority: "low",
    createdAt: "2024-01-19",
    assignedTo: "Housekeeping",
    progress: 100,
  },
  {
    id: 4,
    title: "Night Slip Request",
    type: "permission",
    status: "rejected",
    priority: "medium",
    createdAt: "2024-01-18",
    assignedTo: "Security Office",
    progress: 0,
  },
];

const getStatusConfig = (status: string) => {
  switch (status) {
    case "pending":
      return { 
        color: "bg-status-pending text-black", 
        icon: Clock,
        label: "Pending"
      };
    case "progress":
      return { 
        color: "bg-status-progress text-white", 
        icon: TrendingUp,
        label: "In Progress"
      };
    case "completed":
      return { 
        color: "bg-status-completed text-white", 
        icon: CheckCircle,
        label: "Completed"
      };
    case "rejected":
      return { 
        color: "bg-status-rejected text-white", 
        icon: XCircle,
        label: "Rejected"
      };
    default:
      return { 
        color: "bg-muted text-muted-foreground", 
        icon: Clock,
        label: "Unknown"
      };
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high": return "text-destructive";
    case "medium": return "text-warning";
    case "low": return "text-success";
    default: return "text-muted-foreground";
  }
};

const StatusOverview = () => {
  const pendingCount = statusData.filter(item => item.status === "pending").length;
  const inProgressCount = statusData.filter(item => item.status === "progress").length;
  const completedToday = statusData.filter(item => 
    item.status === "completed" && item.createdAt === "2024-01-21"
  ).length;

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold text-status-pending">{pendingCount}</p>
              </div>
              <Clock className="h-8 w-8 text-status-pending" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                <p className="text-2xl font-bold text-status-progress">{inProgressCount}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-status-progress" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed Today</p>
                <p className="text-2xl font-bold text-status-completed">{completedToday}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-status-completed" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Requests */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Recent Requests
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {statusData.map((item) => {
            const statusConfig = getStatusConfig(item.status);
            const StatusIcon = statusConfig.icon;
            
            return (
              <div key={item.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <StatusIcon className="h-4 w-4" />
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-muted-foreground">Assigned to: {item.assignedTo}</span>
                        <span className={`text-xs font-medium ${getPriorityColor(item.priority)}`}>
                          • {item.priority} priority
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right min-w-[120px]">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{item.createdAt}</span>
                    </div>
                    {item.status !== "rejected" && (
                      <Progress value={item.progress} className="h-1.5 w-20" />
                    )}
                  </div>
                  <Badge className={statusConfig.color}>
                    {statusConfig.label}
                  </Badge>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default StatusOverview;