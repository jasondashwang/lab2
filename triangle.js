/**
 * TODO: Write your code here
 */
function calcPerimeter(a, b, c) {
  return a + b + c;
}

function calcType (a, b, c) {
  if (a === b && a === c) {
    return 'Equilatiral';
  } else if (a === c || b === c || a === b) {
    return 'Isosceles';
  } else {
    return 'Scalene';
  }
}

function calcAngles (a, b, c) {
  var a2 = a * a;
  var b2 = b * b;
  var c2 = c * c;
  var angleA = Math.acos((b2 + c2 - a2) / (2 * b * c));
  var angleB = Math.acos((a2 + c2 - b2) / (2 * a * c));
  var angleC = Math.acos((b2 + a2 - c2) / (2 * a * b));

  return [angleA, angleB, angleC].map(function (num) {
    return (180 * num) / Math.PI
  })
}

function calcAngleType (angles) {

  for (var i = 0; i < angles.length; i++) {
    if (angles[i] === 90) {
      return 'Right';
    } else if (angles[i] > 90) {
      return 'Obtuse';
    }
  }

  return 'Acute';
}

function calcArea (a, b, c) {
  var s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

$(document).ready(function (){
  $('#calculate').click(function () {
    $('#message').text('');
    $('#perimeter').text('');

    var a = +$('#a-side').val();
    var b = +$('#b-side').val();
    var c = +$('#c-side').val();

    if (!a || !b || !c) {
      $('#message').text('Invalid Input for Triangle');
    } else if (a + b <= c || b + c <= a || a + c <= b) {
      $('#message').text('Input is not a valid Triangle');
    } else {
      $('#perimeter').text(calcPerimeter(a, b, c));

      var angles = calcAngles(a, b, c);
      $('#angle-a').text(angles[0]);
      $('#angle-b').text(angles[1]);
      $('#angle-c').text(angles[2]);

      $('#message').text(calcAngleType(angles) + ' ' + calcType(a, b, c));
      $('#area').text(calcArea(a, b, c));
    }
  })
});
