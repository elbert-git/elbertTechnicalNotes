import { useState, useRef } from "react"
import PageSwitcher from "../navigation/pageSwitcher";

const pageSwitcher = new PageSwitcher();

export default function FrameViewer(){
    const [url, setUrl] = useState<string|undefined>('permanentNotes/Permanent Notes/Technical Notes//Web-Development/Javascript.html')
     
    //connect to page switcher
    pageSwitcher.switch = setUrl;

    const iframeRef = useRef<HTMLIFrameElement|null>(null)

    if(iframeRef.current){
        console.log(iframeRef.current);
    }

    return (
        <div className="frameViewer">
            <iframe ref={iframeRef} src={url}></iframe>
        </div>
    )
}