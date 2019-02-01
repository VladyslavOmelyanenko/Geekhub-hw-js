'use strict';

test('test_string', () => {
let str = "Hello"
let str2 = "My name is Vlad"
let str3 = "Hello world!  "
expect(str.length).toEqual(5);
expect(str[0]).toEqual("H");
expect(str.charAt(1)).toEqual("e");
expect(str[2] + str[3] + str[4]).toEqual("llo");
expect(str.toUpperCase()).toEqual("HELLO");
expect(str.toLowerCase()).toEqual("hello");
expect(str.indexOf("e")).toEqual(1);
expect(str.lastIndexOf("l")).toEqual(3);
expect(str.substring(1, 4)).toEqual("ell");
expect(str.substr(2 ,2)).toEqual("ll");
expect(str.slice(1, 5)).toEqual("ello");
expect(str.localeCompare("bye")).toEqual(1);
expect(str.concat(", Vlad!")).toEqual("Hello, Vlad!");
expect(str.replace("l", "d")).toEqual("Hedlo");
expect(str.codePointAt('2')).toEqual(108);
expect(str.endsWith("lo")).toEqual(true);
expect(str.includes("el")).toEqual(true);
expect(str.repeat(2)).toEqual("HelloHello");
expect(str.search(/a/)).toEqual(-1);
expect(str2.split(" ")).toEqual(["My", "name", "is", "Vlad"]);
expect(str.startsWith("H")).toEqual(true);
expect(str.toString()).toEqual("Hello");
expect(str3.trim()).toEqual("Hello world!");
expect(str.valueOf()).toEqual("Hello");
});

test('test_numbers', () => {
let number = 1234
let number2 = 10.5
expect(isFinite(number)).toEqual(true);
expect(Number.isInteger(number2)).toEqual(false);
expect(Number.isNaN(number)).toEqual(false);
expect(Number.isSafeInteger(number)).toEqual(true);
expect(Number.parseFloat(number)).toEqual(1234.0);
expect(Number.parseInt(number2)).toEqual(10);
expect(number2.toExponential()).toEqual("1.05e+1");
expect(number2.toFixed()).toEqual("11");
expect(number.toPrecision()).toEqual("1234");
expect(number.toString()).toEqual("1234");
expect(number2.valueOf()).toEqual(10.5);
});

test('test_arrays', () => {
let arr = ["apple" , "pear", "plum", "orange"]
expect(arr.length).toEqual(4);
expect(arr.join(", ")).toEqual("apple, pear, plum, orange");
expect(arr[1]).toEqual("pear");
expect(arr.splice(3, 1)).toEqual(["orange"]);
expect(arr.shift()).toEqual("apple");
expect(arr.pop()).toEqual("plum");
let arr2 = ["apple" , "pear", "plum", "orange"]
expect(arr2.sort()).toEqual(["apple", "orange", "pear", "plum"]);
expect(arr2.reverse()).toEqual(["plum", "pear", "orange", "apple"]);
expect(arr2.concat("banana", "lemon")).toEqual(["plum", "pear", "orange", "apple", "banana", "lemon"]);
expect(arr2.indexOf("pear")).toEqual(1);
expect(Array.from(arr)).toEqual(["pear"]);
expect(Array.isArray(arr2)).toEqual(true);
expect(Array.of(1, 2, 3, 4)).toEqual([1, 2, 3, 4])
expect(arr2.every(function(element, index, arr2){
    return element.length >= 5
})).toEqual(false)
expect(arr2.fill(0)).toEqual([0, 0, 0, 0])
let arr3 = [1, 2, 3, 4, 5]
expect(arr3.includes(2)).toEqual(true)
expect(arr3.indexOf(3)).toEqual(2)
expect(arr3.push(6)).toEqual(6)
expect(arr3.toString()).toEqual("1,2,3,4,5,6")
expect(arr2.fill(0)).toEqual([0, 0, 0, 0])
expect(arr3.unshift(0)).toEqual(7)
});