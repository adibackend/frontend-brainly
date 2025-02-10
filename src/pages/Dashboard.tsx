import { ShareIcon } from "@/icons/ShareIcon"
import { Cardd } from "@/components/Card"
import { Dialogg } from "@/components/Dialog"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import {useContent} from "@/hooks/useContent"

export const Dashboard=()=>{
  const contents=useContent()
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
     
      {/* <Cardd title="Project ideas" description="description" content="lorem30" type="twitter" link="https://x.com/elonmusk/status/1887870833671962641"/> */}
      {/* {JSON.stringify(contents)} */}
      <div className="md:flex h-max mt-4 gap-8 md:flex-wrap overflow-hidden">

      {contents?.map(({_id,title,link,type})=><Cardd key={_id} type={type} link={link} title={title} />)}
      </div>
      </main>
    </SidebarProvider>
      </div>
    
    </>
}