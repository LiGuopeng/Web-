function findInArr(arr,sClass) {
    for(var i=0;i<arr.length;i++){
        if(arr[i]==sClass){
            return true;
        }
    }
    return false
}
function  getByClass(obj,sClass){
    var aResult=[];
    if(obj.getElementsByClassName){
        aResult=obj.getElementsByClassName(sClass);
        console.log(aResult);// [ li.red.hehe, li.red, li.red, li.red ]
    }else{
        var aEle=obj.getElementsByClassName('*');
        for(var i=0;i<len;i++){
            var aClass=aEle[i].className.split(' ');  
            if(findInArr(aClass,sClass)){
                aResult.push(aEle[i])
            }
        }
    }
    return aResult
}