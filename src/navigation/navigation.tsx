import folderData from '../notesMap.json';
import { useState } from "react";
import Nav_Nest from "./Nav_Nest";
import PageSwitcher from './pageSwitcher';

export default function Navigation(){

    const [slide, setSlide] = useState(false);
     
    const sliderClass = ()=>{
        return slide ? "slider" : "slider sliderLeft"
    }

    const onSliderButtonClicked =()=>{
        setSlide(!slide)
    }

    const opacityClass = ()=>{
        return slide ? "opacity" : "opacity opacityDown"
    }

    //connect to page switcher
    new PageSwitcher().closeSlider = ()=>{setSlide(false)}
     


    return (
        <div className="navigationRoot">
            <div className={sliderClass()}>
                <div className="offset">
                    <div className="navigationPanel">
                        <button className="sliderButton interactive" onClick={onSliderButtonClicked}>
                            <img src="assets/Hamburger_3.svg" alt="" />
                            <img className={"overlay backButton " + opacityClass()} src="assets/DoubleChevron_Left.svg" alt="" />
                        </button>

                        <Nav_Nest title="Root" openOnStart={true} folderData={{map:folderData}}></Nav_Nest> 
                    </div>
                </div>
            </div>
        </div>
    )
}