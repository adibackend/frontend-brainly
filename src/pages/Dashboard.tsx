import { ShareIcon } from "@/icons/ShareIcon"
import { Cardd } from "@/components/Card"
import { Dialogg } from "@/components/Dialog"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"

export const Dashboard=()=>{
    return<>
    
    <div className="">
      <SidebarProvider>
      <AppSidebar />
      <main className="w-full mx-4" >
        <SidebarTrigger />
        <div className="flex justify-end gap-2 ">
      <Dialogg/>
        <Button ><ShareIcon/>Share</Button>

        </div>
     
      <Cardd title="Project ideas" description="description" content="lorem30" type="twitter" link="https://x.com/elonmusk/status/1887870833671962641"/>
      </main>
    </SidebarProvider>
      </div>
    
    </>
}