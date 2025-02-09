import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import PlusIcon from "../icons/PlusIcon";
// import { Button } from "./Button";
import { Button } from "@/components/ui/button"

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {useState} from "react"

export const Dialogg = () => {
    const [open, setOpen] = useState(false);

    const handleSave = () => {
      
        console.log("Saving content...");

        setOpen(false);
    };
    return (
        <Dialog open={open}  onOpenChange={setOpen}>
            <DialogTrigger>
                
                <Button   onClick={()=>setOpen(true)} ><PlusIcon/>Add Content</Button>
            </DialogTrigger>
            <DialogContent className="p-6">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">Add New Content</DialogTitle>
                    <DialogDescription className="text-sm text-gray-500">
                        Enter the details below.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" placeholder="Enter title" />
                    </div>

                    {/* Link Input */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="link">Link</Label>
                        <Input id="link" placeholder="Enter link" />
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-center mt-4 ">
                    <Button onClick={handleSave} variant="secondary" className="bg-slate-200" >Save</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
