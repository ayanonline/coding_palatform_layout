const sidebar = document.querySelector(".sidebar");
const bar = document.querySelector(".bar");
const code = document.querySelector(".code");
const bar2 = document.querySelector(".bar2");

bar.addEventListener("mousedown", handleMouseDown);
bar2.addEventListener("mousedown", handleMouseDown2);

function handleMouseDown(e) {
  const sidebarWidth = parseInt(window.getComputedStyle(sidebar).width);
  const x = e.clientX;
  console.log("sidebar-width==>", sidebarWidth);
  console.log("client x ==>", x);

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousedown", handleMouseDown);
    document.removeEventListener("mousemove", handleMouseMove);
  });

  function handleMouseMove(e) {
    const dx = e.clientX - x;
    const cx = sidebarWidth + dx;
    sidebar.style.width = `${cx}px`;
  }
}

function handleMouseDown2(e) {
  const codeHeight = parseInt(window.getComputedStyle(code).height);
  const y = e.clientY;
  console.log("code-height==>", codeHeight);
  console.log("client y ==>", y);

  document.addEventListener("mousemove", handleMouseMove2);
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousedown", handleMouseDown2);
    document.removeEventListener("mousemove", handleMouseMove2);
  });

  function handleMouseMove2(e) {
    const dy = e.clientY - y;
    const cy = codeHeight + dy;
    code.style.height = `${cy}px`;
  }
}
