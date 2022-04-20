require('./bootstrap');

const sweetAlert = Swal.mixin({
    position: 'top',
    allowOutsideClick: false,
    allowEscapeKey: false,
    confirmButtonColor: '#666',
    cancelButtonColor: '#d33',
});

$(document).ready(function () {

    //Form Submitted
    $("form").on('submit', function () {
        $(this).find('button').prop('disabled', 'true').html('Submitting');
    });

    //Delete Button Clicked
    $(".delete-button").on('click', function () {

        const title = $(this).data("title");
        const formId = $(this).data("form-id");

        if ( $(this).data("administrator-count") ) {

            const administratorCount = $(this).data("administrator-count");
            const roleId = $(this).data("role-id");

            if ( administratorCount == 1 && roleId == 1 ) {

                sweetAlert.fire({
                    title: 'Cannot Delete User',
                    text: "At Least 1 Administrator Must Exist",
                    icon: 'warning',
                })

                return false;
            }
        }

        sweetAlert.fire({
            title: title,
            text: "Are You Sure?",
            icon: 'warning',
            confirmButtonColor: '#d33',
            cancelButtonColor: '#666',
            showCancelButton: true,
            confirmButtonText: 'Delete'
        }).then((result) => {
            if ( result.isConfirmed ) {

                $(formId).submit();
            }
        })
    });


    //Open Profile Dropdown
    $(".profile-open").on('click', function () {

        $(".profile-dropdown").slideToggle("slow");
    });


    // //Open/Close Mobile Menu Modal
    $("#closeMobileSidebarModal").on('click', function () {

        $("#mobileSidebarModal").animate({ width: 'hide' }, 500);
    });

    $("#openMobileSidebarModal").on('click', function () {

            $("#mobileSidebarModal").animate({ width: 'show' }, 500);
        }
    )
});
