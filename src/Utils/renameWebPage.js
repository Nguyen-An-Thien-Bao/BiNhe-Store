function renameWebPage(pageTitle = '', pageDescription = '') {
    document.title = `Bí Nhe | ${pageTitle}`;
    document.querySelector('meta[name="description"]').setAttribute('content', pageDescription);
    return;
}

export default renameWebPage;
