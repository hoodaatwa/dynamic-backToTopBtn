
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



  const currentPageLocation = window.location.href;

  let displayedRepos = 0; // Counter for displayed repositories



  // Fetch data from GitHub API

  fetch('https://api.github.com/users/hoodaatwa/repos')

    .then(response => response.json())

    .then(data => {

      // Extract topics of the current repository

      const currentRepoTopics = data

        .filter(repo => repo.homepage === currentPageLocation)

        .flatMap(repo => repo.topics || []);



      // Create Material-UI card for each repository with the same topics

      const repoList = document.getElementById('repoList');

      data.forEach(repo => {

        const repoTopics = repo.topics || [];



        if (

          displayedRepos >= 4 ||

          repo.homepage === currentPageLocation ||

          !repoTopics.some(topic => currentRepoTopics.includes(topic))

        ) {

          // Skip creating card if reached the limit, homepage matches current page location,

          // or repository has no common topics

          return;

        }



        const repoCard = document.createElement('div');

        repoCard.classList.add('repoCard');

        repoCard.innerHTML = `

          <div class="repoTitle">${repo.name}</div>

          <div class="repoDescription">${repo.description}</div>

          <div class="repoLink">

            <a href="${repo.homepage}" target="_blank">Homepage <i class="fas fa-external-link-alt"></i></a>

          </div>

        `;

        repoList.appendChild(repoCard);



        displayedRepos++;

      });



      // Find the "Main" repository and create a special card with a dynamic link

      const mainRepo = data.find(repo => repo.name.toLowerCase() === 'main');

      if (mainRepo) {

        const mainRepoCard = document.createElement('div');



        mainRepoCard.innerHTML = `

          <a class="center" href="${mainRepo.homepage}" target="_blank">Go to Main Page <i class="fas fa-external-link-alt"></i></a>

        `;

        repoList.appendChild(mainRepoCard);

      }

    })

    .catch(error => console.error('Error fetching data:', error));



  function toggleMenu() {

    const menuOverlay = document.getElementById('menuOverlay');

    const body = document.body;

    const menuIcon = document.getElementById('menuIcon');



    if (menuOverlay.style.display === 'block') {

      menuOverlay.style.display = 'none';

      body.style.overflow = 'auto';

      menuIcon.classList.replace('fa-times', 'fa-bars');

    } else {

      menuOverlay.style.display = 'block';

      body.style.overflow = 'hidden';

      menuIcon.classList.replace('fa-bars', 'fa-times');

    }

  }

