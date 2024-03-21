import { handleCloseMobileMenu } from '../../Utils/mobileNavFunction';

function Modal({ children, id = '', modal_ID = '', className = '', translate = '' }) {
    return (
        <>
            <div
                id={id}
                className={`${className} fixed z-50 h-[100vh] bg-white opacity-0 transition-all duration-300 ease-in-out md:max-lg:w-full`}
            >
                {children}
            </div>
            <div
                id={modal_ID}
                className="inset-0 z-20 hidden bg-black opacity-80 transition-all duration-300"
                onClick={() => handleCloseMobileMenu(modal_ID, id, translate)}
            ></div>
        </>
    );
}

export default Modal;
