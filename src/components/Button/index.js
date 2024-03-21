function Button({ children, className = '', size = '', border = false }) {
    let sizeClass;
    switch (size) {
        case 'sm':
            sizeClass = 'px-8 py-4 text-2xl uppercase';
            break;
        case 'md':
            sizeClass = 'px-14 py-2 text-2xl uppercase';
            break;
        case 'lg':
            sizeClass = 'px-14 py-6 text-3xl uppercase';
            break;
        case 'exlg':
            sizeClass = 'px-[35px] py-[14px] text-2xl uppercase';
            break;
        default:
            sizeClass = '';
    }

    return (
        <button className={`${className} ${sizeClass} border-black ${border ? 'border' : 'rounded-none'}`}>
            {children}
        </button>
    );
}

export default Button;
