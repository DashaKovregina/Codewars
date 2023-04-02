var cubeChecker = function(volume, side){
    if (side < 0){
    return false
    }
    else if (volume/side**3 == 1) {
    return true;
    } else {
    return false;
    }
};