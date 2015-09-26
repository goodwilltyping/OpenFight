var OFAPP = OFAPP || {};

OFAPP.file = {
  readfile: function(filename) {
    console.log("getting data file: "+filename);
    return OFDATA[filename];
  }
};

OFAPP.fighter = {
  get: function(tag) {
    data = OFAPP.file.readfile("FIGHTERS");
    index = Math.floor(Math.random() * data.length);
    name0 = data[index];
    console.log("getting fighter: "+name0);
    tag.innerText = name0;
  }
};

OFAPP.power = {
  get: function() {
    console.log("getting power: ");
  }
};

OFAPP.weapon = {
  get: function() {
    console.log("getting weapon: ");
  }
};

OFAPP.location = {
  get: function() {
    console.log("getting location: ");
  }
};
