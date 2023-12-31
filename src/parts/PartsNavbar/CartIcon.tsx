import { useState } from 'react';
export default function CartIcon() {
    const [cartItems, setCarTItem] = useState(2); // TODO: cart items should be fetched from backend

    return (
        <div
            className={`justify-center flex items-center ${
                cartItems === 0 ? 'pr-2' : 'pr-3'
            }`}
            style={{ minWidth: '34px' }}
        >
            <div className="relative md:scale-75">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-7 w-7 xm:h-10 xm:w-10 text-theme-color xm:text-white"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                </svg>
                {/* TODO cart items should be fetched from backend */}
                {cartItems > 0 && (
                    <span
                        className="absolute -top-2 left-4 rounded-full  bg-red-upschool p-0.5 px-2 xm:px-2 text-sm text-white"
                        onClick={() => {
                            setCarTItem(0);
                        }}
                    >
                        {cartItems}
                    </span>
                )}
            </div>
        </div>
    );
}
