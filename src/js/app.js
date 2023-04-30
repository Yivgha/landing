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
        

const btn = document.getElementById("send");

btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();
  const inputs = document.querySelectorAll('#name, #mail');

  inputs.forEach(input => {
    input.value = '';
  });
});