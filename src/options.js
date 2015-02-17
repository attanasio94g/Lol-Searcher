var mydata = [];

function addData()
{
    var currentserver = document.getElementById('server').value;
    var currentprenickname = document.getElementById('nickname').value;

    var nickname = currentprenickname.replace(/(<([^>]+)>)/ig,""); //Remove html tags

    //mydata.push({yourserver: currentserver, yournickname: nickname});

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
        //document.getElementById('server').value = items.mydata[2].yourserver;
        //document.getElementById("nicknameonpage").innerText = items.mydata[2].yournickname;

        console.log(items.mydata);

        for (var i=0; i<items.mydata.length; i++ )
        {
            $(".summoners").append("<li>"+ items.mydata[i].yourserver + "  " + items.mydata[i].yournickname +"</li>");
        }
    });
}

document.addEventListener('DOMContentLoaded', show);

document.getElementById('save').addEventListener('click', function() 
    {
    addData()
    });
