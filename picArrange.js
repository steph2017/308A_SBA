export async function picArrange(deptId) {
    //attempt to fetch images based on provided deptID then arrange pic and other info into a useful array
    const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=" + deptId);
    const jsonData = await response.json(); // returns an object with a 2 key value pairs - we want the array of values corresponding to "objectIDs"
    const idList = jsonData.objectIDs;
    let picID = 0;
    const picArray = [];
    let picInfo = "";

    //Attempting to fetch data for 15 ids chosen at random
    for (let i = 0; i < 15; i++) {
        picID = idList[Math.round(Math.random() * (idList.length - 1))];
        const resPhoto = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + picID);
        const getPhoto = await resPhoto.json();
        if (!getPhoto.primaryImage) {
            i--;
            continue;
        }
        picInfo = "Title: " + getPhoto.title + "\n" +
            "Medium: " + getPhoto.medium + "\n"
        "Artist: " + getPhoto.artistDisplayName + ", " + getPhoto.artistDisplayBio + "\n" +
            "Date: " + getPhoto.objectDate + "\n";
        picArray[i] = {
            id: picID,
            url: getPhoto.primaryImage,
            alt: "image of \"" + getPhoto.title + "\"",
            info: picInfo
        };
        console.log(picArray);
    }
    return picArray;
}