const searchInput = document.getElementById('searchInput');
const novels = document.querySelectorAll('.novel-card');

searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase();

    novels.forEach(novel => {
        const title = novel.querySelector('h2').textContent.toLowerCase();

        if (title.includes(value)) {
            novel.style.display = 'block';
        } else {
            novel.style.display = 'none';
        }
    });
});
