let currentPage = 1;

function changePage(delta) {
    const pages = document.querySelectorAll('.page');
    const numPages = pages.length;
    currentPage += delta;

    if (currentPage < 1) {
        currentPage = numPages;
    } else if (currentPage > numPages) {
        currentPage = 1;
    }

    pages.forEach((page, index) => {
        const rotation = (index - currentPage + 1) * 45;
        const opacity = Math.abs(index - currentPage + 1) === 1 ? 1 : 0.5;

        page.style.transform = `rotateY(${rotation}deg)`;
        page.style.opacity = opacity;

        if (index + 1 === currentPage) {
            page.classList.add('current');
        } else {
            page.classList.remove('current');
        }
    });
}