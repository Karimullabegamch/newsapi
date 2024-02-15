const mdiv=document.getElementById('res')
mdiv.classList.add('m')
async function f(url)
{
   const a=await fetch(url)
   const json=await a.json()
  
   if(json.status=='ok')
   {
     data(json.articles)
     
     
   }
   else{
     console.log('error')
   }
}
f('https://newsapi.org/v2/top-headlines?country=us&apiKey=afcc7f930e414398a190d7cd905db0b3')


function data(n)
{
    console.log(n)
    n.forEach(function(val)
    {
        console.log(val)
        const div=document.createElement('div')
        div.classList.add("new1")
        const img=document.createElement('img')
        img.src=val.urlToImage
        img.alt="imag"
        const cont=document.createElement('h3')
        cont.textContent=val.description
        const btn=document.createElement('button')
       
        const a=document.createElement('a')
        a.href=val.url
        a.target='_blank'
        a.textContent="read more"
        a.classList.add("i")
       
        btn.append(a)
        div.append(img,cont,btn)
        mdiv.appendChild(div)
        
    }
    )
    
}