var mainUrl = "https://spring-library-app.herokuapp.com";
//var mainUrl = "http://localhost:8080";

function getBooksForLibrary(parameters, callback){
    var url = mainUrl + '/api/books/all';
    var xhr = createCORSRequest('GET', url);
    xhr.setRequestHeader("Content-Type", "application/json");
    //xhr.setRequestHeader("Authorization", "Basic a2xhdWRpdXN6LnNrb3dyb25za2k6Y0BtZWxocDEx");
    if (!xhr) {
        alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function() {
        callback(null,  xhr.responseText);
    };

    xhr.onerror = function() {
        alert('Woops, cant get data.');
    };
    xhr.send();
}


function addBooksToLibrary(parameters, callback){
    var url = mainUrl + '/api/books';
    var xhr = createCORSRequest('POST', url);
    xhr.setRequestHeader("Content-Type", "application/json");
    //xhr.setRequestHeader("Authorization", "Basic a2xhdWRpdXN6LnNrb3dyb25za2k6Y0BtZWxocDEx");
    if (!xhr) {
        alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function() {
        callback(null,  xhr.responseText);
    };

    xhr.onerror = function() {
        alert('Woops, cant get data.');
    };
    xhr.send(JSON.stringify(parameters));
}

function deleteBookFromLibrary(parameters){
    var url = mainUrl + '/api/books?id=' + parameters.id;
    var xhr = createCORSRequest('DELETE', url);
    xhr.setRequestHeader("Content-Type", "application/json");
    //xhr.setRequestHeader("Authorization", "Basic a2xhdWRpdXN6LnNrb3dyb25za2k6Y0BtZWxocDEx");
    if (!xhr) {
        alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function() {

    };

    xhr.onerror = function() {
        alert('Woops, cant get data.');
    };
    xhr.send();
}



// Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}