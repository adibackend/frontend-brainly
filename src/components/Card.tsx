import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "./ui/card"
import { ShareIcon } from "../icons/ShareIcon"
interface cardProps {
   title: string,
   link: string,
   description: string,
   content: string,

   type: "youtube" | "twitter"
}
export const Cardd = ({ title, link, type }: cardProps) => {
   return <Card className="w-[350px] h-auto mx-auto pt-2">
      <CardHeader className="flex-row justify-between">
         <div className="flex space-x-4 items-center ">
            <span>

               <ShareIcon />
            </span>
            <span>
               <CardTitle className="">{title}</CardTitle>
            </span>

         </div>
         <div className="flex space-x-4 items-center">

            <span>

               <ShareIcon />
            </span>
            <span>
               <a href={link} target="_blank" >

                  <ShareIcon />
               </a>
            </span>

         </div>
         {/* <CardDescription>{description}</CardDescription> */}
      </CardHeader>
      <CardContent className="w-full">
         {type == "twitter" ? <blockquote className="twitter-tweet "><a href={link.replace("x.com", "twitter.com")}></a></blockquote> : <iframe src={link.replace("?v=", "/").replace("watch", "embed")} className="w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

      </CardContent>
      <CardFooter>
         <p></p>
      </CardFooter>
   </Card>

}