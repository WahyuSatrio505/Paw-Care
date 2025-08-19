   // Google Maps
    function initMap() {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -6.2, lng: 106.8166 }, // Jakarta as default
            zoom: 10
        });
        // Contoh marker klinik
        new google.maps.Marker({
            position: { lat: -6.2, lng: 106.8166 },
            map: map,
            title: 'Klinik Hewan Sehat'
        });
    }
