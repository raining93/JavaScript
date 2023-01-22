 let $ = function(cssSelector, message){
        let htmlElement = this.document.querySelectorAll(cssSelector);
        if(message){
        htmlElement.forEach(e=>{e.innerHTML += message + '<br>'});
    }
        if(cssSelector.startsWith('#')) return htmlElement[0];
        return htmlElement;
 }

let createElement=(tag, props)=>{
    let res = document.createElement(tag);

    if(!props) return res;
    
    // forin 문은 요소 객체의 속성만큼 반복
    for(key in props.prop){
        // 동적으로 추가하는 것
        res[key]= props.prop[key];
    }
    for(key in props.style){
        res.style[key]=props.style[key]
    }
    if(props.text){
        let textNode = document.createTextNode(props.text);
        res.appendChild(textNode); 
    }
    return res;
}

let getElementIndex= element=>{
    let eIdx=0;
    let parent = element.parentElement;
    let sibeling = Array.prototype.slice.call(parent.children);

    sibeling.forEach((e,i)=>{
        if(e === element){
            eIdx=i;
        }
    })
    return eIdx;
}