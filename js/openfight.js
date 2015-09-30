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
    if (navigator.onLine) {
      // Get data from a shared Google Docs spreadsheet published to web and read as JSONP
      remote = "https://spreadsheets.google.com/feeds/list/15VybWTsJQ1N9NL-GTITUcDXtjC7x_b-c_LIWuS1-tPE/od6/public/values?alt=json-in-script";
      OF_APP.file.jsonp(remote, function(data){
        console.debug(data);
        OF_DATA = data;
        OF_APP.file.writelocal("FIGHTERS", OF_APP.file.readdata("FIGHTERS"));
        OF_APP.file.writelocal("POWERS", OF_APP.file.readdata("POWERS"));
        OF_APP.file.writelocal("WEAPONS", OF_APP.file.readdata("WEAPONS"));
        OF_APP.file.writelocal("LOCATIONS", OF_APP.file.readdata("LOCATIONS"));
      });
    } else {
      // CHeck localstorage for existing data
      if (data1 = OF_APP.file.readlocal("FIGHTERS")) {
        console.log("getting JSONP from localstorage");
        console.debug(data1);
      } else {
        alert ("No internet connection detected and no local database available.\nConnect at least once to download the database");
      }
    }
  },

  readdata: function(datatype) {
    i = 0;
    data = [];

    while ((OF_DATA.feed.entry[i] !== undefined)
    && (OF_DATA.feed.entry[i]["gsx$"+datatype.toLowerCase()]["$t"] !== "")) {
      data[i] = OF_DATA.feed.entry[i++]["gsx$"+datatype.toLowerCase()]["$t"];
    };
    return data;
  },

  writelocal: function(key, value){
    localStorage.setItem(key, JSON.stringify(value));
  },

  readlocal: function(key){
    var value = localStorage.getItem(key);
    return value && JSON.parse(value);
  }
};

OF_APP.fighters = {
  get: function(tag) {
    data = OF_APP.file.readlocal("FIGHTERS");
    name1 = document.getElementById("fighter1").innerText;
    name2 = document.getElementById("fighter2").innerText;
    do {
      index = Math.floor(Math.random() * data.length);
      name0 = data[index];
    }  while ((name0 == name1) || (name0 == name2));
    console.log("getting fighter: "+name0);
    tag.innerText = name0;
    tag.classList.add("active");
  }
};

OF_APP.powers = {
  get: function(tag) {
    data = OF_APP.file.readlocal("POWERS");
    name1 = document.getElementById("power1").innerText;
    name2 = document.getElementById("power2").innerText;
    do {
      index = Math.floor(Math.random() * data.length);
      name0 = data[index];
    }  while ((name0 == name1) || (name0 == name2));
    console.log("getting power: "+name0);
    tag.innerText = name0;
    tag.classList.add("active");
  }
};

OF_APP.weapons = {
  get: function(tag) {
    data = OF_APP.file.readlocal("WEAPONS");
    name1 = document.getElementById("weapon1").innerText;
    name2 = document.getElementById("weapon2").innerText;
    do {
      index = Math.floor(Math.random() * data.length);
      name0 = data[index];
    }  while ((name0 == name1) || (name0 == name2));
    console.log("getting weapon: "+name0);
    tag.innerText = name0;
    tag.classList.add("active");
  }
};

OF_APP.location = {
  get: function(tag) {
    data = OF_APP.file.readlocal("LOCATIONS");
    index = Math.floor(Math.random() * data.length);
    name0 = data[index];
    console.log("getting location: "+name0);
    tag.innerText = name0;
    tag.classList.add("active")
  }
};
