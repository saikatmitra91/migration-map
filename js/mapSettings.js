
AmCharts.makeChart("mapDiv", {
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
