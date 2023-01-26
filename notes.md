# creating the prototype to understand the problem
so this is not obvious to do
so lets work with simple 3 level structure first

oh wow we figured it out



# solving folder pages
- if detected folder
    - see if has page of the same name
    - if yes: 
        remove page of the same name from array
        attach page and map to folder

# changing to thre cats
read each item in folder
if folder has dot: its a file
if folder has no dot: its a folder
    if folder has matching page. it's a nested page


final data structure
{
    folder_PermanentNotes:
        map:{
            nestedPage_NP1:{

            }
        }
        page: null
}
