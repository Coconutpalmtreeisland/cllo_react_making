export function scroll__menu() {
    document.addEventListener("DOMContentLoaded", function () {
        let didScroll = false;
        let lastScrollTop = 0;
        const delta = 5;
        const header = document.getElementById("header");
        const navbarHeight = header.offsetHeight;

        window.addEventListener("scroll", function () {
            didScroll = true;
        });

        setInterval(function () {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            const st = window.pageYOffset || document.documentElement.scrollTop;

            if (Math.abs(lastScrollTop - st) <= delta) return;

            if (st > lastScrollTop && st > navbarHeight) {
                header.classList.remove("nav-down");
                header.classList.add("nav-up");
            } else {
                if (st + window.innerHeight < document.documentElement.scrollHeight) {
                    header.classList.remove("nav-up");
                    header.classList.add("nav-down");
                }
            }

            lastScrollTop = st;
        }
    });
}