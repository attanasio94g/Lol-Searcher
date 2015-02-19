var mydata = [];

function addData()
{
    var currentserver = document.getElementById('server').value;
    var currentprenickname = document.getElementById('nickname').value;

    var nickname = currentprenickname.replace(/(<([^>]+)>)/ig,""); //Remove html tags

// Get all the items stored in the storage
chrome.storage.sync.get(function(items) {
    if (Object.keys(items).length > 0 && items.mydata) {
        // The data array already exists, add to it the new server and nickname
        items.mydata.push({yourserver: currentserver, yournickname: nickname});
    } else {
        // The data array doesn't exist yet, create it
        items.mydata = [{yourserver: currentserver, yournickname: nickname}];
    }

    // Now save the updated items using set
    chrome.storage.sync.set(items, function() {
        console.log('Data successfully saved to the storage!');
    });
});
}

function show()
{
    chrome.storage.sync.get(function(items) 
    {
        console.log(items.mydata);

        for (var i=0; i<items.mydata.length; i++ )
        {
           //$(".datasu").append("<li>"+ "<b>" + items.mydata[i].yourserver + "</b>  " + items.mydata[i].yournickname +"</li>");
           var opt = document.createElement("option");
           opt.value= i;
           opt.innerHTML = items.mydata[i].yournickname;
           summname.appendChild(opt);
        }

        document.getElementById("selectedserver").innerText = items.mydata[items.yourindex].yourserver;
        document.getElementById("selectedsumm").innerText = items.mydata[items.yourindex].yournickname;
    });
}

function addsummname()
{
     var index = document.getElementById('summname').value;
     console.log(index);

     //Save the index of summoners name selected into chrome storage
    chrome.storage.sync.set({
    yourindex: index,
     }, function() {
     });

         chrome.storage.sync.get(function(items) 
    {
        console.log(items.yourindex)
        console.log(items.mydata[index].yournickname)
    });
}

function reload_page()
{
  location.reload();
}

document.addEventListener('DOMContentLoaded', show);

document.getElementById('save2').addEventListener('click', function() 
    {
    addsummname()
    reload_page()
    });

document.getElementById('save').addEventListener('click', function() 
    {
    addData()
    reload_page()
    });
