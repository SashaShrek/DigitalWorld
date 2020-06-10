function load(){
    let size = document.getElementById('f0').clientWidth;
    let proc = document.getElementById('f0').clientWidth * 0.01;
    aFacile(size, proc, 0);
    size = document.getElementById('p0').clientWidth;
    proc = document.getElementById('p0').clientWidth * 0.01;
    aPrec(size, proc, 0);
}
function aFacile(s, p, i){
    if(i == Math.ceil(s * 4 + p * 3)){
        document.getElementById('facileImg').scrollLeft = -i;
        
        setTimeout(aFacile, 50, s, p, 0);
    }else{
        document.getElementById('facileImg').scrollLeft = i;
        setTimeout(aFacile, 13, s, p, i + 1);
    }
}
function aPrec(s, p, i){
    if(i == Math.ceil(s * 4 + p * 3)){
        document.getElementById('precessionImg').scrollLeft = -i;
        setTimeout(aPrec, 15, s, p, 0);
    }else{
        document.getElementById('precessionImg').scrollLeft = i;
        setTimeout(aPrec, 15, s, p, i + 1);
    }
}