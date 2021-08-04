

async function getdata(url){
    try{
        let response=await fetch(url)
        var data=await response.json()
    }
    catch(error){
        console.log('error:',error);
    }

    return data.meals
}

function appenddata(meal,parent){
    meal.forEach(({strMeal,strMealThumb}) => {
        
        let div=document.createElement('div')
        let p=document.createElement('p')
        let img=document.createElement('img')
         
        img.src=strMealThumb
        p.innerText=strMeal

        div.append(img,p)

        parent.append(div)
    });
}

export {getdata,appenddata}