class Loader{
    Load(){
        let animation = new Animation();
        let size = $("#f0").clientWidth;
        let proc = $('#f0').clientWidth * 0.01;
        animation.aFacile(size, proc, 0);
        size = $('#p0').clientWidth;
        proc = $('#p0').clientWidth * 0.01;
        animation.aPrec(size, proc, 0);
    }
}

class Amimation{
    aFacile(s, p, i){
        if(i == Math.ceil(s * 4 + p * 3)){
            $('#facileImg').scrollLeft = -i;
            
            setTimeout(aFacile, 50, s, p, 0);
        }else{
            $('#facileImg').scrollLeft = i;
            setTimeout(aFacile, 13, s, p, i + 1);
        }
    }
    aPrec(s, p, i){
        if(i == Math.ceil(s * 4 + p * 3)){
            $('#precessionImg').scrollLeft = -i;
            setTimeout(aPrec, 15, s, p, 0);
        }else{
            $('#precessionImg').scrollLeft = i;
            setTimeout(aPrec, 15, s, p, i + 1);
        }
    }
}