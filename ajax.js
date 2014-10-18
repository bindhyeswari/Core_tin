/**
 * Make ajax call
 * */

var xhr = new XMLHttpRequest();
console.log(xhr.readyState);
xhr.addEventListener('readystatechange', function () {
    if ( xhr.readyState === 4 && xhr.status === 200 ) {
        var obj = JSON.parse(xhr.responseText);
        console.log(typeof obj);
        var names = obj.map(function (country) {
            return country.name;
        });
        console.log(names);
    }
});
xhr.open('GET', 'http://restcountries.eu/rest/v1');
xhr.send();

