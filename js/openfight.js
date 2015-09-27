var OFAPP = OFAPP || {};

OFAPP.file = {
  readfile: function(filename) {
    console.log("getting data file: "+filename);
    return OFDATA[filename];
  }
};

OFAPP.fighters = {
  get: function(tag) {
    data = OFAPP.file.readfile("FIGHTERS");
    index = Math.floor(Math.random() * data.length);
    name0 = data[index];
    console.log("getting fighter: "+name0);
    tag.innerText = name0;
  }
};

OFAPP.powers = {
  get: function(tag) {
    data = OFAPP.file.readfile("POWERS");
    index = Math.floor(Math.random() * data.length);
    name0 = data[index];
    console.log("getting power: "+name0);
    tag.innerText = name0
  }
};

OFAPP.weapons = {
  get: function(tag) {
    data = OFAPP.file.readfile("WEAPONS");
    index = Math.floor(Math.random() * data.length);
    name0 = data[index];
    console.log("getting weapon: "+name0);
    tag.innerText = name0
  }
};

OFAPP.location = {
  get: function(tag) {
    data = OFAPP.file.readfile("LOCATIONS");
    index = Math.floor(Math.random() * data.length);
    name0 = data[index];
    console.log("getting location: "+name0);
    tag.innerText = name0
  }
};

OFAPP.nothing = {
  get: function(tag) {
    data = OFAPP.file.readfile("NOTHING");
    index = Math.floor(Math.random() * data.length);
    name0 = data[index];
    console.log("getting nothing: "+name0);
    tag.innerText = name0
  }
};
