var OF_APP = OF_APP  || {};
var OF_DATA = OF_DATA || {};




/**
 * GAME
 */
OF_APP.game = {
  load: function() {
    OF_APP.file.readFile();
  },

  new: function() {
    if (document.location.href.indexOf("index.html") < 0) {
      document.location.href = "index.html"
    }

    fighter1  = document.getElementById("fighter1");
    fighter2  = document.getElementById("fighter2");
    power1    = document.getElementById("power1");
    power2    = document.getElementById("power2");
    weapon1   = document.getElementById("weapon1");
    weapon2   = document.getElementById("weapon2");
    location1 = document.getElementById("location1");
    nothing = document.getElementById("nothing");

    // Reset all the cards
    OF_APP.fighters.reset(fighter1);
    OF_APP.fighters.reset(fighter2);
    OF_APP.powers.reset(power1);
    OF_APP.powers.reset(power2);
    OF_APP.weapons.reset(weapon1);
    OF_APP.weapons.reset(weapon2);
    OF_APP.locations.reset(location1);
    OF_APP.nothing.reset(nothing)
  },

  shuffle: function() {
    document.location.href = "index.html"
  }
};



/**
 * FILE FUNCTIONS
 */
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

  readFile: function() {
    data = [];
    // Check if the app is online
    if (navigator.onLine) {
      // Get data from a shared Google Docs spreadsheet published to web and read as JSONP
      remote = "https://spreadsheets.google.com/feeds/list/15VybWTsJQ1N9NL-GTITUcDXtjC7x_b-c_LIWuS1-tPE/od6/public/values?alt=json-in-script";
      OF_APP.file.jsonp(remote, function(data){
        console.debug(data);
        OF_APP.file.writeLocal("openfight.json", data);
        OF_APP.file.writeLocal("FIGHTERS", OF_APP.file.readData("FIGHTERS", data));
        OF_APP.file.writeLocal("POWERS", OF_APP.file.readData("POWERS", data));
        OF_APP.file.writeLocal("WEAPONS", OF_APP.file.readData("WEAPONS", data));
        OF_APP.file.writeLocal("LOCATIONS", OF_APP.file.readData("LOCATIONS", data));
      });
    } else {
      // Check local storage for existing data
      if (data = OF_APP.file.readLocal("openfight.json")) {
        console.log("getting JSONP from local storage");
        console.debug(data);
        // Reset the local database
        OF_APP.file.writeLocal("FIGHTERS", OF_APP.file.readData("FIGHTERS", data));
        OF_APP.file.writeLocal("POWERS", OF_APP.file.readData("POWERS", data));
        OF_APP.file.writeLocal("WEAPONS", OF_APP.file.readData("WEAPONS", data));
        OF_APP.file.writeLocal("LOCATIONS", OF_APP.file.readData("LOCATIONS", data));
      } else {
        alert ("No internet connection detected and no local database available.\nConnect at least once to download the database.");
      }
    }
  },

  readData: function(dataType, dataSource) {
    i = 0;
    data = [];

    while ((dataSource.feed.entry[i] !== undefined)
    && (dataSource.feed.entry[i]["gsx$"+dataType.toLowerCase()]["$t"] !== "")) {
      data[i] = dataSource.feed.entry[i]["gsx$"+dataType.toLowerCase()]["$t"];
      i++;
    };
    return data;
  },

  removeData: function(dataType, index) {
    i = 0;
    dataSource = OF_APP.file.readLocal(dataType);

    // Save the modified deck back to local storage
    data = dataSource.splice(index, 1);
    console.log("removing "+dataType+": "+data);
    OF_APP.file.writeLocal(dataType, dataSource);
  },

  writeLocal: function(key, value){
    localStorage.setItem(key, JSON.stringify(value));
  },

  readLocal: function(key){
    value = localStorage.getItem(key);
    return value && JSON.parse(value);
  }
};

/**
 * CARD TYPES
 */


 OF_APP.nothing = {
   get: function(tag) {
     data = OF_DATA.file.readfile("NOTHING");
     index = Math.floor(Math.random() * data.length);
     name0 = data[index];
     console.log("getting nothing: "+name0);
     tag.innerText = name0
   }
 };


