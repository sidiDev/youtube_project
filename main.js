/* { START } this codes craeted to show and hide the Note of search input and the Notes of the settings in header*/


var search = document.getElementById('search-btn');

search.onmouseenter = function () {
    var spanTag = document.querySelector('.search-class .search span');
        spanTag.style.opacity = "1";
}

search.onmouseleave = function () {
    var spanTag = document.querySelector('.search-class .search span');
        spanTag.style.opacity = "0";
}

var spanTag = document.querySelectorAll('.settings #sg-btn');

for (var i = 0; i < spanTag.length; i++) {

    spanTag[i].onmouseenter = function () {

            this.parentElement.childNodes[1].style.opacity = '1';

    }

    spanTag[i].onmouseleave = function () {

        spanTag[0].parentElement.childNodes[1].style.opacity = '0';
        spanTag[1].parentElement.childNodes[1].style.opacity = '0';
        spanTag[2].parentElement.childNodes[1].style.opacity = '0';
    }
 }

/* { END } */

/* { START } this codes created to show and hide options of the settings in header */

var settingsBox = document.querySelectorAll('.settingsBox');

for (var i = 0; i < settingsBox.length; i++) {

    settingsBox[i].nextElementSibling.classList.add('sg-box');

    settingsBox[i].onclick = function () {

        this.parentElement.childNodes[1].style.opacity = '0';

        if (this.nextElementSibling.classList.contains('sg-box')) {

            settingsBox[0].nextElementSibling.classList.add("sg-box");
            settingsBox[1].nextElementSibling.classList.add("sg-box");
            settingsBox[2].nextElementSibling.classList.add("sg-box");

            this.nextElementSibling.classList.remove("sg-box");

        } else {

            this.nextElementSibling.classList.add("sg-box");

        }

    }


}


/* { END } */

/* { START } this codes created to open and close the menu */

function openCloseMenu () {

    var openCloseMenu = document.getElementById('options-class'),
        lastPartMenu = document.getElementById('last-menu-sgs'),
        menuContainer = document.getElementById('menuContainer'),
        allVideosClass = document.getElementById('all-videos-class'),
        menuClass = document.getElementById('menu-class'),
        menuCover = document.getElementById('menu-cover'),
        videosContainerClass = document.querySelectorAll('article .video-container');

    openCloseMenu.classList.toggle('openCloseMenu');
    lastPartMenu.classList.toggle('lastPartMenu');
    allVideosClass.classList.toggle('all-videos-class-by-js');

    if (menuContainer.classList.contains('menu-container-by-js')) {

        menuContainer.className += 'menuContainerCloseed';
        menuContainer.classList.remove('menuContainer-by-js')
        menuContainer.classList.remove('menu-container-by-js');
        menuContainer.classList.add('removeScrollBar');

    } else {

        menuContainer.classList.remove('menuContainerCloseed');
        menuContainer.classList.remove('menuContainer-by-js');
        menuContainer.classList.remove('removeScrollBar');
        menuContainer.classList.add('menu-container-by-js');
    }

    for (var i = 0; i < videosContainerClass.length; i++) {

        if (allVideosClass.classList.contains('all-videos-class-by-js')) {

            videosContainerClass[i].classList.add('video-container-by-js');

        } else {

            videosContainerClass[i].classList.remove('video-container-by-js');

        }
    }

    var scrollBarBody = document.querySelector('body');

    menuClass.classList.add('openMenu');
    menuCover.classList.add('menu-cover');
    scrollBarBody.classList.add('moveScrollBar');
}

var menuClass = document.getElementById('menu-class'),
    menuCover = document.getElementById('menu-cover'),
    scrollBarBody = document.querySelector('body');

function closeMenu () {

    menuClass.classList.remove('openMenu');
    menuCover.classList.remove('menu-cover');
    scrollBarBody.classList.remove('moveScrollBar');
}

/* { END } */

/* { START } this codes created to show and hide add-to-queue in video container */

var addToQueueBtn = document.querySelectorAll('.add-to-queue-class .add-to-queue-img');

