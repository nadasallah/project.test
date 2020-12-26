//crud system ()
//i-start creat data 
//1- connect id from HTML to JS
//2- creat to ARRAY to save date (by user "value")
//ii-display data in table
//1- creat table in HTML
//2-creat function display to get data from array(used by user) to table 
//3- creat loop to daplicate td( data ech object)
//4- ctreat concatation from th(html) and td(js)
//5- call tbody from HTML to js in order to tr play tr not tr string 
//6- invoke function in function add
//iii-local storage
//1- storge data in website (storge10Mb)
//3-use json(getitem, setitem,parse)
//2- creat if ( 1- get item from empty array , or parse json )
//iiii-delete
//1- creat buttun in td string in display function in js 
//2- add onclick to invoke the function deletemployee 
//3-creat function delete employee (splice to delete ) , getitem in local storge ,invoke display function to display new table 


//1- بجيب الداتامن html واحطها في متغير

var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
//var siteList=[];


//3- بخزن الداتا اللي بتطلع عندي في مسحاحة الموقع 
if (localStorage.getItem("bookMarkStorage")==null){ 
    var siteList=[];
}
else{
    var siteList=JSON.parse(localStorage.getItem("bookMarkStorage"));   
    displaySite(); 
}

//2-بعمل فانكشن عشان اقدر ايف الداتا بتاعتي (اليوزر)
//عنطريق الpush 
function addSite(){
    var site={
        name:siteNameInput.value,
        url:siteUrlInput.value,
    }
    siteList.push(site);
    displaySite();
    console.log(site);
    localStorage.setItem("bookMarkStorage",JSON.stringify(siteList));

}


function displaySite(){
   var siteData =``;
    for (var i=0; i<siteList.length; i++)
    {
        siteData +=`<div class="row data">
        <div class="col-lg-6 col-sm-6">
          <h2>${siteList[i].name}</h2>
        </div>
    <div class="col-md-auto">
        <a class="btn btn-primary" href="http://${siteList[i].url}" target="_blank">visit</a>
    </div>
    <div class="col-lg-2 col-sm-2">
        <button class="btn btn-danger" onclick="deleteData(${i})">Delete</button>
    </div>
    <div class="col-lg-2 col-sm-2">
        <button class="btn btn-warning" onclick="updateData(${i})">update</button>
    </div> 
    </div>`
    };
    document.getElementById("bookmarkList").innerHTML=siteData;
    console.log(siteData);
    
}

function deleteData(index){
    
    siteList.splice(index,1);
    localStorage.setItem("bookMarkStorage",JSON.stringify(siteList));

    displaySite();

}





var mainBtn=document.getElementById("mainBtn");
function updateData(index){
    siteNameInput.value=siteList[index].name;
    siteUrlInput.value=siteList[index].url;
   

    mainBtn.innerHTML="update";
    mainBtn.onclick=function(){
        siteList[index].name=siteNameInput.value;
        siteList[index].url=siteUrlInput.value;
        

        localStorage.setItem("bookMarkStorage",JSON.stringify(siteList));

        displaySite();
        mainBtn.innerHTML="Submit";
        mainBtn.onclick=addSite;
    }

}