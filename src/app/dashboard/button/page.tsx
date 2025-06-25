import { Button } from "@/components/ui/button";
import { ChevronRightIcon, GitBranchIcon, Loader2Icon } from "lucide-react";


export default function ButtonPage() {
    return (
        <div>
            <Button>Default</Button>
            <Button variant={"destructive"}>destructive</Button>
            <Button variant={"outline"}>outline</Button>
            <Button variant={"success"}>success</Button>
            <Button variant={"ghost"}>ghost</Button>
            <Button variant={"link"}>link</Button>
            <Button variant={"secondary"}>secondary</Button>
            <Button variant={"default"}>default</Button>
            <Button variant="secondary" size="icon" className="size-8">
                <ChevronRightIcon />
            </Button>
            <Button variant="outline" size="sm">
                <GitBranchIcon /> New Branch
            </Button>
            <Button size="sm" disabled>
                <Loader2Icon className="animate-spin" />
                Please wait
            </Button>
        </div>
    );
}