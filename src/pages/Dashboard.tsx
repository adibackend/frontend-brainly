import { ShareIcon } from "@/icons/ShareIcon"
import { Cardd } from "@/components/Card"
import { Dialogg } from "@/components/Dialog"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { useContent } from "@/hooks/useContent"
import { useState } from "react"



export const Dashboard = () => {
  const contents = useContent()
  const [eg, setEg] = useState('notes')
  // Filter YouTube and Twitter content separately
  const youtubeContents = contents?.filter(({ type }: { type: string }) => type.toLowerCase() === "youtube");
  const twitterContents = contents?.filter(({ type }: { type: string }) => type.toLowerCase() === "twitter");





  return <>

    <div className="">
      <SidebarProvider>
        <AppSidebar setEg={setEg} />
        <main className="w-full mx-4" >
          <SidebarTrigger />
          <div className="flex justify-end gap-2 ">
            <Dialogg />
            <Button ><ShareIcon />Share</Button>

          </div>

          {/* <Cardd title="Project ideas" description="description" content="lorem30" type="twitter" link="https://x.com/elonmusk/status/1887870833671962641"/> */}

          {eg === 'notes' && <section className="mt-6">
            <h2 className="text-2xl font-bold mb-4">📺 All Notes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contents?.map(({ _id, title, link, type }) => {
      
                return <>
                  <Cardd key={_id} type={type} link={link} title={title} />
                </>
              })}
            </div>
          </section>}
          {eg === 'youtube' && <section className="mt-6">
            <h2 className="text-2xl font-bold mb-4">📺 YouTube</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {youtubeContents?.map(({ _id, title, link, type }) => (
                <Cardd key={_id} type={type} link={link} title={title} />
              ))}
            </div>
          </section>}{eg === 'twitter' && <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">🐦 Twitter</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {twitterContents?.map(({ _id, title, link, type }) => (
                <Cardd key={_id} type={type} link={link} title={title} />
              ))}
            </div>
          </section>}


        </main>
      </SidebarProvider>
    </div>

  </>
}
