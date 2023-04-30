lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail, lgShare, lgRotate],
    download: true,
    controlers: true,
});

window.onscroll = function () { myFunction() };
        var stickyHeader = document.getElementById("header");
        var addSticky = stickyHeader.offsetTop;
        function myFunction() {
            if (window.pageYOffset > addSticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }