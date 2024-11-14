/** Mobile Menu Toggle */
function toggleMobileMenu() {
    const menu = document.getElementById('mega-menu--mobile');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

init__megaMenu();
function init__megaMenu() {
    const mm = document.querySelector("aside#mega-menu--mobile");
    if (mm) {
        const mm_back = mm.querySelector("button#menu-back");
        const mm_container = mm.querySelector(".mega__container");
        const mm_screens = mm.querySelectorAll(".mega__screen");
        const mm_subIcons = mm.querySelectorAll("a.btn .btn__icon");
        const mm_subLinks = mm.querySelectorAll("a.btn[aria-label]");
        const mm_subLinks_icon = `<svg width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.88255 3.2234C4.03915 3.37573 4.03915 3.62204 3.88255 3.77275L0.683882 6.88575C0.52728 7.03808 0.274052 7.03808 0.119117 6.88575C-0.0358184 6.73343 -0.0374844 6.48711 0.119117 6.3364L3.03457 3.50051L0.117451 0.662992C-0.0391504 0.510664 -0.0391504 0.264347 0.117451 0.113639C0.274052 -0.0370684 0.52728 -0.0386889 0.682216 0.113639L3.88255 3.2234Z" fill="#221F20"/></svg>`;

        let mm_active_depth = parseInt(mm_container.dataset.activeDepth);

        mm_screens[0].dataset.activeMenu = true;

        // Insert SVG Icon
        mm_subLinks.forEach((item) =>
            item
                .querySelector(".btn__icon")
                .insertAdjacentHTML("afterbegin", mm_subLinks_icon)
        );

        // Handle Back Button
        mm_back.addEventListener("click", (e) =>
            mm_active_depth > 1
                ? sub__handleActiveDepth(mm_screens, e, mm_container)
                : null
        );

        // Handle Submenu Icons
        mm_subIcons.forEach((icon) =>
            icon.addEventListener("click", (e) =>
                sub__handleActiveDepth(mm_screens, e, mm_container)
            )
        );

        function sub__handleActiveDepth(screens, event, container) {
            if (event.target.id == "menu-back") {
                // Handle Screens
                mm_active_depth -= 1;
                mm_container.dataset.activeDepth = mm_active_depth;
                mm_screens.forEach((screen) => {
                    let dft_screen_depth = parseInt(screen.dataset.menuDepth);
                    screen.dataset.activeMenu = false;
                    dft_screen_depth >= mm_active_depth
                        ? screen.classList.remove("stacked")
                        : null;
                    dft_screen_depth == mm_active_depth
                        ? (screen.dataset.activeMenu = true)
                        : null;
                });
            } else {
                event.preventDefault();
                event.stopPropagation();

                // Handle Screens
                mm_active_depth += 1;
                mm_container.dataset.activeDepth = mm_active_depth;
                mm_screens.forEach((screen) => {
                    let dft_screen_depth = parseInt(screen.dataset.menuDepth);
                    screen.dataset.activeMenu = false;

                    dft_screen_depth < mm_active_depth
                        ? screen.classList.add("stacked")
                        : null;
                    dft_screen_depth == mm_active_depth
                        ? (screen.dataset.activeMenu = true)
                        : null;
                });

                // Handle Sub Menus
                let link = event.target.parentElement;
                let link_menu = link.getAttribute("aria-label");
                console.log(link, link_menu);

                container.dataset.activeNav = link_menu;

                let dft_active_screen = container.querySelector(
                    '.mega__screen[data-active-menu="true"]'
                );
                let dft_active_screen__navs = dft_active_screen.querySelectorAll("nav");
                dft_active_screen__navs.forEach((nav) => {
                    nav.classList.add("hidden");
                });

                let dft_active_nav = dft_active_screen.querySelector(
                    `nav[aria-labelledby="${link_menu}"]`
                );
                dft_active_nav.classList.remove("hidden");
            }
        }
    }
}


/** Mobile Menu Toggle */



// Faq Accordian START
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
// Faq Accordian END
