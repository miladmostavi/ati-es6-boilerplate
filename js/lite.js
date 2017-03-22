export function boz(liteDevice) {
    console.log("boz");
    return JSON.stringify(
    {
        "apis": {
            "tag": {
//                "href": "https://amp.shazam.com/discovery/v1/" + liteDevice.language + "/" + liteDevice.country + "/android/lite/tag/{inid}/{tagid}",
                "maxsamplems": 10500,
                "minsamplems": 5000
            },
            "beacon": {
//                "href": "https://beacon.shazam.com/lite/"+ liteDevice.version + "/" + liteDevice.language + "/" + liteDevice.country + "/android/{devicemodel}/beacon/{inid}/"
            }
        }
    })
}
