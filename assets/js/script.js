document.addEventListener("DOMContentLoaded", function () {


    // Show the first four images
    $(".catalog-items .item:lt(6)").show();

    // When the gallery button is clicked
    $(".catalog-btn_more").on('click', function (event) {
        // Prevent default behavior
        event.preventDefault();
        // All of the hidden images
        var $hidden = $(".catalog-items .item:hidden");
        // Show the next four images
        $($hidden).slice(0, 3).fadeIn(800);
        // If the length of $hidden is 4 then hide the button
        if ($hidden.length == 3) {
            $(this).fadeOut();
        }
    });


    // Smooth scroll
    $("[href^='#']").click(function () {
        var idtop = $($(this).attr("href")).offset().top;
        $('html,body').animate(
            { scrollTop: idtop }, 1000);
        return false;
    });


    // Accordion
    const accordion = document.querySelectorAll('.accordion .question');
    let mainParent;
    let height;
    let answer;
    accordion.forEach(item => {
        item.addEventListener('click', () => {
            height = item.nextElementSibling.firstElementChild.offsetHeight;
            answer = item.nextElementSibling;
            mainParent = item.parentElement;
            if (mainParent.classList.contains('active')) {
                mainParent.classList.remove('active');
                answer.style.height = `0px`;
                answer.style.marginTop = '0px';
            } else {
                mainParent.classList.add('active');
                answer.style.height = `${height}px`;
                answer.style.marginTop = '26px';
            }
        });
    });


    // Open/Close modal
    let modalOpen = document.querySelectorAll('.modal-open'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('.modal-close');

    modalOpen.forEach(element => {
        element.addEventListener('click', () => modal.classList.toggle("active"));
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove("active");
    })


    // Sending maodl-form
    $('.modal-form').submit(function () {
        var form = $(this);
        var error = false;
        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: '/send.php',
                dataType: 'html',
                data: data,
                beforeSend: function (data) {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                },
                success: function (data) {
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        window.location = '/thanks.html';
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function (data) {
                    form.find('input[type="submit"]').prop('disabled', false);
                }
            });
        }
        return false;
    });


    // Sending callback-form
    $('.callback-form').submit(function () {
        var form = $(this);
        var error = false;
        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: '/send.php',
                dataType: 'html',
                data: data,
                beforeSend: function (data) {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                },
                success: function (data) {
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        window.location = '/thanks.html';
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function (data) {
                    form.find('input[type="submit"]').prop('disabled', false);
                }
            });
        }
        return false;
    });


    // Mask phone
    $("input[name=tel]").mask("+7 (999) 999-99-99");
});