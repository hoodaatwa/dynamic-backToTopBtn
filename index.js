  // Show or hide the button based on scroll position

  document.getElementById("container").onscroll = function() {

    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (document.getElementById("container").scrollTop > 0) {

      scrollToTopBtn.style.display = "block";

    } else {

      scrollToTopBtn.style.display = "none";

    }

  };



  // Scroll to the top of the container

  function scrollToTop() {

    document.getElementById("container").scrollTop = 0;

  }

  // Change button style based on input values

  function changeStyle() {

    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    var colorInput = document.getElementById("colorInput").value;

    var bgColorInput = document.getElementById("bgColorInput").value;

    var widthInput = document.getElementById("widthInput").value + "px";

    var heightInput = document.getElementById("heightInput").value + "px";

    var borderRadiusInput = document.getElementById("borderRadiusInput").value + "px";

    var positionRightInput = document.getElementById("positionRightInput").value + "px";

    var positionBottomInput = document.getElementById("positionBottomInput").value + "px";

    var positionLeftInput = document.getElementById("positionLeftInput").value + "px";

    var fontSizeInput = document.getElementById("fontSizeInput").value + "px";

    var paddingInput = document.getElementById("paddingInput").value + "px";



    // Update styles dynamically

    scrollToTopBtn.style.color = colorInput;

    scrollToTopBtn.style.backgroundColor = bgColorInput;

    scrollToTopBtn.style.width = widthInput;

    scrollToTopBtn.style.height = heightInput;

    scrollToTopBtn.style.borderRadius = borderRadiusInput;

    scrollToTopBtn.style.right = positionRightInput;

    scrollToTopBtn.style.bottom = positionBottomInput;

    scrollToTopBtn.style.left = positionLeftInput;

    scrollToTopBtn.style.fontSize = fontSizeInput;

    scrollToTopBtn.style.padding = paddingInput;



    // Update styles within the code tag

    var codeTag = document.getElementById("scrollToTopBtnCode");

    codeTag.innerHTML = '&lt;style id="scrollToTopBtnStyle"&gt;\n #scrollToTopBtn {\n display: none;\n position: absolute; /* Set to absolute position */\n border: none;\n cursor: pointer;\n text-align: center;\n right: ' + positionRightInput + ';\n left: ' + positionLeftInput + ';\n bottom: ' + positionBottomInput + ';\n padding: ' + paddingInput + ';\n color: ' + colorInput + ';\n background-color: ' + bgColorInput + ';\n width: ' + widthInput + ';\n height: ' + heightInput + ';\n border-radius: ' + borderRadiusInput + ';\n }\n&lt;/style&gt;\n&lt;button id="scrollToTopBtn" onclick="scrollToTop()"&gt;&lt;i class="fas fa-arrow-up"&gt;&lt;/i&gt;&lt;/button&gt;\n&lt;script&gt;\n // Show or hide the button based on scroll position\n window.onscroll = function() {\n var scrollToTopBtn = document.getElementById("scrollToTopBtn");\n if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {\n scrollToTopBtn.style.display = "block";\n } else {\n scrollToTopBtn.style.display = "none";\n }\n };\n\n // Scroll to the top of the page\n function scrollToTop() {\n document.body.scrollTop = 0; // For Safari\n document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera\n }\n&lt;/script&gt;';

  }

