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
import { useRef, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "@/config";

enum ContentType{
    Youtube="youtube",
    Twitter="twitter"
}

export const Dialogg = () => {
    const token = localStorage.getItem("token");
    const [open, setOpen] = useState(false);
    const [type,setType]=useState(ContentType.Youtube)

    const linkRef = useRef<HTMLInputElement>(null)
    const titleRef = useRef<HTMLInputElement>(null)
    const handleSave = async () => {
        await axios.post(BACKEND_URL + "api/v1/content", {
            link: linkRef.current?.value,
            title: titleRef.current?.value,
            type: type
        },{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        console.log("Saving content...");

        setOpen(false);
    };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>

                <Button onClick={() => setOpen(true)} ><PlusIcon />Add Content</Button>
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
                        <Input id="title" placeholder="Enter title" ref={titleRef} />
                    </div>

                   
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="link">Link</Label>
                        <Input id="link" placeholder="Enter link" ref={linkRef} />
                    </div>
                </div>
                    <div className="flex justify-center gap-2 ">
                        <Button variant="secondary"  className={type===ContentType.Youtube?"bg-slate-300 hover:bg-slate-300":"" } onClick={()=>setType(ContentType.Youtube)} >Youtube</Button>
                        <Button variant="secondary"  className={type===ContentType.Twitter?"bg-slate-300  hover:bg-slate-300 ":""}  onClick={()=>setType(ContentType.Twitter)}>Twitter</Button>
                    </div>
                
                <div className="flex justify-center mt-2 ">
                    <Button onClick={handleSave} variant="default" className="" >Save</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
