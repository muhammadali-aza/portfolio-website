import { Link } from "react-router-dom";
import logoSrc from "../../../assets/logo/white-logo-reeni (1).webp";

export default function Logo() {
    return (
        <div className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 ml-2 sm:ml-4 md:ml-8 lg:ml-[95px] flex-shrink-0">
            <Link to="/" aria-label="Go to home">
                <img
                    src={logoSrc}
                    alt="Reeni logo"
                    className="h-4 sm:h-5 md:h-6 w-auto object-contain cursor-pointer"
                />
            </Link>
        </div>
    );
}