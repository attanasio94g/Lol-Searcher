function searchsum()
{
	var currentserver = document.getElementById('server').value;
    var currentprenickname = document.getElementById('nickname').value;
    var currentsite = document.getElementById('site').value;

    var nickname = currentprenickname.replace(/(<([^>]+)>)/ig,""); //Remove html tags

    //Open the page of the inserted data and give error if wrong data
    if ((currentserver == null) && (nickname == null))
    {
    	//do nothing actually
    }
    else if ((currentserver == "") || (nickname == ""))
    {
    	//do nothing actually
    }
    else if (currentsite == "0")
    {
      if ((currentserver == "kr"))
      {
        chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
        chrome.tabs.create( { "url": "http://www.op.gg/summoner/userName="+nickname } );
        });
      }
      else
      {
        chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
        chrome.tabs.create( { "url": "http://"+currentserver+".op.gg/summoner/userName="+nickname } );
        });
      }
    }
    else if(currentsite == "1")
    {
      chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
      chrome.tabs.create( { "url": "http://www.lolnexus.com/"+currentserver+"/search?name="+nickname+"&region="+currentserver } );
      });
    }
    else if(currentsite == "2")
    {
      chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
      chrome.tabs.create( { "url": "http://www.lolking.net/search?name="+nickname+"&region="+currentserver } );
      });
    }
     else if(currentsite == "3")
    {
      chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
      chrome.tabs.create( { "url": "http://www.elophant.com/league-of-legends/search?query="+nickname+"&region="+currentserver } );
      });
    }
     else if(currentsite == "4")
    {
      chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
      chrome.tabs.create( { "url": "http://quickfind.kassad.in/profile/"+currentserver+"/"+nickname+"/" } );
      });
    }
     else if(currentsite == "5")
    {
      chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
      chrome.tabs.create( { "url": "http://www.lolskill.net/summoner/"+currentserver+"/"+nickname } );
      });
    }
     else if(currentsite == "6")
    {
      chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
      chrome.tabs.create( { "url": "http://it.loldb.gameguyz.com/analyze/search?search_text="+nickname+"&c_server=1_2_3_4_5_6_7_8_9_10" } );
      });
    }
    else if(currentsite == "7")
    {
      chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
      chrome.tabs.create( { "url": "http://www.carry.gg/current/"+currentserver+"/"+nickname+"/" } );
      });
    }
}

function show()
{
    chrome.storage.sync.get(function(items) 
    {
        for (var i=0; i<items.mydata.length; i++ )
        {
           var opt = document.createElement("option");
           opt.value= i;
           opt.innerHTML = items.mydata[i].yournickname;
           savedsum.appendChild(opt);
        }
        //Show username selected
        //savedsum.selectedIndex = items.yourindex;
    });
}

function savedatasearch()
{
	var indice = document.getElementById('savedsum').value;

	chrome.storage.sync.get(function(items) {
    servername = items.mydata[indice].yourserver;
    summonersname = items.mydata[indice].yournickname;
      
    chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
    chrome.tabs.create( { "url": "http://www.carry.gg/current/"+servername+"/"+summonersname+"/" } );

  });
  });
}

document.addEventListener('DOMContentLoaded', show);

document.getElementById('search').addEventListener('click', function() 
    {
    searchsum()
    });

document.getElementById('savedsum').addEventListener('change', function() 
    {
    savedatasearch()
    });