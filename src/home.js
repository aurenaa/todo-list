function createHomePage() {
    const content = document.querySelector(".content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
    content.appendChild(pageContent);
}

export default createHomePage;