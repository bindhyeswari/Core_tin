
var xhr = new XMLHttpRequest();
console.log(xhr.readyState);
var isDataSet = false;
xhr.addEventListener('readystatechange', function () {



    if ( xhr.readyState === 4 && xhr.status === 200 ) {
        isDataSet = true;
        var obj = JSON.parse(xhr.responseText);
        console.log(typeof obj);

        var result = obj.sort(function(a, b){
            if(a.population > b.population)
                return -1;
            else if(a.population < b.population)
                return 1;
            else
                return 0;
        });

        console.log(obj);


        for(var i = 0; i < result.length; i++)
        {
            var div = document.createElement('div');
            div.innerHTML = result[i].name + ": " + result[i].population
            document.body.appendChild(div);
        }


        /*console.log(result);
         var names = obj.map(function (country) {
         return country.name;
         });
         console.log(names);*/
    }
});
xhr.open('GET', 'http://restcountries.eu/rest/v1');
xhr.send();