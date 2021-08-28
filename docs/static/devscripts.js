function periodictable (){
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://periodictable.p.rapidapi.com/",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "periodictable.p.rapidapi.com",
            "x-rapidapi-key": "3863c2188fmshb85628b2c504fbfp14a1b5jsnb1ad9bb2056f"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

}