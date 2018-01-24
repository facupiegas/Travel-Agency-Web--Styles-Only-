 $(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000
    });
    $("#imagenTooltip").tooltip();
    $("#imgPopover").popover({
        trigger: 'hover'
    });
}
)
