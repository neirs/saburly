var pozSlike=0;
var slike=["Analytical Capabilities.svg","attendance roster.svg","kivi.svg","ribica.svg","vsm.svg","zoblak.svg"];

function switchImage(promjena)
{
    var location="media\\our work\\";
    if(promjena=="+" && pozSlike<slike.length-1) {
        document.getElementById("galerijaSlika").src=location+slike[++pozSlike];
        console.log("slika je"+location+slike[pozSlike]);
        
    }
    if(promjena=="-" && pozSlike>0){
        document.getElementById("galerijaSlika").src=location+slike[--pozSlike]; 
        console.log("slika je"+location+slike[pozSlike]);        
    }
};



