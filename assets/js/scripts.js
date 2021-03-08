let sidebarOpenButton = document.getElementById('sidebar-open-button'),
    sidebar = document.getElementById('sidebar');

document.addEventListener('click', function(e) {
    let target = e.target;

    while (target != this) {

        if (target == sidebarOpenButton) {
            sidebar.classList.toggle('closed');
        }

        target = target.parentNode;
    }
})