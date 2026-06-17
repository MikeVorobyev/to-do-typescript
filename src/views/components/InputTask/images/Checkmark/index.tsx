import type { SVGProps } from 'react';

interface CheckmarkProps extends SVGProps<SVGSVGElement> {}

function Checkmark({ className }: CheckmarkProps) {
    return (
        <svg className={className} viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg" width="450" height="320" fill="none">
            <path fill="rgb(53,101,163)" fillRule="evenodd"
                d="M399.702 6.92304L160.926 245.831L51.2184 137.431C51.2184 137.431 30.4227 118.176 9.62864 137.431C-11.1654 156.686 8.19519 179.507 8.19519 179.507L136.547 
                307.876C136.547 307.876 146.586 320 158.775 320C170.965 320 178.135 312.155 178.135 312.155L444.876 46.8597C444.876 46.8597 459.934 26.1777 438.423 
                6.92272C421.021 -8.65359 399.702 6.92304 399.702 6.92304Z" 
            />
        </svg>
    )
}

export default Checkmark