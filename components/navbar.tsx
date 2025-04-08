import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md w-full py-4 px-2">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <Image src="/logo5.jpg" alt="Logo" width={50} height={50} />
                    {/*<span className="text-2xl font-bold text-gray-900">Almaty Alliance Stroy</span>*/}
                </div>
                <div className="hidden md:flex space-x-12"> {/* Увеличил расстояние между ссылками */}
                    <Link
                        href="#about"
                        className="relative flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4 7l8-4 8 4-8 2.5zm-8 2.5l8 5 8-5v4.5l-8 4.5-8-4.5V12z" />
                        </svg>
                        <span>О компании</span>
                    </Link>

                    <Link
                        href="/contact"
                        className="relative flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zm-1 3h2v6h-2V7zm0 8h2v2h-2v-2z" />
                        </svg>
                        <span>Контакты</span>
                    </Link>

                    <Link
                        href="#projects"
                        className="relative flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M12 2l10 5v10l-10 5-10-5V7l10-5zm-8 7.5V17l8 4 8-4V9.5l-8 4-8-4z" />
                        </svg>
                        <span>Проекты</span>
                    </Link>

                    <Link
                        href="#testimonials"
                        className="relative flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M12 2a10 10 0 00-7.07 17.07L2 22l3.93-2.93A10 10 0 1012 2zm-2 6h4v2h-4V8zm0 4h6v2h-6v-2z" />
                        </svg>
                        <span>Отзывы</span>
                    </Link>
                    <Link
                        href="https://www.instagram.com/almatyalliancestroy" // Замени на свою ссылку
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition duration-300
             after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
             after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5c3.176 0 5.75-2.574 5.75-5.75v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm8.5 2c2.22 0 4 1.78 4 4v8.5c0 2.22-1.78 4-4 4h-8.5c-2.22 0-4-1.78-4-4v-8.5c0-2.22 1.78-4 4-4h8.5zM17.75 6.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"/>
                        </svg>
                        <span>Instagram</span>
                    </Link>
                    <Link
                        href="https://wa.me/77785555016" // Замени на свой номер в формате 7XXXXXXXXXX
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition duration-300
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
        after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {/*<svg*/}
                        {/*    xmlns="http://www.w3.org/2000/svg"*/}
                        {/*    viewBox="0 0 24 24"*/}
                        {/*    fill="currentColor"*/}
                        {/*    className="w-6 h-6"*/}
                        {/*>*/}
                        {/*    <path d="M12 2C6.477 2 2 6.477 2 12c0 2.053.623 3.967 1.678 5.575L2 22l4.575-1.678C8.033 21.377 9.947 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8 0 4.06-3.059 7.423-7 7.931v-.001c-.581-.09-1.184-.327-1.707-.713l-2.166.798.798-2.166c-.386-.523-.623-1.126-.713-1.707h-.001c.508-3.941 3.87-7 7.931-7 0-4.418-3.582-8-8-8S4 7.582 4 12c0 2.053.623 3.967 1.678 5.575L4 22l4.575-1.678C8.033 21.377 9.947 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zM8.793 7.293c.39-.39 1.024-.39 1.414 0l2.5 2.5a1 1 0 01-1.414 1.414l-2.5-2.5a1 1 0 010-1.414zm5.5 0c.39-.39 1.024-.39 1.414 0l2.5 2.5a1 1 0 01-1.414 1.414l-2.5-2.5a1 1 0 010-1.414z"/>*/}
                        {/*</svg>*/}
                        <span>WhatsApp</span>
                    </Link>
                </div>

                <div className="text-lg font-semibold text-gray-900">
                    <a href="tel:+77785555016" className="hover:text-yellow-500 transition">87785555016</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