OF_APP.fighters = {
  get: function(tag) {
    // Check that button is not already active
    if (!tag.classList.contains("active")) {
      data = OF_APP.file.readLocal("FIGHTERS");

      // Check that there are still cards in this set
      if (data.length == 0) {
        // If not, then load the full set again
        console.log("reshuffle set: FIGHTERS");
        dataSource = OF_APP.file.readLocal("openfight.json");
        data = OF_APP.file.readData("FIGHTERS", dataSource);
        OF_APP.file.writeLocal("FIGHTERS", data);
      }

      name1 = document.getElementById("fighter1").innerText;
      name2 = document.getElementById("fighter2").innerText;

      // Loop values until a unique one is found
      do {
        index = Math.floor(Math.random() * data.length);
        name0 = data[index];
      }  while ((name0 == name1) || (name0 == name2));

      console.log("getting fighter: "+name0);
      OF_APP.file.removeData("FIGHTERS", index);

      // Update the page
      tag.innerText = name0;
      tag.classList.add("active");
    }
  },

  reset: function(tag) {
    console.log("resetting fighter...");
    tag.innerText = "Select your character";
    tag.classList.remove("active");
  }
};

OF_APP.powers = {
  get: function(tag) {
    // Check that button is not already active
    if (!tag.classList.contains("active")) {
      data = OF_APP.file.readLocal("POWERS");

      // Check that there are still cards in this set
      if (data.length == 0) {
        // If not, then load the full set again
        console.log("reshuffle set: POWERS");
        dataSource = OF_APP.file.readLocal("openfight.json");
        data = OF_APP.file.readData("POWERS", dataSource);
        OF_APP.file.writeLocal("POWERS", data);
      }

      name1 = document.getElementById("power1").innerText;
      name2 = document.getElementById("power2").innerText;

      // Loop values until a unique one is found
      do {
        index = Math.floor(Math.random() * data.length);
        name0 = data[index];
      }  while ((name0 == name1) || (name0 == name2));

      console.log("getting power: "+name0);
      OF_APP.file.removeData("POWERS", index);

      // Update the page
      tag.innerText = name0;
      tag.classList.add("active");
    }
  },

  reset: function(tag) {
    console.log("resetting power...");
    tag.innerText = "Select your superpower";
    tag.classList.remove("active");
  }
};

OF_APP.weapons = {
  get: function(tag) {
    // Check that button is not already active
    if (!tag.classList.contains("active")) {
      data = OF_APP.file.readLocal("WEAPONS");

      // Check that there are still cards in this set
      if (data.length == 0) {
        // If not, then load the full set again
        console.log("reshuffle set: WEAPONS");
        dataSource = OF_APP.file.readLocal("openfight.json");
        data = OF_APP.file.readData("WEAPONS", dataSource);
        OF_APP.file.writeLocal("WEAPONS", data);
      }

      name1 = document.getElementById("weapon1").innerText;
      name2 = document.getElementById("weapon2").innerText;

      // Loop values until a unique one is found
      do {
        index = Math.floor(Math.random() * data.length);
        name0 = data[index];
      }  while ((name0 == name1) || (name0 == name2));

      console.log("getting weapon: "+name0);
      OF_APP.file.removeData("WEAPONS", index);

      // Update the page
      tag.innerText = name0;
      tag.classList.add("active");
    }
  },

  reset: function(tag) {
    console.log("resetting weapon...");
    tag.innerText = "Select your weapon";
    tag.classList.remove("active");
  }
};

OF_APP.locations = {
  get: function(tag) {
    // Check that button is not already active
    if (!tag.classList.contains("active")) {
      data = OF_APP.file.readLocal("LOCATIONS");

      // Check that there are still cards in this set
      if (data.length == 0) {
        // If not, then load the full set again
        console.log("reshuffle set: LOCATIONS");
        dataSource = OF_APP.file.readLocal("openfight.json");
        data = OF_APP.file.readData("LOCATIONS", dataSource);
        OF_APP.file.writeLocal("LOCATIONS", data);
      }

      name1 = document.getElementById("location1").innerText;

      // Loop values until a unique one is found
      do {
        index = Math.floor(Math.random() * data.length);
        name0 = data[index];
      }  while (name0 == name1);

      console.log("getting location: "+name0);
      OF_APP.file.removeData("LOCATIONS", index);

      // Update the page
      console.log("getting location: "+name0);
      tag.innerText = name0;
      tag.classList.add("active");
    }
  },

  reset: function(tag) {
    console.log("resetting location...");
    tag.innerText = "Select your location";
    tag.classList.remove("active");
  }
};
