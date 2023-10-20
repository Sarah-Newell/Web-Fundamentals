var hoverElement1 = document.getElementById("hoverElement1");
var popupText1 = document.getElementById("popupText1");

hoverElement1.onmouseover = function () {
    popupText1.classList.remove("hiddenTraining");
};
hoverElement1.onmouseout = function () {
    popupText1.classList.add("hiddenTraining");
};



var hoverElement2 = document.getElementById("hoverElement2");
var popupText2 = document.getElementById("popupText2");

hoverElement2.onmouseover = function () {
    popupText2.classList.remove("hiddenGrooming");
};
hoverElement2.onmouseout = function () {
    popupText2.classList.add("hiddenGrooming");
};



var hoverElement3 = document.getElementById("hoverElement3");
var popupText3 = document.getElementById("popupText3");

hoverElement3.onmouseover = function () {
    popupText3.classList.remove("hiddenBoarding");
};
hoverElement3.onmouseout = function () {
    popupText3.classList.add("hiddenBoarding");
};


var hoverElement4 = document.getElementById("hoverElement4");
var popupText4 = document.getElementById("popupText4");

hoverElement4.onmouseover = function () {
    popupText4.classList.remove("hiddenDaycare");
};
hoverElement4.onmouseout = function () {
    popupText4.classList.add("hiddenDaycare");
};
        





















var startDateInput = document.getElementById("startDate");
        var endDateInput = document.getElementById("endDate");
            startDateInput.addEventListener("input", function () {
        var startDate = new Date(startDateInput.value);
        var endDate = new Date(endDateInput.value);

            if (startDate > endDate) {
                endDateInput.value = startDateInput.value;
            }
        }); 
                endDateInput.addEventListener("input", function () {
           
        var startDate = new Date(startDateInput.value);
        var endDate = new Date(endDateInput.value);

            if (endDate < startDate) {
                startDateInput.value = endDateInput.value;
            }
        });