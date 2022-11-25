function toggleTheme () {
    const htmlTag = document.getElementsByTagName('html')[0]
    if (htmlTag.hasAttribute('data-theme')) {
        htmlTag.removeAttribute('data-theme')
        return window.localStorage.removeItem("site-theme")
    }

    htmlTag.setAttribute('data-theme', 'daytime')
    window.localStorage.setItem("site-theme", "daytime")
}

function applyInitialTheme () {
    const theme = window.localStorage.getItem("site-theme")
    if (theme !== null) {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.setAttribute("data-theme", theme)
    }
}

applyInitialTheme();
window.onload=function(){
  document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
}

jQuery(document).ready(function($){
  $('.toggle').on('click', function(){
    var targetBox = $(this).attr('target-box'); // Find the target box

    $('section').not(targetBox).hide(); // Hide all other boxes

    $(targetBox).show(100); // Toggle the current state of this one
  });
});