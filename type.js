var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4, 5];
var f = [1, true, 'a', false];
var ColorReed = 3;
var ColorGreen = 4;
var ColorBlue = 5;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
var backgroudColor = Color.Green;
