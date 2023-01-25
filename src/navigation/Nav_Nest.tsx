import {useEffect, useRef, useState} from'react';
import { motion } from 'framer-motion';
import PageSwitcher from './pageSwitcher';

//indenting items
const indentStyling = {
    marginLeft: "2rem"
}
 
const transitionProps = {
    delay: 0,
    duration: 0.3,
    ease: "linear",
}

function Nav_Page(prop:any){
    const url = prop.url;
    const title = prop.title;

    //toggle pages in viewer
    const activatePage = ()=>{
        if(url){
            console.log('activating page', url)
            new PageSwitcher().switch(url);
            new PageSwitcher().closeSlider();
        }
    }

    return(
        <div style={indentStyling} className="navPage flex" onClick={activatePage} >
            <img src="assets/File_Document.svg" alt="" />
            <h3>{title}</h3>
        </div>
    )
}

export default function Nav_Nest(prop:any){
    //handle folder data and display
    const folderMap = prop.folderData.map;
    const folderKeys = Object.keys(folderMap);
    const pageUrl = prop.url
    const title = prop.title;
    const isNestedPage = prop.isNestedPage
    const openOnStart = prop.openOnStart;

    //handle the accordion
    const [collapse, setCollapse] = useState(openOnStart===true ?  false : true);
    //get max height
    const accordionRef = useRef<HTMLDivElement|null>(null);
    const maxHeight = useRef<number|undefined>(undefined);
    useEffect(()=>{
        if(maxHeight.current === undefined){
            maxHeight.current = accordionRef.current?.scrollHeight;
        }
    }, [accordionRef.current])
    //toggle collaps on click
    const toggleCollapse = ()=>{
        setCollapse(!collapse)
    }
    //handle collapse styling
    const styling = ()=>{
        const finalMaxHeight = collapse ? 0 : maxHeight.current;
        return {
            maxHeight: finalMaxHeight
        }
    }
     
    //rotate the expanding chevron
    const chevronRotate = ()=>{
        return {
            rotate: collapse ? -90 : -0.001
        }
    }
     
    
    //toggle pages in viewer
    const activatePage = ()=>{
        if(pageUrl){
            console.log('activating page', pageUrl)
            new PageSwitcher().switch(pageUrl);
            new PageSwitcher().closeSlider();
        }
    }

     
    return(
        <div className="navNest" style={indentStyling}>
            {/* title bar */}
            <div className="flex nestTitle">
                <motion.img onClick={toggleCollapse} initial={{rotate: -90}} transition={transitionProps} animate={chevronRotate()} src="assets/Chevron_Right_XL.svg" className='interactive' alt="" />
                {pageUrl ? (<img src="assets/Book.svg" alt="" />):(<img src="assets/Folder.svg" alt="" />)}
                <h3 onClick={activatePage}>{title}</h3>
            </div>

            {/* children body */}
            <motion.div initial={{maxHeight: 10000000}} transition={transitionProps} animate={styling()} ref={accordionRef} className="accordion">
                {folderKeys.map((key)=>{
                    if(key.includes('folder_')){
                        return <Nav_Nest
                        title={key.replace('folder_', '')}
                        folderData={folderMap[key]}
                        key={key}
                        ></Nav_Nest>
                    }
                    else if(key.includes('nestedPage_')){
                        return <Nav_Nest
                        title={key.replace('nestedPage_', '')}
                        folderData={folderMap[key]}
                        url={folderMap[key].page}
                        key={key}
                        ></Nav_Nest>
                    }
                    else if(key.includes('page_')){
                        return <Nav_Page
                        title={key.replace('.html', "").replace('page_', '')}
                        url={folderMap[key]}
                        key={key}
                        ></Nav_Page>
                    }
                })}
            </motion.div>
        </div>
    )
}