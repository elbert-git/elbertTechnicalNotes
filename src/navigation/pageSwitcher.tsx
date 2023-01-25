
let instance:PageSwitcher|undefined = undefined;

export default class PageSwitcher{
    switch:any;
    closeSlider:any

    constructor(){
        if(instance !== undefined){
            return instance
        }
        console.log('created page switcher');
        instance = this;

        this.switch = undefined;
        this.closeSlider = undefined;
    }
}