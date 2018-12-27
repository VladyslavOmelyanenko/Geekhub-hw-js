function toNorth() {
    if (isFree('north')){
        if (north() == 'end') {
            return 0;
        }
        toEast();
    } else {
        toWest();
    }
};

function toSouth() {
    if (isFree('south')){
        if (south() == 'end') {
            return 0;
        }
        toWest();
    } else {
        toEast();
    }
};

function toWest() {
    if (isFree('west')){
        if (west() == 'end') {
            return 0;
        }
        toNorth();
    } else {
        toSouth();
    }
};

function toEast() {
    if (isFree('east')){
        if (east() == 'end') {
            return 0;
        }
        toSouth();
    } else {
        toNorth();
    }
};

toNorth();