const fs = require('fs');

console.clear();
console.log('-------------------------------');
console.log('-------------------------------');
console.log('-------------------------------');
console.log('-------------------------------');
console.log('-------------------------------');

let funcCall = 0;
function createMapFromFolder(folderPath){
    funcCall+=1;
    // if(funcCall > 3){return null}

    console.log('reading path:', folderPath);

    //creat returning var
    const folderMap = {};

    //readdir
    const readDir = fs.readdirSync(folderPath);
    console.log(readDir);

    //parse folder
    console.log('--- start parsing')
    for (let index = 0; index < readDir.length; index++) {
        const currItemName = readDir[index];
        //if null skip it
        if(currItemName === null){
            console.log('found null,  skipping');
            continue;
        }

        console.log('- parsing item', currItemName);
         
        // is a page
        if(currItemName.includes('.html')){
            folderMap["page_"+currItemName] = folderPath + "/" + currItemName;
            console.log('inserting page', currItemName)
        }
        
        //is a folder
        else if(!currItemName.includes('.')){ 
            //get next item
            let nextItem = null;
            if(index < (readDir.length-1)){
                nextItem = readDir[index+1].replace('.html', '')
            }


            // is there a corresponding page
            try {
                if(currItemName === nextItem){
                    //is a nested page
                        
                    //insert nested page
                    folderMap["nestedPage_" + currItemName] = {
                        map: createMapFromFolder(folderPath+"/"+currItemName),
                        page: folderPath+"/"+nextItem+'.html'
                    }

                    console.log('found corresponding page', nextItem);
                    readDir[index+1] = null;
                    console.log('next item is now', readDir[index+1]);
                }

                else{
                    //insert normal folder
                    console.log('found folder', currItemName)
                    folderMap["folder_" + currItemName] = {
                        map: createMapFromFolder(folderPath+"/"+currItemName),
                        page: null
                    }
                }
                    
            } catch (error) {
               console.log('failed reading folder', currItemName) 
            }
        }
    }

    //return map
    return folderMap
}



fs.writeFileSync(
    './notesMap.json',
    JSON.stringify(createMapFromFolder('permanentNotes/Permanent Notes/Technical Notes/')),
    'utf-8'
)