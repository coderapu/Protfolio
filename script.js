document.addEventListener("DOMContentLoaded", () => {
    // =====================================
    // Mobile Hamburger Menu Toggle
    // =====================================
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            // Switch icon between bars and X (close)
            if (navMenu.classList.contains("open")) {
                menuBtn.classList.replace("fa-bars", "fa-xmark");
            } else {
                menuBtn.classList.replace("fa-xmark", "fa-bars");
            }
        });
    }

    // Smooth scrolling & auto-close mobile menu on link click
    document.querySelectorAll('nav a, footer a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute("href");
            if (href && href.startsWith("#")) {
                e.preventDefault();
                const section = document.querySelector(href);
                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth"
                    });
                }

                // Close mobile menu after clicking a link
                if (navMenu && navMenu.classList.contains("open")) {
                    navMenu.classList.remove("open");
                    menuBtn.classList.replace("fa-xmark", "fa-bars");
                }
            }
        });
    });

    // Resume button action
    const resumeBtn = document.querySelector(".buttons .btn:first-child");
    if (resumeBtn) {
        resumeBtn.addEventListener("click", () => {
            window.open("resume.pdf");
        });
    }

    // GitHub button action
    const githubBtn = document.querySelector(".buttons .btn:last-child");
    if (githubBtn) {
        githubBtn.addEventListener("click", () => {
            window.open("https://www.linkedin.com/in/apurba-kumar-saha-b6a2b0261/", "_blank");
        });
    }
    // =====================================
// LinkedIn Button Click Handler
// =====================================
const linkedinBtn = document.getElementById("linkedinBtn");

if (linkedinBtn) {
    linkedinBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevents any default URL conflicts
        
        // Your exact LinkedIn profile link
        const linkedinURL = "https://www.linkedin.com/in/apurba-kumar-saha-b6a2b0261/";
        
        // Opens your profile in a new browser tab safely
        window.open(linkedinURL, "_blank");
    });
}
    // Section reveal animations on scroll
    const reveals = document.querySelectorAll("section");

    function revealSections() {
        reveals.forEach(section => {
            const top = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (top < windowHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    reveals.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "0.8s ease";
    });

    revealSections();

    // Nav shadow & Scroll Spy
    const nav = document.querySelector("nav");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        revealSections();

        // Navbar shadow on scroll
        if (window.scrollY > 20) {
            nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
        } else {
            nav.style.boxShadow = "none";
        }

        // Active nav link highlight
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
// =====================================
// Resume Download Click Tracker
// =====================================
const resumeDownloadBtn = document.getElementById("resumeBtn");

if (resumeDownloadBtn) {
    resumeDownloadBtn.addEventListener("click", (event) => {
        // Log to the console when someone clicks
        console.log("Success: Resume download button was clicked by a user!");
        
        // Optional: You can show a quick custom message or toast notification
        // alert("Your download is starting!"); 
    });
}
    // Dark / Light Mode Toggle
    const themeBtn = document.getElementById("themeBtn");

    if (themeBtn) {
        // Load saved theme
        if (localStorage.getItem("theme") === "light") {
            document.body.classList.add("light-mode");
            themeBtn.classList.replace("fa-moon", "fa-sun");
        }

        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");

            if (document.body.classList.contains("light-mode")) {
                themeBtn.classList.replace("fa-moon", "fa-sun");
                localStorage.setItem("theme", "light");
            } else {
                themeBtn.classList.replace("fa-sun", "fa-moon");
                localStorage.setItem("theme", "dark");
            }
        });
    }
});

// =====================================
// Back To Top Button
// =====================================
const topButton = document.createElement("button");
topButton.innerHTML = "⬆";
topButton.id = "topBtn";
document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.display = "none";
topButton.style.padding = "12px 16px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.cursor = "pointer";
topButton.style.background = "#aa6be4";
topButton.style.color = "#fff";
topButton.style.fontSize = "18px";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =====================================
// Scroll Progress Bar
// =====================================
const progress = document.createElement("div");
progress.id = "progressBar";
document.body.appendChild(progress);

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.background = "#aa6be4";
progress.style.width = "0%";
progress.style.zIndex = "9999";

window.addEventListener("scroll", () => {
    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressWidth = (window.pageYOffset / totalHeight) * 100;
    progress.style.width = progressWidth + "%";
});

// =====================================
// Footer Year
// =====================================
const footer = document.querySelector(".footer-rights p");
if (footer) {
    footer.innerHTML = `Copyright © ${new Date().getFullYear()} Apurba's Developer Portfolio. All Rights Reserved.`;
}