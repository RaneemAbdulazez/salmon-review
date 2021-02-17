'usestrict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let shops=[];




function Shop(locationName,mincust,maxcust,avgcookies){
this.locationName=locationName;
this.mincust=mincust;
this.maxcust=maxcust;
this.avgcookies=avgcookies;
this.cutomersEachHour=[];
this.cookiesEachHour=[];
this.totalCookiesPerDay=0;
shops.push(this);
}


Shop.prototype.CalcCustomersEachHour=function(){
    
        for(let i=0;i<hours.length;i++){
        this.x=random(this.mincust,this.maxcust);
         this.cutomersEachHour.push(this.x);
        }
      }


      function random(min, max) {
       
         rand = Math.floor(Math.random() * (max - min + 1) ) + min;
        console.log('rand',rand);
        return rand;
    }

Shop.prototype.calcCookiesEachHour=function()
{
    for(let i=0;i<hours.length;i++){
        // console.log(this.customersEachHour[i]);
        this.cookiesEachHour.push(Math.floor( this.cutomersEachHour[i]*this.avgcookies));
  
        this.totalCookiesPerDay+=this.cookiesEachHour[i]
      }
}



let Seattle = new Shop('Seattle', 23, 65, 6.3);
let Tokyo = new Shop('Tokyo', 3, 24, 1.2);
let Dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);



let parent=document.getElementById('parent');
console.log(parent);


let table=document.createElement('table');
parent.appendChild(table);


// console.log(shops);

function makeHeader(){
    let headerRow=document.createElement('tr');
    table.appendChild(headerRow);
    //th that contains name
    let firstTh=document.createElement('th');
    headerRow.appendChild(firstTh);
    firstTh.textContent="Name";

    for(let i=0;i<hours.length;i++){
        let thElement=document.createElement('th');
        headerRow.appendChild(thElement);
        thElement.textContent=hours[i];
    }

    
    let lasth=document.createElement('th');
    lasth.textContent='Daily Location Total';
    headerRow.appendChild(lasth);
} 

//function for render 
//create a row for every shop

Shop.prototype.render=function (){
    let dataRow=document.createElement('tr');
    table.appendChild(dataRow);


    //table data 
    let nameData=document.createElement('td');
    dataRow.appendChild(nameData);
    nameData.textContent=this.locationName;


    for(let i=0;i<hours.length;i++){
        let tdElement=document.createElement('td');
    dataRow.appendChild(tdElement);
    tdElement.textContent=this.cookiesEachHour[i];
    }

    //creat total
    let totalDataForEachShop =document.createElement('td');
    dataRow.appendChild(totalDataForEachShop);
    totalDataForEachShop.textContent=this.totalCookiesPerDay;

}

let makeFooter=function(){
    let footerRow=document.createElement('tr');
    table.appendChild(footerRow);
    let footerTh=document.createElement('th');
    footerRow.appendChild(footerTh);
    footerTh.textContent="Totals";
    let megaTotal=0;



    for(let i=0;i<hours.length;i++){
        let totalEachHour=0;
        for(let j=0;j<shops.length;j++){
            totalEachHour+=shops[j].cookiesEachHour[i];
            megaTotal+=shops[j].cookiesEachHour[i];

        }
      let footerTh=document.createElement('th');
        footerRow.appendChild(footerTh);
        footerTh.textContent=totalEachHour;
         

    }
    let finalTh=document.createElement('th');
    footerRow.appendChild(finalTh);
    finalTh.textContent=megaTotal;
        
    }



makeHeader();

for(let i=0;i<shops.length;i++){
    shops[i].CalcCustomersEachHour();
    shops[i].calcCookiesEachHour();
    shops[i].render();
    
    
}

makeFooter();