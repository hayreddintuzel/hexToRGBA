exports.hexConverter = function hexToRGBA(hex, opacity) {
  var a;
  //validating data
  var regex1 = RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
  var regex2 = RegExp("^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
  if (!(regex1.test(hex) || regex2.test(hex))) {
    return false;
  }

  //validating opacity and deciding its value
  if (opacity > 1 || opacity < 0) {
    return false;
  } else {
    a = opacity;
  }

  //removing #
  if (hex.charAt(0) === "#") {
    hex = hex.substr(1);
  }
  var values = hex.split(""),
    r,
    g,
    b;
  //computing rgba values
  if (hex.length === 3) {
    r = parseInt(values[0].toString() + values[0].toString(), 16);
    g = parseInt(values[1].toString() + values[1].toString(), 16);
    b = parseInt(values[2].toString() + values[2].toString(), 16);
  } else if (hex.length === 6) {
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = parseInt(values[2].toString() + values[3].toString(), 16);
    b = parseInt(values[4].toString() + values[5].toString(), 16);
  } else {
    return false;
  }
  return [r, g, b, a];
}

