(function () {
    "use strict";

    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                // Add the "in-view" class when the element is visible
                items[i].classList.add("in-view");
            } else {
                // Remove the "in-view" class when the element is not visible
                items[i].classList.remove("in-view");
            }
        }
    }

    // Listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
})();
  (function () {
    "use strict";

    // Select all the timeline items
    var items = document.querySelectorAll(".timeline-item");

    // Loop through each item and add click event listener
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            // Toggle the "expanded" class on click
            this.classList.toggle("expanded");

            // Find the `.more-info` element within the clicked item
            var moreInfo = this.querySelector(".more-info");

            // Toggle visibility of the more-info paragraph
            if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
                moreInfo.style.display = "block";
            } else {
                moreInfo.style.display = "none";
            }
        });
    });
})();

document.querySelectorAll('#openOverlay').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('overlay').classList.remove('hidden');
    });
});

document.getElementById('closeOverlay').addEventListener('click', () => {
    document.getElementById('overlay').classList.add('hidden');
});