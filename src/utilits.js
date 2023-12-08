export const eliscUtilits = {
  dataImage() {
    let d = document.querySelectorAll("[data-img-url");
    for (let i = 0; i < d.length; i++) {
      const element = d[i];
      element.style.backgroundImage = `url(${element.getAttribute(
        "data-img-url"
      )})`;
    }
  },
  preloader() {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    )
      ? true
      : false;
    let preloader = document.getElementById("preloader");

    if (preloader) {
      if (!isMobile) {
        setTimeout(function () {
          preloader.classList.add("preloaded");
        }, 800);
        setTimeout(function () {
          preloader.remove();
        }, 2000);
      } else {
        preloader.remove();
      }
    }

    setTimeout(() => {
      document.querySelector("body").classList.add("opened");
    }, 3000);
  },
  customCursor() {
    var myCursor = document.querySelectorAll(".mouse-cursor"),
      hamburger = document.querySelector(".hamburger"),
      kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
      pointer = document.querySelector(".cursor-pointer"),
      e = document.querySelector(".cursor-inner"),
      t = document.querySelector(".cursor-outer");

    function mouseEvent(element) {
      element.addEventListener("mouseenter", function () {
        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
      });
      element.addEventListener("mouseleave", function () {
        e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
      });
    }

    if (myCursor.length) {
      if (document.body) {
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          // console.log(document.querySelector(this));
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          document.body.addEventListener(
            "mouseenter",
            // "a,.kura_tm_topbar .trigger, .cursor-pointer",
            function () {
              let a = document.querySelectorAll("a");
              e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

              for (let i = 0; i < a.length; i++) {
                const element = a[i];
                mouseEvent(element);
              }

              hamburger && mouseEvent(hamburger);
              kura_tm_topbar && mouseEvent(kura_tm_topbar);
              pointer && mouseEvent(pointer);
            }
          ),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  },
  imgToSVG() {
    document.querySelectorAll("img.svg").forEach((el) => {
      const imgID = el.getAttribute("id");
      const imgClass = el.getAttribute("class");
      const imgURL = el.getAttribute("src");

      fetch(imgURL)
        .then((data) => data.text())
        .then((response) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, "text/html");
          let svg = xmlDoc.querySelector("svg");

          if (typeof imgID !== "undefined") {
            svg.setAttribute("id", imgID);
          }

          if (typeof imgClass !== "undefined") {
            svg.setAttribute("class", imgClass + " replaced-svg");
          }

          svg.removeAttribute("xmlns:a");
          if (el.parentNode) {
            el.parentNode.replaceChild(svg, el);
          }
        });
    });
  },
  blogMoveingBox() {
    var lists = document.querySelectorAll(".elisc_blogs_list > ul > li");
    let box = document.querySelector(".elisc_fn_moving_box");

    if (!box) {
      let body = document.querySelector("body");
      let div = document.createElement("div");
      div.classList.add("elisc_fn_moving_box");
      body.appendChild(div);
    }

    lists.forEach((list) => {
      list.addEventListener("mouseenter", (event) => {
        box.classList.add("opened");
        var imgURL = list.getAttribute("data-img");
        console.log(imgURL);
        box.style.backgroundImage = `url(${imgURL})`;
        box.style.top = event.clientY - 50 + "px";
        console.log(event.clientY);
        if (imgURL === "") {
          box.classList.remove("opened");
          return false;
        }
      });
      list.addEventListener("mouseleave", () => {
        box.classList.remove("opened");
      });
    });
  },
  smoothScrolling() {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll(".elisc_tm_section");
      const navLi = document.querySelectorAll(".transition_link li");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
      navLi.forEach((li) => {
        if (current !== null) {
          li.classList.remove("active");
        }
        if (
          li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`
        ) {
          li.classList.add("active");
        }
      });
    });
  },
};
