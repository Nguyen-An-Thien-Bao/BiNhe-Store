function generalFunction(pageTitle = '', pageDescription = '') {
    document.title = `T-Shirt | ${pageTitle}`;
    document.querySelector('meta[name="description"]').setAttribute('content', pageDescription);
    return;
}

export default generalFunction;
