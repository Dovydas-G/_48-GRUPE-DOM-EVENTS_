function header() {
    const navDOM = document.querySelector('.main-nav');
    const href = location.hostname === 'localhost' ? '/' : window.location.pathname ? '_48-GRUPE-DOM-EVENTS_./' : '_48-GRUPE-DOM-EVENTS_../';
    // const href = window.location.pathname ? '../' : './';
    const HTML = `
        <a href="${href}">Home</a>
        <a href="${href}single-button-click">Single button click</a>
        <a href="${href}counter/">Counter</a>
        <a href="${href}basketball/">Basketball</a>
        <a href="${href}virykle/">Virykle</a>
    `;
    navDOM.innerHTML = HTML;
}

export { header };

