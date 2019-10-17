document.addEventListener("DOMContentLoaded", function() {



    var current_tab = 1;
    var number_of_tabs = 3;
    window.setInterval(function() {
        if (current_tab == number_of_tabs) {
            current_tab = 1;
        } else {
            current_tab++;
        }

        $('.tab' + current_tab).show().siblings().hide();
        $('.tooltip-tab').show();

        tablinks = document.getElementsByClassName("tab");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        $('.btn' + current_tab).addClass('active');

        // Change/remove current tab to active      $('#tab'+current_tab).parent('li').addClass('active').siblings().removeClass('active');

    }, 5000);



    (function() {
        var words = [
                'creators.',
                'thinkers.',
                'innovators.',
                'doers.'
            ],
            i = 0;
        setInterval(function() {
            $('#txtSwap').fadeOut(function() {
                $(this).html(words[i = (i + 1) % words.length]).fadeIn();
            });
        }, 2000);

    })();

});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = evt.target.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("tab-content");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = evt.target.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}