for (var i = 0; i < addToQueueBtn.length; i++) {

    addToQueueBtn[i].onclick = function () {

        this.parentElement.childNodes[3].classList.toggle('hideShowaddToQueue');
    }
}

var addToQueueClass = document.querySelectorAll('.video-container');

for (var i = 0; i < addToQueueClass.length; i++) {

    addToQueueClass[i].onmouseenter = function () {

        this.childNodes[7].childNodes[9].style.display = 'block';
    }

    addToQueueClass[i].onmouseleave = function () {

        this.childNodes[7].childNodes[9].style.display = 'none';


        for (var i = 0; i < addToQueueBtn.length; i++) {

            addToQueueBtn[i].parentElement.childNodes[3].classList.remove('hideShowaddToQueue')

        }

        // this codes created to change settings title and image in click

        var queueOptionBtn = document.querySelectorAll('.video-settings .queue-option-btn');
        
        queueOptionBtn.forEach((e) => {
        
            e.childNodes[1].setAttribute('src' , 'images/add-to.png');
            e.parentElement.childNodes[1].style.backgroundColor = "#000";
            e.parentElement.childNodes[3].childNodes[1].textContent = "ADD TO QUEUE";
            e.parentElement.childNodes[3].childNodes[1].style.color = "#FFF";
            e.parentElement.classList.remove('setting-two-by-js');
            e.parentElement.childNodes[1].classList.remove('setting-two-img-by-js');
        })

    }
}

/* { END } */

/* { START } this codes created to change settings  title and  image in click*/

var watchOptionBtn = document.querySelectorAll('.video-settings .watch-option-btn');

for (var i = 0; i < watchOptionBtn.length; i++) {

    watchOptionBtn[i].onclick = function () {

        if (this.childNodes[1].getAttribute('src') == 'images/time.png' && this.parentElement.childNodes[3].childNodes[1].textContent == 'WATCH LATER') {

            this.childNodes[1].setAttribute('src' , 'images/watch-later-added-icon.png')
            this.parentElement.childNodes[1].style.backgroundColor = "#000";
            this.parentElement.childNodes[3].childNodes[1].textContent = "ADDED";
            this.parentElement.childNodes[3].childNodes[1].style.color = "#1074e6";
            this.parentElement.classList.add('setting-one-by-js');

        } else {

            this.childNodes[1].setAttribute('src' , 'images/time.png');
            this.parentElement.childNodes[1].style.backgroundColor = "#FFF";
            this.parentElement.childNodes[3].childNodes[1].textContent = "WATCH LATER";
            this.parentElement.childNodes[3].childNodes[1].style.color = "#FFF";
            this.parentElement.classList.remove('setting-one-by-js')

        }
    }
}


var queueOptionBtn = document.querySelectorAll('.video-settings .queue-option-btn');


