const layoutHome = document.querySelector('#layoutHome')
const layoutArtist = document.querySelector('#layoutArtist')
const layoutMyPlayList = document.querySelector('#layoutMyPlayList')
const layoutPlayList = document.querySelector('#layoutPlayList')


const layoutArtistRoute = document.querySelector('.layoutArtistRoute')
const layoutMyPlayListRoute = document.querySelector('.layoutMyPlayListRoute')
const layoutPlayListRoute = document.querySelector('.layoutPlayListRoute')


layoutArtistRoute.addEventListener('click', function() {
    layoutHome.hidden = true
    layoutArtist.hidden = false
    layoutMyPlayList.hidden = true
    layoutPlayList.hidden = true
})

layoutMyPlayListRoute.addEventListener('click', function() {
    layoutHome.hidden = true
    layoutArtist.hidden = true
    layoutMyPlayList.hidden = false
    layoutPlayList.hidden = true
})

layoutPlayListRoute.addEventListener('click', function() {
    layoutHome.hidden = true
    layoutArtist.hidden = true
    layoutMyPlayList.hidden = true
    layoutPlayList.hidden = false
})