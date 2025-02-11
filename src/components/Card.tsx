import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "./ui/card"
import { ShareIcon } from "../icons/ShareIcon"
interface cardProps {
   title: string,
   link: string,
   type: "youtube" | "twitter"
}
export const Cardd = ({ title, link, type }: cardProps) => {
   return (
      <Card className="w-[350px] h-[250px] mx-auto pt-2  overflow-y-auto">
         <CardHeader className="flex-row justify-between px-4">
            <div className="flex space-x-4 items-center">
               <ShareIcon />
               <CardTitle className="truncate max-w-[250px]">{title}</CardTitle>
            </div>
            <div className="flex space-x-4 items-center">
               <a href={link} target="_blank">
                  <ShareIcon />
               </a>
            </div>
         </CardHeader>

         <CardContent className="">
            {type === "twitter" ? (
               <div className='aspect-w-16 aspect-h-9'>

               <blockquote className="twitter-tweet ">
                  <a href={link.replace("x.com", "twitter.com")}></a>
               </blockquote>
               </div>
            ) : (
               <div className="">

               <iframe
                  src={link.replace("?v=", "/").replace("watch", "embed")}
                  width={275}
                  height={350}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  ></iframe>
                  </div>
            )}
         </CardContent>

         <CardFooter className="px-4 py-2 text-sm text-gray-500">
            <p>Shared Content</p>
         </CardFooter>
      </Card>
   );
};
