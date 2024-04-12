function cal()
{
var jumbo =20;
var cheese = 30;
var vip =35;
var godfather =35;
var periperi=35;
var indi=40;
var jantar=40;
var tandoori=45;
var colddrink =20;


var jumbo1=document.getElementById('jumbo').value;
var cheese1=document.getElementById('cheese').value;
var vip1=document.getElementById('vip').value;
var godfather1 =document.getElementById('godfather').value;
var periperi1=document.getElementById('peri-peri').value;
var indi1=document.getElementById('indi').value;
var jantar1=document.getElementById('jantar').value;
var tandoori1=document.getElementById('tandoori').value;
var colddrink1 =document.getElementById('cold').value;


var vadapav=parseInt(jumbo1)+parseInt(cheese1)+parseInt(vip1)+parseInt(godfather1)+parseInt(periperi1)+parseInt(indi1)+parseInt(jantar1)+parseInt(tandoori1);

var jumbot= jumbo*jumbo1;
var cheeset=cheese*cheese1;
var vipt=vip*vip1;
var godfathert=godfather*godfather1;
var periperit=periperi*periperi1;
var indit=indi*indi1;
var jantart=jantar*jantar1;
var tandoorit=tandoori*tandoori1;
var colddrinkt=colddrink*colddrink1;

var iteam=jumbot+cheeset+vipt+godfathert+periperit+indit+jantart+tandoorit+colddrinkt;

document.getElementById('iteam').innerHTML=iteam;

var gst=iteam*18/100;
// document.getElementById('gst').innerHTML=gst;

var subtotal=gst+iteam;
document.getElementById('gst').innerHTML=subtotal;

// document.getElementById('vadapav').innerHTML=vadapav;

// var discount;

// if(vadapav>3)
// {
//      discount=10;
// }
// else if(vadapav>5)
// {
//      discount=12;
// }
// else if(vadapav>7)
// {
//      discount=14;
// }else if(vadapav>9)
// {
//      discount=15;
// }
// else if(vadapav>10)
// {
//      discount=18;
// }else{
//     discount=10;
// }

var discount=subtotal*10/100;

var gtoatal=subtotal-discount;

document.getElementById('vadapav').innerHTML=discount;
document.getElementById('gtotal').innerHTML=gtoatal;


}
