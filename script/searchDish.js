let list_div=document.getElementById('list')
var timer_id;
let mainDiv=document.getElementById('data')


async function searchdish(){
    mainDiv.innerHTML=null;
    let query=document.getElementById('searchDish').value
     if(query.length<=1){
         return false;
     }
       
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)

    let data =await response.json();
    // console.log('data:',data);
    
    return data.meals;
}
// searchdish()

function throtle(){
    if(timer_id){
        return false
    }
    timer_id=setTimeout(()=>{
        main();
        timer_id=undefined
    },1000);
}

 function appendSearch(el){
  list_div.innerHTML=null;

  el.forEach(({strMeal,strMealThumb}) => {
    console.log('meal:',strMeal);

      let li=document.createElement('li')
      li.innerText=strMeal;
      li.setAttribute('class','selectedish');

      li.addEventListener('click',()=>{
        let div=document.createElement('div')
        div.setAttribute('class','homediv')
        let p=document.createElement('p')
        p.setAttribute('class','searchP')
        let img=document.createElement('img')
        img.setAttribute('class','searchMealImg')         
        img.src=strMealThumb
        p.innerText=strMeal

        div.append(img,p)
        mainDiv.append(div)
      })
      list_div.append(li)
  });

 }

async function main(){
   let search=await searchdish()
   appendSearch(search)
   console.log('search:',search);

}