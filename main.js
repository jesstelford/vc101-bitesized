/*var chevronLeft = document.getElementById('left-chevron');
var chevronRight = document.getElementById('right-chevron');

function init() {
    Tabletop.init({
        key: 'https://docs.google.com/spreadsheets/d/121xBU8bEERskqbCZMC6eZ0X21Khg8o9nJbSCCKEtyuI/pubhtml',
        callback: function (data, tabletop) {
            console.log(data)
            //for (var i = 0; i < data.length; i++) {
            $(".container").append("<iframe src=" + data[0].img + " frameBorder='0' scrolling='no' class='gif'>" + "</iframe>" + "<p>" + data[0].content + "</p>");
            //};
        },
        simpleSheet: true
    })
}
window.addEventListener('DOMContentLoaded', init)

var x = '';
var i = 0;

function init() {
    Tabletop.init({
        key: 'https://docs.google.com/spreadsheets/d/121xBU8bEERskqbCZMC6eZ0X21Khg8o9nJbSCCKEtyuI/pubhtml',
        callback: function (data, tabletop) {
            console.log(data)
            document.getElementById('right-chevron').onclick = function () {
                if (i < data.length) {
                    x = data[i].content + '<br>';
                    y = "<iframe src=" + data[i].img + " frameBorder='0' scrolling='no' class='gif'>" + "</iframe>"
                    i++;
                }

                document.getElementById('post').innerHTML = x;
                document.getElementById('gif').innerHTML = y;

            };
            document.getElementById('left-chevron').onclick = function () {
                if (i > data.length) {
                    x = data[i].content + '<br>';
                    y = "<iframe src=" + data[i].img + " frameBorder='0' scrolling='no' class='gif'>" + "</iframe>"
                    i--;
                }

                document.getElementById('post').innerHTML = x;
                document.getElementById('gif').innerHTML = y;

            };
        },
        simpleSheet: true
    })
}
window.addEventListener('DOMContentLoaded', init)*/

// Animate smooth scroll
$('#get-started').on('click', function () {
    const sectionLesson = $('#section-lesson').position().top;

    $('html, body').animate({
        scrollTop: sectionLesson
    }, 900);
});


// Fetch data for the course page
function init() {
    Tabletop.init({
        key: 'https://docs.google.com/spreadsheets/d/121xBU8bEERskqbCZMC6eZ0X21Khg8o9nJbSCCKEtyuI/pubhtml',
        callback: function (data, tabletop) {
            console.log(data)
            index = function (i) {
                var out = document.getElementById('post');
                var testgif = document.getElementById('gif');

                out.innerHTML = data[i].content;
                testgif.innerHTML = "<iframe src=" + data[i].img + " frameBorder='0' scrolling='no' class='gif'>" + "</iframe>";
                return {
                    prev: function () {
                        i && i--;
                        out.innerHTML = data[i].content;
                        testgif.innerHTML = "<iframe src=" + data[i].img + " frameBorder='0' scrolling='no' class='gif'>" + "</iframe>";
                    },
                    next: function () {
                        i + 1 < data.length && i++;
                        out.innerHTML = data[i].content;
                        testgif.innerHTML = "<iframe src=" + data[i].img + " frameBorder='0' scrolling='no' class='gif'>" + "</iframe>";
                    }
                }
            }(0);

            document.getElementById('right-chevron').addEventListener('click', index.next);
            document.getElementById('left-chevron').addEventListener('click', index.prev);
        },
        simpleSheet: true
    })
}
window.addEventListener('DOMContentLoaded', init)

