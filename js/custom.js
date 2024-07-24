let iconMenu = document.querySelector('.icon-menu');
let navList = document.querySelector('.navigation__list');

function toggleBurger() {
    iconMenu.classList.toggle('active');
    navList.classList.toggle('active');
    document.body.classList.toggle('lock');
}

if (iconMenu) {
    iconMenu.addEventListener('click', () => {
        toggleBurger();
    });
}

document.querySelectorAll('.btn')
	.forEach(btn => {
		btn.addEventListener('click', () => {
			let $popup = document.querySelector('#' + btn.dataset.popupname);

            $popup.hidden = false;
            document.body.classList.toggle('lock');
		});
	})

document.querySelectorAll('.modal')
	.forEach($modal => {
		$modal.addEventListener('click', () => {
            $modal.hidden = true;
            document.body.classList.toggle('lock');
		})

		let $modalContent = $modal.querySelector('.modal__content');

		$modalContent.addEventListener('click', elem => {
			elem.stopPropagation();
		})

		$modalContent.querySelector('.modal__close').addEventListener('click', () => {
            $modal.hidden = true;
            document.body.classList.toggle('lock');
		})
	})
