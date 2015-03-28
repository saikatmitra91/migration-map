
var map = AmCharts.makeChart("mapDiv", {
    type: "map",
    pathToImages: "images/maps/",
    addClassNames: true,
    dataProvider: {
        map: "worldLow",
        linkToObject: "thane",
        images: datapoints
    },
    areasSettings: {
        unlistedAreasColor: "#FFCC00"
    },
    imagesSettings: {
        color: "#CC0000",
        rollOverColor: "#CC0000",
        selectedColor: "#000000"
    },
    linesSettings: {
        color: "#CC0000",
        alpha: 0.6,
        dashLength: 1
    },
    backgroundZoomsToTop: true,
    linesAboveImages: true,
    showImagesInList: true
});


map.addListener("clickMapObject", function (event) {
    var $target = $(event.event.target);
    var classname = $target.attr('class').split(/\s+/)[1];
    var splitArr = classname.split('-');
    var city = splitArr.slice(3,splitArr.length).join('');
    var dataMap = fetchCityData(city);
    updateView(dataMap,city);
});

function fetchCityData(city){
    if(!city){
        throw Error("Not a city");
    }
    var dataMap = {
        "outbound" : 0,
        "cities" : []
    }
    var i=0;
    var details = {};
    while (details.id != city){
        details = datapoints[i++];
        if(!datapoints){
            break;
        }
    }

    for( i=0;i<details.lines.length;i++){
        dataMap.outbound += parseInt(details.lines[i].balloonText); 
        dataMap.cities.push(details.lines[i].doctor_city);
        dataMap[details.lines[i].doctor_city] = details.lines[i].balloonText;
    }
    return dataMap;
};

function updateView(dataMap,city){
    $('.right-slider').fadeIn();
    $('.city-name').html(city);
    $('.total-value').html(dataMap.outbound);
    var i = 0;
    var htmlStr = "<ol>";
    for(i=0;i<dataMap.cities.length;i++){
        htmlStr += "<li class='city-list-name'>" + dataMap.cities[i] + " : " + dataMap[dataMap.cities[i]] + "</li>";
    }
    htmlStr += "</ol>";
    $('.top-city-list').html(htmlStr);
};