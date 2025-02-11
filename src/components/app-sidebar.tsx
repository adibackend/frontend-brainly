
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar"
import { Youtube } from "@/icons/Youtube"
import { Twitter } from "@/icons/Twitter"
import { Notes } from "@/icons/Notes"


const items = [
  {
    title: "Notes",
    url: "#",
    icon: Notes,

  },
  {
    title: "Twitter",
    url: "#",
    icon: Twitter,

  },
  {
    title: "Youtube",
    url: "#",
    icon: Youtube,

  },
]

export function AppSidebar({ setEg }: { setEg: (tab: string) => void }) {

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu >
              {items.map((item) => {
                
                return    <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <button onClick={()=>{ setEg(item.title.toLowerCase()); console.log(item.title);  }} >{item.title}</button>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
