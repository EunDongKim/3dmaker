// 모바일 내비게이션 토글
// - 햄버거 버튼 클릭 시 메뉴 열기/닫기
// - 메뉴 안의 링크를 누르면 자동으로 닫힘 (모바일 UX)
// - 데스크톱 브레이크포인트(1024px)로 리사이즈되면 강제로 닫힌 상태로 리셋
//   (모바일에서 열어둔 채로 화면을 키웠을 때 레이아웃이 깨지는 걸 방지)

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");

  if (!toggle || !nav) return;

  function closeNav() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openNav() {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.contains("is-open");
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  var desktopQuery = window.matchMedia("(min-width: 1024px)");
  function handleBreakpointChange(e) {
    if (e.matches) {
      closeNav();
    }
  }
  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", handleBreakpointChange);
  } else if (desktopQuery.addListener) {
    // Safari 구버전 대응
    desktopQuery.addListener(handleBreakpointChange);
  }
});
