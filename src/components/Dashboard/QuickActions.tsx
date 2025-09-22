import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  Wrench, 
  Zap, 
  Paintbrush, 
  Calendar, 
  Moon, 
  Hospital,
  Plus,
  ArrowRight
} from "lucide-react";

const quickActions = [
  {
    title: "Maintenance Complaint",
    description: "Report cleaning, carpenter, or electrician issues",
    icon: Wrench,
    color: "text-vit-blue",
    bgColor: "bg-vit-blue/10",
  },
  {
    title: "Electrical Issue",
    description: "Power outage, socket problems, etc.",
    icon: Zap,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    title: "Cleaning Request",
    description: "Room cleaning or common area issues",
    icon: Paintbrush,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    title: "Leave Application",
    description: "Apply for home leave or outstation",
    icon: Calendar,
    color: "text-info",
    bgColor: "bg-info/10",
  },
  {
    title: "Night Slip",
    description: "Request permission for late entry",
    icon: Moon,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Medical Visit",
    description: "Hospital or medical emergency",
    icon: Hospital,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
];

const QuickActions = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Button
              key={index}
              variant="ghost"
              className="h-auto p-4 flex flex-col items-start gap-3 hover:bg-secondary/50 group"
            >
              <div className={`p-3 rounded-lg ${action.bgColor} group-hover:scale-110 transition-transform`}>
                <Icon className={`h-6 w-6 ${action.color}`} />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground">{action.title}</h4>
                <p className="text-sm text-muted-foreground">{action.description}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default QuickActions;