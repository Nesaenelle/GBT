function closeModal() {
    let overlay = $('.modal-overlay');
    $('.modal').removeClass('opened');
    overlay.removeClass('opened');
}

function openModal(e) {
    let $target = $(e.currentTarget);
    let id = $target.data('modal');
    let modal = $(`[data-modal-id="${id}"]`);
    let overlay = $('.modal-overlay');

    modal.addClass('opened');
    overlay.addClass('opened');
}

$('[data-close-btn]').on('click', () => {
    closeModal();
});

$('.modal-close').on('click', () => {
    closeModal();
});

$('.modal-overlay').on('click', () => {
    closeModal();
});

$('[data-modal]').on('click', (e) => {
    openModal(e);
});