for (var i = 0; i < queueOptionBtn.length; i++) {

    var x = 0;

    queueOptionBtn[i].onclick = function () {

        x++;

        if (this.childNodes[1].getAttribute('src') == 'images/add-to.png' && this.parentElement.childNodes[3].childNodes[1].textContent == 'ADD TO QUEUE') {

            this.childNodes[1].setAttribute('src' , 'images/queue-added-icon.png');
            this.parentElement.childNodes[1].style.backgroundColor = "#000";
            this.parentElement.childNodes[3].childNodes[1].textContent = "ADDED";
            this.parentElement.childNodes[3].childNodes[1].style.color = "#1074e6";
            this.parentElement.classList.add('setting-two-by-js');
            this.parentElement.childNodes[1].classList.add('setting-two-img-by-js');

        } else {
            
            this.childNodes[1].setAttribute('src' , 'images/add-to.png');
            this.parentElement.childNodes[1].style.backgroundColor = "#000";
            this.parentElement.childNodes[3].childNodes[1].textContent = "ADD TO QUEUE";
            this.parentElement.childNodes[3].childNodes[1].style.color = "#FFF";
            this.parentElement.classList.remove('setting-two-by-js');
            this.parentElement.childNodes[1].classList.remove('setting-two-img-by-js');


        }

        var sdVideoTitle = videoTitle = this.parentElement.parentElement.parentElement.childNodes[7].childNodes[3].childNodes[1].childNodes[1].textContent,
            channelTitle = this.parentElement.parentElement.parentElement.childNodes[7].childNodes[5].childNodes[1].textContent,
            videoImg = this.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].getAttribute('src'),
            videoLink = this.parentElement.parentElement.parentElement.childNodes[7].childNodes[3].childNodes[1].getAttribute('href'),
            videoTime = this.parentElement.parentElement.parentElement.childNodes[1].childNodes[3].childNodes[1].textContent;

            if (sdVideoTitle.length > 46) {


                var titleToArray = [];
                    titleToArray.push(sdVideoTitle);
                var titelToString = titleToArray.toString().slice(0,45),
                    sdTitleToArray = [];
                    sdTitleToArray.unshift(titelToString);
                    sdTitleToArray.push('..');
                var titleToSr = sdTitleToArray.toString(),
                    videoTitleChanged = titleToSr.replace([','],'.');
                    

            } else {
                
                var titleToArray = [];
                    titleToArray.push(sdVideoTitle);
                var titelToString = titleToArray.toString().slice(0),
                    videoTitleChanged = titelToString;
            }
        
        var queueAddedClass = document.getElementById('queue-added-class'),
        queueAdded = document.createElement('div');
        queueAddedClass.appendChild(queueAdded);
        queueAdded.className = 'queue-added';
        queueAdded.id = 'queue-added';
        queueAdded.innerHTML = `<div class="queue-addeds" id="queue-addeds" data-count='1'>
        <div class="queue-added-img">
        <img src="${videoImg}">
        <div class="queue-added-settings-class">
            <div class="queue-added-setting">
                <img src="images/expand.png">
                <span id="cancel-btn">&times</span>
                <span>${videoTime}</span>
            </div>
        </div>
    </div>
    <a href="${videoLink}">
    <div class="queue-added-title" id="queue-added-title">
        <p>${videoTitleChanged}</p>
        <div id="queueCount"></div>
    </div>
    </a>
    <div id="up-down-btn">
    <div class="up-down-btn">
        <img src="images/right-arrow.png">
    </div>
    </div>

    <div class="small-queue-added-class" id="small-queue-added-class">
              </div>

    </div>`;

    var smallQueueAddedClass = document.getElementById('small-queue-added-class');
    smallQueueAddedClass.innerHTML += `<div class="small-queue-added" id="small-queue-added">
    <div class="small-queue-added-img">
        <img src="${videoImg}">
        <span>${videoTime}</span>
    </div>
    <a href="${videoLink}">
    <div class="small-queue-added-titel-channel-name">
        <p>${videoTitleChanged}</p>
        <span>${channelTitle}</span>
        <div class="delete-class" id="delete-class">
            <img src="images/delete.png">
        </div>
    </div>
    </a>
</div>`;



var heightSmallQueueAddedClass = document.getElementById('small-queue-added-class'),
    upDownBtn = document.getElementById('up-down-btn');
    var updownBtn = document.querySelector('.up-down-btn img');
    heightSmallQueueAddedClass.classList.add('small-queue-added-class-by-js2');

    upDownBtn.onclick = function () {

        if (heightSmallQueueAddedClass.classList.contains('small-queue-added-class-by-js2')) {
            
            heightSmallQueueAddedClass.classList.add('small-queue-added-class-by-js');
            heightSmallQueueAddedClass.classList.remove('small-queue-added-class-by-js2');
            queueAddedClass.classList.remove('queue-added-class-by-js2');
            queueAddedClass.classList.add('queue-added-class-by-js');
            updownBtn.style.transform = "rotate(90deg)";
            smallQueueAddedClass.childNodes[1].childNodes[3].childNodes[1].childNodes[5].remove();

        } else {

            heightSmallQueueAddedClass.classList.remove('small-queue-added-class-by-js');
            heightSmallQueueAddedClass.classList.add('small-queue-added-class-by-js2');
            queueAddedClass.classList.add('queue-added-class-by-js2');
            queueAddedClass.classList.remove('queue-added-class-by-js');
            updownBtn.style.transform = "rotate(-90deg)";
            smallQueueAddedClass.childNodes[1].childNodes[3].childNodes[1].childNodes[5].remove();

        }

    }
    

var queueAddedTitle = document.getElementById('queueCount'),
    deleteClass = document.querySelectorAll('.small-queue-added .delete-class');
    queueAddedTitle.innerHTML = `<span>Queue 1/${x}</span>`;
    
var deleteParent = document.getElementById('cancel-btn');

deleteParent.onclick = function () {

    var queueAddedClass = document.getElementById('queue-added-class');

    var deleteQueueClass = document.getElementById('delete-queue-class'),
        cancel = document.getElementById('cancel'),
        closePlayer = document.getElementById('close-player'),
        deleteQueueParent = this.parentElement.parentElement.parentElement.parentElement.parentElement;

        deleteQueueClass.style.display = "block";

        closePlayer.onclick = function () {

            x = 0;
            deleteQueueParent.remove();
            deleteQueueClass.style.display = "none";
            queueAddedClass.classList.add('queue-added-class-by-js2');
            queueAddedClass.classList.remove('queue-added-class-by-js');

        }

        cancel.onclick = function () {

            deleteQueueParent;
            deleteQueueClass.style.display = "none";
        }

}

queueAddedClass.removeChild(queueAddedClass.childNodes[2]);

for (var i = 0; i < deleteClass.length; i++) {

    deleteClass[i].onclick = function () {

        if (x > 1) {

            x--;
            this.parentElement.parentElement.parentElement.remove();
            queueAddedTitle.innerHTML = `<span>Queue 1/${x}</span>`;

        } else if (x == 1) {

            this.parentElement.parentElement.parentElement;
        }

       }
   }
   
   smallQueueAddedClass.childNodes[1].childNodes[3].childNodes[1].childNodes[5].remove();
   
    }

}

