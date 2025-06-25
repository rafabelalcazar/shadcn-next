import { Button } from "@/components/ui/button";


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

        </div>
    );
}