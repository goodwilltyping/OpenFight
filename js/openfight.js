var OF_APP = OF_APP || {};

OF_APP.file = {
  readfile: function(filename) {
    console.log("getting data file: "+filename);
    return OFDATA[filename];
  }
};

OF_APP.fighters = {
  get: function(tag) {
    data = OF_APP.file.readfile("FIGHTERS");
    index = Math.floor(Math.random() * data.length);
    name0 = data[index];
    console.log("getting fighter: "+name0);
    tag.innerText = name0;
  }
};

OF_APP.powers = {
  get: function(tag) {
    data = OF_APP.file.readfile("POWERS");
    index = Math.floor(Math.random() * data.length);
    name0 = data[index];
    console.log("getting power: "+name0);
    tag.innerText = name0
  }
};

OF_APP.weapons = {
  get: function(tag) {
    data = OF_APP.file.readfile("WEAPONS");
    index = Math.floor(Math.random() * data.length);
    name0 = data[index];
    console.log("getting weapon: "+name0);
    tag.innerText = name0
  }
};

OF_APP.location = {
  get: function(tag) {
    data = OF_APP.file.readfile("LOCATIONS");
    index = Math.floor(Math.random() * data.length);
    name0 = data[index];
    console.log("getting location: "+name0);
    tag.innerText = name0
  }
};

OF_APP.nothing = {
  get: function(tag) {
    data = OF_APP.file.readfile("NOTHING");
    index = Math.floor(Math.random() * data.length);
    name0 = data[index];
    console.log("getting nothing: "+name0);
    tag.innerText = name0
  }
};
