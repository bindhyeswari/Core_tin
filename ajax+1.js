/**
 * Make ajax call
 * */

var xhr = new XMLHttpRequest();
console.log(xhr.readyState);
xhr.addEventListener('readystatechange', function () {
    if ( xhr.readyState === 4 && xhr.status === 200 ) {
        var obj = JSON.parse(xhr.responseText);
        console.log(Object.prototype.toString.call(obj));

        var unique = [];

        obj.forEach(function (country) {
            var stringified = JSON.stringify(country);
            if ( unique.indexOf(stringified) === -1 ) {
                unique.push(stringified);
            }
        });

        unique = unique.map(function (element) {
            return JSON.parse(element);
        });

        console.log(unique);



    }
});
xhr.open('GET', 'http://restcountries.eu/rest/v1');
xhr.send();

