const places = {
    paris: {
        title: "Paris, France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
        description: "Paris is the capital city of France, known for the Eiffel Tower, art museums, and romantic atmosphere.",
        map: "https://www.google.com/maps/place/Paris/",
        images: "https://www.google.com/search?tbm=isch&q=Paris+France"
    },

    newyork: {
        title: "New York, USA",
        image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=800&q=80",
        description: "New York City is famous for Times Square, Statue of Liberty, and its vibrant lifestyle.",
        map: "https://www.google.com/maps/place/New+York/",
        images: "https://www.google.com/search?tbm=isch&q=New+York+City"
    },

   tokyo: {
    title: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80",
    description: "Tokyo is Japan's capital, known for modern skyscrapers, anime culture, and traditional temples.",
    map: "https://www.google.com/maps/place/Tokyo/",
    images: "https://www.google.com/search?tbm=isch&q=Tokyo+Japan"
}
};

window.onload = function() {

    const urlParams = new URLSearchParams(window.location.search);
    const placeKey = urlParams.get("place");

    if (placeKey && places[placeKey]) {

        document.getElementById("placeTitle").innerText = places[placeKey].title;
        document.getElementById("placeImage").src = places[placeKey].image;
        document.getElementById("placeDescription").innerText = places[placeKey].description;
        document.getElementById("googleMap").href = places[placeKey].map;
        document.getElementById("googleImages").href = places[placeKey].images;

    } else {

        document.getElementById("placeTitle").innerText = "Place Not Found";
        document.getElementById("placeDescription").innerText = "Sorry, no details available.";

    }
};