    $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// הגדרת מיקומים של נקודות עניין במרכז רפואי אסף הרופא
var Asaf = new google.maps.LatLng(31.966056, 34.839477); // מיקום כללי של אזור של המרכז הרפואי אסף הרופא 
var myCenter = new google.maps.LatLng(31.966508, 34.840484); // נקודה מרכזית במפה של אסף הרופא 
var myCenter2 = new google.maps.LatLng(31.967981, 34.842667); // קניון אסף הרופא
var myCenter3 = new google.maps.LatLng(31.965799, 34.836954); // הנהלת אסף הרופא
var myCenter4 = new google.maps.LatLng(31.968646, 34.843361); // כניסה למרכז הרפואי
var myCenter5 = new google.maps.LatLng(31.968475, 34.844273); // תחנות אוטובוס
var myCenter6 = new google.maps.LatLng(31.966664, 34.837872); // מזכירות
var myCenter7 = new google.maps.LatLng(31.966690, 34.836718); // בית מרקחת
var myCenter8 = new google.maps.LatLng(31.967445, 34.840216); // משאבי אנוש
var myCenter9 = new google.maps.LatLng(31.965235, 34.843434); // באר יעקב
var myCenter10 = new google.maps.LatLng(31.968057, 34.837673); // ראשון לציון
var myCenter11 = new google.maps.LatLng(31.966772, 34.840809); // מרכז קליטה לעובדים חדשים
var myCenter12 = new google.maps.LatLng(31.964726, 34.839576);// מרכז ההדרכה

// הגדרת עיצוב לחלון נפתח בעת לחיצה על נקודת עניין 
var content1 = '<div id="content" style="direction:rtl;">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h3 id="firstHeading" class="firstHeading">מרכז רפואי אסף הרופא</h3>' +
      '<div id="bodyContent">' + '<img src="img/map/Assaf.jpg" style="width:170px;height:150px;">' +
      '<br><a href="http://www.assafh.org/Pages/default.aspx"target="_blank">' +
      'אתר הבית</a> ' +
      '</div>' +
      '</div>';

var content2 = '<div id="content" style="direction:rtl;">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h3 id="firstHeading" class="firstHeading">קניון אסף הרופא</h3>' +
      '<div id="bodyContent">' + '<img src="img/map/mall.jpg" style="width:170px;height:150px;">' +
      '</div>' +
      '</div>';

var content3 = '<div id="content" style="direction:rtl;">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h3 id="firstHeading" class="firstHeading">הנהלת המרכז הרפואי</h3>' +
      '<div id="bodyContent">' + '<img src="img/map/management.jpg" style="width:150px;height:150px;">' +
      '</div>' +
      '</div>';

var content4 = '<div id="content" style="direction:rtl;">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h3 id="firstHeading" class="firstHeading">כניסה למרכז הרפואי אסף הרופא</h3>' +
      '<div id="bodyContent">' + '<img src="img/map/entrance.jpg" style="width:150px;height:150px;">' +
      '</div>' +
      '</div>';

var content5 = '<div id="content" style="direction:rtl;">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h3 id="firstHeading" class="firstHeading">תחנות אוטובוס</h3>' +
      '<div id="bodyContent">' + '<img src="img/map/bus.jpg" style="width:150px;height:150px;">' +
      '</div>' +
      '</div>';

var content6 = '<div id="content" style="direction:rtl;">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h3 id="firstHeading" class="firstHeading">מזכירות</h3>' +
      '<div id="bodyContent">' + '<img src="img/map/secretary.jpg" style="width:150px;height:150px;">' +
      '</div>' +
      '</div>';

var content7 = '<div id="content" style="direction:rtl;">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h3 id="firstHeading" class="firstHeading">בית מרקחת</h3>' +
      '<div id="bodyContent">' + '<img src="img/map/Pharmacy.jpg" style="width:170px;height:150px;">' +
      '</div>' +
      '</div>';

var content8 = '<div id="content" style="direction:rtl;">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h3 id="firstHeading" class="firstHeading">משאבי אנוש</h3>' +
      '<div id="bodyContent">' + '<img src="img/map/human.jpg" style="width:170px;height:150px;">' +
      '</div>' +
      '</div>';

var content9 = '<div id="content" style="direction:rtl;">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h3 id="firstHeading" class="firstHeading">באר יעקב</h3>' +
      '<div id="bodyContent">' + '<img src="img/map/beeryakov.jpg" style="width:150px;height:170px;">' +
      '</div>' +
      '</div>';
var content10 = '<div id="content" style="direction:rtl;">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h3 id="firstHeading" class="firstHeading">ראשון לציון</h3>' +
      '<div id="bodyContent">' + '<img src="img/map/rishon.jpg" style="width:150px;height:170px;">' +
      '</div>' +
      '</div>';

