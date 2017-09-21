var pozSlike=1;
var slike=[
    {imageSrc:"ANALYTICAL CAPABILITIES.png",
    name:"Analytical Capabilities",
    description:"Page about analytical capabilities"},{
    imageSrc: "ribica.png",
    name: "RIBICA",
    description: "Online shop for baby products"},
    
   {imageSrc:"attendance roster.png",
    name:"ATTENDANCE ROSTER",
    description:"Page about attendance roster"},

    {imageSrc:"kivi.png",
    name:"KIVI",
    description:"Online shop"},

    {imageSrc:"vsm.png",
    name:"VSM",
    description:"Virtual social manager"},


    {imageSrc:"zoblak.png",
    name:"ZOBLAK",
    description:"Zoblak agritech it solution"}];

function switchImage(promjena)
{   
    var location="media\\our work\\";
    if(promjena=="+" && pozSlike<slike.length) {

        document.getElementById("galerijaSlika").src=location+slike[pozSlike].imageSrc;
        document.getElementById("name_image").innerHTML=slike[pozSlike].name;
        document.getElementById("description_image").innerHTML=slike[pozSlike].description;
        console.log("slika je"+location+slike[pozSlike]);
        pozSlike++;
    }
    if(promjena=="-" && pozSlike>0){
        document.getElementById("galerijaSlika").src=location+slike[--pozSlike].imageSrc; 
        document.getElementById("name_image").innerHTML=slike[pozSlike].name;
        document.getElementById("description_image").innerHTML=slike[pozSlike].description;
        console.log("slika je"+location+slike[pozSlike]);        
    }
};