/* { END } */


/* { START } this codes created to change place of last queue button in the video */

var lastQueue = document.querySelectorAll('.all-videos-class .videos-container-class');

lastQueue.forEach((e) => {

    //e.childNodes[7].childNodes[9].childNodes[3].style.margin = '3px -8em';
    e.lastElementChild.childNodes[7].childNodes[9].childNodes[3].id = "lastQueue";
});

/* { END } */

/*{ START } this codes created to hideo spinner in 5 seconds */

var spinnerClass = document.getElementById('spinner-class'),
    videoContainerHidden = document.querySelectorAll('.video-container-hidden');

        setTimeout(function () {

            videoContainerHidden.forEach((e) => {

                e.classList.remove('video-container-hidden');

            })

            spinnerClass.style.display = "none";
            
        },5000)


/* { END } */

/*{ START } this codes created to open and close the class of search */

var searchClassIntroBtn = document.getElementById('search-class-intro'),
    searchClass = document.getElementById('search-class'),
    backFromSearchClass = document.getElementById('back-btn'),
    header = document.querySelector('header');

searchClassIntroBtn.onclick = function () {

    searchClass.style.display = "block";
    header.classList.add('headerHeight');

    var settingsBox = document.querySelectorAll('.settingsBox');
    
    for (var i = 0; i < settingsBox.length; i++) {

                settingsBox[0].nextElementSibling.classList.add("sg-box");
                settingsBox[1].nextElementSibling.classList.add("sg-box");
                settingsBox[2].nextElementSibling.classList.add("sg-box");    
    
    }

    backFromSearchClass.onclick = function () {

        searchClass.style.display = "none";
        header.classList.remove('headerHeight');
    }
}

/* { END } */

/* { START } this codes created when the user scroll down the header and footer will hide 
and when scroll up the header and footer will show
*/

var header = document.getElementById('header'),
    smallDevicesFooter = document.getElementById('small-devices-footer'),
    pageScrolled = window.pageYOffset;
    
window.onscroll = function () {

    var pageScroll = window.pageYOffset;

    if (pageScrolled < pageScroll) {

        header.classList.add('hideHeader');
        smallDevicesFooter.classList.add('hideFooter');

    } else {

        header.classList.remove('hideHeader');
        smallDevicesFooter.classList.remove('hideFooter');

    }

    pageScrolled = pageScroll;
    
}

/* { END } */