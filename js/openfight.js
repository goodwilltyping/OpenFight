var OF_APP  = OF_APP  || {};
var OF_DATA = OF_DATA || {};

OF_APP.file = {
  jsonp: function(url, callback) {
    console.log("getting JSONP file data: "+url);
    callbackName = 'jsonp_callback_' + Date.now();
    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    var script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
  },

  readfile: function() {
    // File is a Google Docs spreadsheet
    remote = "https://spreadsheets.google.com/feeds/list/15VybWTsJQ1N9NL-GTITUcDXtjC7x_b-c_LIWuS1-tPE/od6/public/values?alt=json-in-script";
    OF_APP.file.jsonp(remote, function(data){
      console.debug(data);
      OF_DATA = data;
    });
  },

  readdata: function(datatype) {
    i = 0;
    data = [];

    while ((OF_DATA.feed.entry[i] !== undefined)
    && (OF_DATA.feed.entry[i]["gsx$"+datatype.toLowerCase()]["$t"] !== "")) {
      data[i] = OF_DATA.feed.entry[i++]["gsx$"+datatype.toLowerCase()]["$t"];
    };
    return data;
  }
};

OF_APP.fighters = {
  get: function(tag) {
    data = OF_APP.file.readdata("FIGHTERS");
    do {
      index = Math.floor(Math.random() * data.length);
      name0 = data[index];
      name1 = document.getElementById("fighter1").innerText;
      name2 = document.getElementById("fighter2").innerText;
      console.log("getting fighter: "+name0);
      tag.innerText = name0;
      tag.classList.add("active");
    }  while ((name0 == name1) || (name0 == name2));
  }
};

OF_APP.powers = {
  get: function(tag) {
    data = OF_APP.file.readdata("POWERS");
    do {
      index = Math.floor(Math.random() * data.length);
      name0 = data[index];
      name1 = document.getElementById("power1").innerText;
      name2 = document.getElementById("power2").innerText;
      console.log("getting power: "+name0);
      tag.innerText = name0;
      tag.classList.add("active");
    }  while ((name0 == name1) || (name0 == name2));
  }
};

OF_APP.weapons = {
  get: function(tag) {
    data = OF_APP.file.readdata("WEAPONS");
    do {
      index = Math.floor(Math.random() * data.length);
      name0 = data[index];
      name1 = document.getElementById("weapon1").innerText;
      name2 = document.getElementById("weapon2").innerText;
      console.log("getting weapon: "+name0);
      tag.innerText = name0;
      tag.classList.add("active");
    }  while ((name0 == name1) || (name0 == name2));
  }
};

OF_APP.location = {
  get: function(tag) {
    data = OF_APP.file.readdata("LOCATIONS");
    index = Math.floor(Math.random() * data.length);
    name0 = data[index];
    console.log("getting location: "+name0);
    tag.innerText = name0;
    tag.classList.add("active")
  }
};
