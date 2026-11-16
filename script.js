
"use strict";

// FIRST OBJECT - CAR SPECIFICATIONS

const carDetails = {
    brand: "Mercedes-Benz",
    model: "S-Class",
    engine: "V8 Biturbo",
    color: "Obsidian Black"
};


// SECOND OBJECT - COLLECTION DETAILS

const collectionDetails = {
    category: "Luxury Sedan",
    interior: "Premium Leather",
    edition: "Royal Signature",
    availability: "In Stock"
};


// MERGE TWO OBJECTS

function mergeObjects() {

    const mergedObject = Object.assign(
        {},
        carDetails,
        collectionDetails
    );

    document.getElementById("result").textContent =
        JSON.stringify(mergedObject, null, 4);

    document.getElementById("output").style.display = "block";

}


// RESET FUNCTION

function resetObjects() {

    document.getElementById("output").style.display = "none";

    document.getElementById("result").textContent = "";

    alert("Royal Collection has been reset successfully!");

}
