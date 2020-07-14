class Loader{
    Load(){
        let animation = new Animation();
        animation.aFacile();
        setTimeout(animation.aPrec, 1000);
    }
}

class Animation{
    aFacile(){
        let data = [
            "http://188.227.86.17/whoiam/facile3.png",
            "http://188.227.86.17/whoiam/facile2.png",
            "http://188.227.86.17/whoiam/facile1.png",
            "http://188.227.86.17/whoiam/facile.png"
        ]
        let i = 0;
        setInterval(() => {
            $("#f0").css({"opacity": 0.2});
            setTimeout(() => {
                $("#f0")[0].src = data[i];
                $("#f0").css({"opacity": 1});
                $("#facileImg > a").attr("href", data[i]);
            }, 400);
            i = i == 3 ? 0 : i + 1;
        }, 4000);
    }
    aPrec(){
        let data = [
            "http://188.227.86.17/whoiam/prec.png",
            "http://188.227.86.17/whoiam/prec1.png",
            "http://188.227.86.17/whoiam/prec2.png",
            "http://188.227.86.17/whoiam/prec3.png"
        ]
        let i = 0;
        setInterval(() => {
            $("#p0").css({"opacity": 0.2});
            setTimeout(() => {
                $("#p0")[0].src = data[i];
                $("#p0").css({"opacity": 1});
                $("#precessionImg > a").attr("href", data[i]);
            }, 400);
            i = i == 3 ? 0 : i + 1;
        }, 4000);
    }
}