var content11 = '<div id="content" style="direction:rtl;">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h3 id="firstHeading" class="firstHeading">מרכז קליטה לעובדים חדשים</h3>' +
      '<div id="bodyContent">' + '<img src="img/map/worker.jpg" style="width:150px;height:170px;">' +
      '</div>' +
      '</div>';

var content12 = '<div id="content" style="direction:rtl;">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h3 id="firstHeading" class="firstHeading">מרכז הדרכה</h3>' +
      '<div id="bodyContent">' + '<img src="img/map/instruction.jpg" style="width:150px;height:170px;">' +
      '</div>' +
      '</div>';


// פונקציית אתחול המפה וקביעת מיקום 
function initialize() {
    var mapOptions = {
        center: myCenter, zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("myGoogleMap"), mapOptions);
    var infowindow = new google.maps.InfoWindow({
        content: content1
    });
    var infowindow2 = new google.maps.InfoWindow({
        content: content2
    });
    var infowindow3 = new google.maps.InfoWindow({
        content: content3
    });
    var infowindow4 = new google.maps.InfoWindow({
        content: content4
    });
    var infowindow5 = new google.maps.InfoWindow({
        content: content5
    });
    var infowindow6 = new google.maps.InfoWindow({
        content: content6
    });
    var infowindow7 = new google.maps.InfoWindow({
        content: content7
    });
    var infowindow8 = new google.maps.InfoWindow({
        content: content8
    });
    var infowindow9 = new google.maps.InfoWindow({
        content: content9
    });
    var infowindow10 = new google.maps.InfoWindow({
        content: content10
    });
    var infowindow11 = new google.maps.InfoWindow({
        content: content11
    });
    var infowindow12 = new google.maps.InfoWindow({
        content: content12
    });


    // הוספת תמונה לאייקונים, הגדרת משתנה מרקר והוספת אנימציה בעת לחיצה
    var myIcon = 'img/map/magendavid.png'
    var marker = new google.maps.Marker({
        position: Asaf, animation: google.maps.Animation.DROP,
        icon: myIcon

    });
    var myIcon2 = 'img/map/mall.png'
    var marker2 = new google.maps.Marker({
        position: myCenter2, animation: google.maps.Animation.DROP,
        icon: myIcon2

    });

    var myIcon3 = 'img/map/management.png'
    var marker3 = new google.maps.Marker({
        position: myCenter3, animation: google.maps.Animation.DROP,
        icon: myIcon3

    });
    var myIcon4 = 'img/map/entrance.png'
    var marker4 = new google.maps.Marker({
        position: myCenter4, animation: google.maps.Animation.DROP,
        icon: myIcon4

    });
    var myIcon5 = 'img/map/bus.png'
    var marker5 = new google.maps.Marker({
        position: myCenter5, animation: google.maps.Animation.DROP,
        icon: myIcon5

    });
    var myIcon6 = 'img/map/secretary.png'
    var marker6 = new google.maps.Marker({
        position: myCenter6, animation: google.maps.Animation.DROP,
        icon: myIcon6

    });
    var myIcon7 = 'img/map/pharmacy.png'
    var marker7 = new google.maps.Marker({
        position: myCenter7, animation: google.maps.Animation.DROP,
        icon: myIcon7

    });
    var myIcon8 = 'img/map/human.png'
    var marker8 = new google.maps.Marker({
        position: myCenter8, animation: google.maps.Animation.DROP,
        icon: myIcon8

    });
    var myIcon9 = 'img/map/beeryakov.png'
    var marker9 = new google.maps.Marker({
        position: myCenter9, animation: google.maps.Animation.DROP,
        icon: myIcon9

    });
    var myIcon10 = 'img/map/rishon.png'
    var marker10 = new google.maps.Marker({
        position: myCenter10, animation: google.maps.Animation.DROP,
        icon: myIcon10

    });
    var myIcon11 = 'img/map/worker.png'
    var marker11 = new google.maps.Marker({
        position: myCenter11, animation: google.maps.Animation.DROP,
        icon: myIcon11

    });
    var myIcon12 = 'img/map/instruction.png'
    var marker12 = new google.maps.Marker({
        position: myCenter12, animation: google.maps.Animation.DROP,
        icon: myIcon12

    });
    //הגדרת אייקונים - מרקרים על המפה
    marker.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);
    marker4.setMap(map);
    marker5.setMap(map);
    marker6.setMap(map);
    marker7.setMap(map);
    marker8.setMap(map);
    marker9.setMap(map);
    marker10.setMap(map);
    marker11.setMap(map);
    marker12.setMap(map);

    ////הוספת אירועי לחיצה על אייקונים וקישור החלון הנפתח-פופאפ
    google.maps.event.addListener(marker, 'click', function () {
		infowindow.close();
		infowindow2.close();
        infowindow3.close();
        infowindow4.close();
        infowindow5.close();
        infowindow6.close();
        infowindow7.close();
        infowindow8.close();
        infowindow9.close();
        infowindow10.close();
        infowindow11.close();
        infowindow12.close();
		infowindow.open(map, marker);

    });

    google.maps.event.addListener(marker2, 'click', function () {
		infowindow.close();
		infowindow2.close();
        infowindow3.close();
        infowindow4.close();
        infowindow5.close();
        infowindow6.close();
        infowindow7.close();
        infowindow8.close();
        infowindow9.close();
        infowindow10.close();
        infowindow11.close();
        infowindow12.close();
        infowindow2.open(map, marker2);


    });
    google.maps.event.addListener(marker3, 'click', function () {
		infowindow.close();
		infowindow2.close();
        infowindow3.close();
        infowindow4.close();
        infowindow5.close();
        infowindow6.close();
        infowindow7.close();
        infowindow8.close();
        infowindow9.close();
        infowindow10.close();
        infowindow11.close();
        infowindow12.close();
        infowindow3.open(map, marker3);


    });
    google.maps.event.addListener(marker4, 'click', function () {
		infowindow.close();
		infowindow2.close();
        infowindow3.close();
        infowindow4.close();
        infowindow5.close();
        infowindow6.close();
        infowindow7.close();
        infowindow8.close();
        infowindow9.close();
        infowindow10.close();
        infowindow11.close();
        infowindow12.close();
        infowindow4.open(map, marker4);


    });
    google.maps.event.addListener(marker5, 'click', function () {
		infowindow.close();
		infowindow2.close();
        infowindow3.close();
        infowindow4.close();
        infowindow5.close();
        infowindow6.close();
        infowindow7.close();
        infowindow8.close();
        infowindow9.close();
        infowindow10.close();
        infowindow11.close();
        infowindow12.close();
        infowindow5.open(map, marker5);


    });

    google.maps.event.addListener(marker6, 'click', function () {
		infowindow.close();
		infowindow2.close();
        infowindow3.close();
        infowindow4.close();
        infowindow5.close();
        infowindow6.close();
        infowindow7.close();
        infowindow8.close();
        infowindow9.close();
        infowindow10.close();
        infowindow11.close();
        infowindow12.close();
        infowindow6.open(map, marker6);

    });

    google.maps.event.addListener(marker7, 'click', function () {
		infowindow.close();
		infowindow2.close();
        infowindow3.close();
        infowindow4.close();
        infowindow5.close();
        infowindow6.close();
        infowindow7.close();
        infowindow8.close();
        infowindow9.close();
        infowindow10.close();
        infowindow11.close();
        infowindow12.close();
        infowindow7.open(map, marker7);


    });
    google.maps.event.addListener(marker8, 'click', function () {
		infowindow.close();
		infowindow2.close();
        infowindow3.close();
        infowindow4.close();
        infowindow5.close();
        infowindow6.close();
        infowindow7.close();
        infowindow8.close();
        infowindow9.close();
        infowindow10.close();
        infowindow11.close();
        infowindow12.close();
        infowindow8.open(map, marker8);


    });
    google.maps.event.addListener(marker9, 'click', function () {
		infowindow.close();
		infowindow2.close();
        infowindow3.close();
        infowindow4.close();
        infowindow5.close();
        infowindow6.close();
        infowindow7.close();
        infowindow8.close();
        infowindow9.close();
        infowindow10.close();
        infowindow11.close();
        infowindow12.close();
        infowindow9.open(map, marker9);

    });
    google.maps.event.addListener(marker10, 'click', function () {
		infowindow.close();
		infowindow2.close();
        infowindow3.close();
        infowindow4.close();
        infowindow5.close();
        infowindow6.close();
        infowindow7.close();
        infowindow8.close();
        infowindow9.close();
        infowindow10.close();
        infowindow11.close();
        infowindow12.close();
        infowindow10.open(map, marker10);

    });
    google.maps.event.addListener(marker11, 'click', function () {
		infowindow.close();
		infowindow2.close();
        infowindow3.close();
        infowindow4.close();
        infowindow5.close();
        infowindow6.close();
        infowindow7.close();
        infowindow8.close();
        infowindow9.close();
        infowindow10.close();
        infowindow11.close();
        infowindow12.close();
        infowindow11.open(map, marker11);

    });
    google.maps.event.addListener(marker12, 'click', function () {
		infowindow.close();
		infowindow2.close();
        infowindow3.close();
        infowindow4.close();
        infowindow5.close();
        infowindow6.close();
        infowindow7.close();
        infowindow8.close();
        infowindow9.close();
        infowindow10.close();
        infowindow11.close();
        infowindow12.close();
        infowindow12.open(map, marker12);

    });


    //הוספת אירוע טעינת מפה ואתחול
}
google.maps.event.addDomListener(window, 'load', initialize);
