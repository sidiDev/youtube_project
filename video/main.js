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

        var singInSettings = document.getElementById('sing-in-settings');
        singInSettings.classList.add('sing-in-settings');

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

var signInBtn = document.getElementById('sign-in-btn'),
    singInSettings = document.getElementById('sing-in-settings');

signInBtn.onclick = function () {

    
var settingsBox = document.querySelectorAll('.settingsBox');
    
    settingsBox[0].nextElementSibling.classList.add("sg-box");
    settingsBox[1].nextElementSibling.classList.add("sg-box");
    settingsBox[2].nextElementSibling.classList.add("sg-box");

    if (singInSettings.classList.contains('sing-in-settings')) {

        singInSettings.classList.remove('sing-in-settings')

    } else {

        singInSettings.classList.add('sing-in-settings')
    }
}
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

/* { START } this codes created to open and close the menu */

function openCloseMenu () {

    var openCloseMenu = document.getElementById('options-class'),
        lastPartMenu = document.getElementById('last-menu-sgs'),
        menuContainer = document.getElementById('menuContainer'),
        allVideosClass = document.getElementById('all-videos-class'),
        menuClass = document.getElementById('menu-class');
        menuCover = document.getElementById('menu-cover');

    openCloseMenu.classList.toggle('openCloseMenu');
    lastPartMenu.classList.toggle('lastPartMenu');

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

/* { START } this codes created to make the video */

var videoPlayer = document.getElementById('video'),
     movingBrogress = document.getElementById('moving-brogress'),
     playStopBtn = document.querySelector('.play-stop-btn img'),
     videoDurationBar = document.getElementById('video-duration-bar'),
     videoVolumeBar = document.getElementById('video-volume-bar'),
     videoDuration = document.querySelector('.video-duration'),
     movingVolBrogress = document.getElementById('moving-vol-brogress');

videoPlayer.controls = false;

function videoBrogressBar () {

    var videoBrogress = videoPlayer.currentTime / videoPlayer.duration * 100,
        videoTimeUpdated = videoPlayer.currentTime / 60;
        movingBrogress.style.width = `${videoBrogress}%`;
        var fullDuration = videoPlayer.duration / 60;

        if (videoTimeUpdated === fullDuration) {

            playStopBtn.src = 'images/replay-video.png';
            playStopBtn.style.width = "20px";
            playStopBtn.style.height = "20px";
            
        } else {

            playStopBtn.style.width = "17px";
            playStopBtn.style.height = "17px";

            if (videoPlayer.paused) {

                playStopBtn.src = 'images/play-button.png';

            } else {

                playStopBtn.src = 'images/pause.png';
            }
        
        }

        var videoSeconds = Math.floor(videoPlayer.currentTime % 60),
            videoMinutes =  Math.floor(videoPlayer.currentTime % 3600 / 60);
            videoDuration.children[0].textContent = `${videoMinutes}:${videoSeconds}`

}

function onMovevideoBar (e) {

    var barMoving = (e.offsetX / videoDurationBar.offsetWidth) * videoPlayer.duration;
        videoPlayer.currentTime = barMoving;
}

function playStopVideo () {

    var playerBtn = videoPlayer.paused ? 'images/pause.png' : 'images/play-button.png';
        playStopBtn.src = `${playerBtn}`;

    if (videoPlayer.paused) {

        videoPlayer.play();

        var videoControls = document.querySelector('.video-controls'),
            videoPlayerScreen = document.querySelector('.video-player');
            videoPlayerScreen.classList.add('video-player-screen');
            videoPlayerScreenByJs = document.querySelector('.video-player-screen');


            videoPlayerScreenByJs.onmouseenter = function () {
            
                videoControls.classList.remove('video-controls-by-js');
        }

        videoPlayerScreenByJs.onmouseleave = function () {
            
            videoControls.classList.add('video-controls-by-js');
    }

    } else {

        videoPlayer.pause();

        if (videoPlayer.paused) {

            var videoControls = document.querySelector('.video-controls');

            videoPlayerScreenByJs.onmouseleave = function () {
            
                videoControls.classList.remove('video-controls-by-js');
        }

        }

    }

}

function changeVideoVolumeBar (e) {

    var videoVolume = (e.offsetX / videoVolumeBar.offsetWidth),
        videoVolumeBrogress = (e.offsetX / videoVolumeBar.offsetWidth) * 100;
        videoPlayer.volume = videoVolume;
        movingVolBrogress.style.width = `${videoVolumeBrogress}%`;

        if (videoPlayer.volume > 0) {

            const videoVolumeBtn = document.querySelector('.video-volume-btn img');

            videoVolumeBtn.setAttribute('src', 'images/volume.png');

        } else {

            videoVolumeBtn.setAttribute('src', 'images/mute.png');
        }
}

function getVideoInfo () {

    var getVideoMinutes = Math.floor(videoPlayer.duration / 60),
        getvideoSeconds = Math.floor(videoPlayer.duration % 60);

    videoDuration.children[2].textContent = `${getVideoMinutes}:${getvideoSeconds}`;
}

var videoVolumeBtn = document.querySelector('.video-volume-btn img');
videoVolumeBtn.onclick = function () {

    var imgSrc = this.getAttribute('src');

    if (imgSrc == 'images/volume.png') {

        this.setAttribute('src' , 'images/mute.png');
        movingVolBrogress.style.width = '0';
        videoPlayer.volume = 0;

    } else {
        this.setAttribute('src' , 'images/volume.png');
        movingVolBrogress.style.width = '100%';
        videoPlayer.volume = 1;

    }
}

var videoSettings = document.querySelector('.video-settings img'),
    runShutOption = document.querySelector('.run-shut-option');

videoSettings.onclick = function () {

    var videoSettingsContainer = document.getElementById('video-settings-container');

    if (videoSettingsContainer.classList.contains('video-settings-container-by-js')) {

        videoSettingsContainer.classList.remove('video-settings-container-by-js');

    } else {

        videoSettingsContainer.classList.add('video-settings-container-by-js');
    }
}

runShutOption.onclick = function () {

    runShutOption.children[0].classList.toggle('run-shut-by-js')
    runShutOption.classList.toggle('run-shut-option-by-js')
}

videoPlayer.addEventListener('timeupdate' , videoBrogressBar);
videoDurationBar.addEventListener('click' , onMovevideoBar);
playStopBtn.addEventListener('click' , playStopVideo);
videoVolumeBar.addEventListener('click' , changeVideoVolumeBar);
videoPlayer.addEventListener('loadedmetadata', getVideoInfo);

/* { END } */

/* this codes created to to augment the like */

var likeVideo = document.querySelector('.like-video img'),
   likeOutput = document.querySelector('.like-video span'),
   likeDislikeBar = document.querySelector('.like-dislike-class');
    aug = 231;

likeVideo.onclick = function () {

    var likeImgSrc = this.getAttribute('src');
    returnLastModified ()

    if (likeImgSrc == 'images/like.png') {
        
        this.setAttribute('src' , 'images/liked.png');
        aug = 231;
        likeOutput.textContent = aug++;
        likeDislikeBar.classList.add('like-dislike-bar');

    } else {

        this.setAttribute('src' , 'images/like.png');
        aug = 230;
        likeOutput.textContent = aug--;
        likeDislikeBar.classList.remove('like-dislike-bar');
    }

}

var dislikeVideo = document.querySelector('.dislike-video img'),
    dislikeOutput = document.querySelector('.dislike-video span'),
    likeDislikeBar = document.querySelector('.like-dislike-class');
    dimin = 9;

    dislikeVideo.onclick = function () {

        var dislikeImgSrc = this.getAttribute('src');
        returnLastModified ()
    
        if (dislikeImgSrc == 'images/dislike.png') {
            dimin = 11;
            this.setAttribute('src' , 'images/disliked.png');
            dislikeOutput.textContent = dimin++;
            likeDislikeBar.classList.add('like-dislike-bar');
    
        } else {
    
            this.setAttribute('src' , 'images/dislike.png');
            dimin = 10;
            dislikeOutput.textContent = dimin--;
            likeDislikeBar.classList.remove('like-dislike-bar');
        }
    
    }

    function returnLastModified () {
        dislikeOutput.textContent = 10;
        likeOutput.textContent = 230;
        likeVideo.setAttribute('src' , 'images/like.png');
        dislikeVideo.setAttribute('src' , 'images/dislike.png');
        likeDislikeBar.classList.remove('like-dislike-bar');
    };

/* { END } */

/* this codes created to change the notification of the subscribe */

var subBtn = document.querySelector('.sub-channel .sub-btn'),
    bellType = document.querySelector('.sub-channel .bell-type'),
    listNotification = document.querySelector('.sub-channel .list-bell');
    listNotificationContent = document.querySelectorAll('.sub-channel .list-bell .bell-option');

subBtn.onclick = function () {

    if (this.classList.contains('sub-btn-by-js')) {

        var unsubscribeClass = document.querySelector('.unsubscribe-class'),
            cancelBtn = document.querySelector('.unsubscribe-btn .cancel'),
            unsubscribeBtn= document.querySelector('.unsubscribe-btn .unsubscribe');

        if (unsubscribeClass.classList.contains('unsubscribe-class-by-js')) {

            unsubscribeClass.classList.remove('unsubscribe-class-by-js');

            unsubscribeBtn.onclick = function () {

                subBtn.classList.remove('sub-btn-by-js');
                unsubscribeClass.classList.add('unsubscribe-class-by-js');
                listNotification.classList.add('list-bell-by-js');
                bellType.classList.add('bell-type-by-js')

            }

            cancelBtn.onclick = function () {

                this.classList.add('sub-btn-by-js');
                unsubscribeClass.classList.add('unsubscribe-class-by-js');
            }

        } else {

            unsubscribeClass.classList.add('unsubscribe-class-by-js');
        }

    } else {

        this.classList.add('sub-btn-by-js');
    }

    if (bellType.classList.contains('bell-type-by-js')) {

        bellType.classList.remove('bell-type-by-js');

        bellType.childNodes[1].onclick = function () {

            if(listNotification.classList.contains('list-bell-by-js')) {

                listNotification.classList.remove('list-bell-by-js');

                for (var i = 0; i < listNotificationContent.length; i++) {

                    listNotificationContent[i].onclick = function () {

                        var getImgSrc = this.childNodes[1].getAttribute('src');

                        bellType.childNodes[1].setAttribute('src' , getImgSrc);
                    }
                }


            } else {

                listNotification.classList.add('list-bell-by-js');
            }
        }

    }
}

/* { END } */

/* this codes created to show and hide video description */

var videoDescription = document.querySelector('.video-description'),
    showHideBtn = document.querySelector('.video-description-class span');

showHideBtn.onclick = function () {

    if (videoDescription.classList.contains('video-description-by-js')) {

        videoDescription.classList.remove('video-description-by-js');
        showHideBtn.textContent = "SHOW LESS";

    } else {

        videoDescription.classList.add('video-description-by-js');
        showHideBtn.textContent = "SHOW MORE";
    }
}

/* { END } */

/* this codes created to make comments system input */

var CommentsInput = document.querySelector('.comments-input input'),
    commentsInputBar = document.querySelector('.comments-input-bar'),
    sendsSystem = document.querySelector('.sends-system')
    commentsInputBarJs = document.querySelector('.comments-input-bar-by-js');

CommentsInput.onfocus = function () {
    commentsInputBarJs.style.width = '100%';
    sendsSystem.classList.remove('sends-system-by-js');
    sendsSystem.classList.add('send-system');
    commentsInputBar.classList.add('comments-input-bar-by-js');

    var cancel = document.querySelector('.cancel');

    cancel.onclick = function () {

        sendsSystem.classList.add('sends-system-by-js');
        sendsSystem.classList.remove('send-system');
        CommentsInput.value = '';
    }

}

CommentsInput.onblur = function () {
    commentsInputBar.classList.remove('comments-input-bar-by-js');
    commentsInputBarJs.style.width = '0';
}

/* { END } */

CommentsInput.oninput = function () {

    var comment = document.querySelector('.send-cancel-btn .comment'),
        usersCommentsPlace = document.querySelector('.users-comments-place');

    if (CommentsInput.value != '') {

        comment.classList.add('comment-by-js');

        var commentBtn = document.querySelector('.comment-by-js');

        var counterOutput = document.getElementById('comment-counter');

        commentBtn.onclick = function () {

            if (comment.classList.contains('comment-by-js')) {

                var commentCounter = document.querySelectorAll('.comment-place');

                for (var i = 0; i <= commentCounter.length; i++) {

                    counterOutput.textContent = `${i+1} Comments`;

                }

                var inputValue = document.querySelector('.comments-input input').value;

                usersCommentsPlace.innerHTML += `<div class="comment-place">
            <div class="user-logo">
                <span>S</span>
            </div>
            <div class="comment-info">
                <div class="user-name-comment-date">
                    <span>Sjm SoftEng</span>
                    <span>1 second ago</span>
                </div>
                <div class="user-comment">
                    <span>${inputValue}</span>
                </div>
                <div class="like-dislike-comment">
                    <div class="like-comment">
                        <img src="images/like.png">
                        <span></span>
                    </div>
                    <div class="dislike-comment">
                        <img src="images/dislike.png">
                        <span></span>
                    </div>
                    <div class="reply-comment">
                        <span>REPLY</span>
                    </div>
                </div>
            </div>
        </div>`
        
/* this codes created to make like and dislike in comments system */

var likeComment = document.querySelectorAll('.like-comment img'),
 augLikeComment = 1;

for (var i = 0; i < likeComment.length; i++) {

 likeComment[i].onclick = function () {

    this.parentElement.parentElement.childNodes[3].childNodes[1].src = 'images/dislike.png';
    this.parentElement.parentElement.childNodes[3].childNodes[3].textContent = '';

 var likeImgSrc = this.getAttribute('src');

 if (likeImgSrc == 'images/like.png') {
     
     this.setAttribute('src' , 'images/liked.png');
     augLikeComment = 1;
     this.nextElementSibling.textContent = augLikeComment++;

 } else {

     this.setAttribute('src' , 'images/like.png');
     augLikeComment = 0;
     this.nextElementSibling.textContent = augLikeComment--;
 }

}

}


var dislikeComment = document.querySelectorAll('.dislike-comment img'),
    diminLikeComment = 1;

for (var i = 0; i < dislikeComment.length; i++) {

    dislikeComment[i].onclick = function () {

        this.parentElement.parentElement.childNodes[1].childNodes[1].src = 'images/like.png';
        this.parentElement.parentElement.childNodes[1].childNodes[3].textContent = '';

        var dislikeImgSrc = this.getAttribute('src');
    
        if (dislikeImgSrc == 'images/dislike.png') {
            diminLikeComment = 1;
            this.setAttribute('src' , 'images/disliked.png');
            this.nextElementSibling.textContent = diminLikeComment++;
    
        } else {
    
            this.setAttribute('src' , 'images/dislike.png');
            diminLikeComment = 0;
            this.nextElementSibling.textContent = diminLikeComment--;
        }
    
    }

}

            } else {

                usersCommentsPlace.innerHTML += '';
            }

        }

    } else {

        comment.classList.remove('comment-by-js');
    }
}

/* { END } */

/* this codes crated to miniaturize length of titles of playList */

var playListTitles = document.querySelectorAll('.video-playlist-info h1');

playListTitles.forEach((e) => {

    if (e.textContent.length > 58) {

        var titlesStorage = [e.textContent].toString().slice(0,58),
            newTitlesStorage = [titlesStorage,'..'].toString();
        var playListTitlesModified = newTitlesStorage.replace(',','.');

        e.textContent = playListTitlesModified;

    } else {

        e.textContent;
    }

})