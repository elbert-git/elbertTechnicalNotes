
export const frame:HTMLIFrameElement = document.querySelector('iframe')!;
frame.src = new URL(`notesSource/Zettelkasten.html`, import.meta.url).href

// on iframe load run this func
frame.onload = ()=>{
  // get a tags from loaded iframe document
  const aTags = frame.contentDocument?.body.querySelectorAll('a');
  // make sure a tags don't click out
  for (let index = 0; index < aTags!.length; index++) {
    aTags![index].addEventListener('click', (e)=>{
      e.preventDefault();
    })
  }
}


// simulate a page load call
// this is also how you change pages
document.querySelector('button')?.addEventListener('click', ()=>{
  frame.src = new URL(`notesSource/Technical%20Notes/Crypto%20and%20Blockchains.html`, import.meta.url).href
})