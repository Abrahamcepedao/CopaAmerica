interface Props {
    text: string,
    onClick?: () => void,
}

export const AnimatedButton = ({ text, onClick }: Props) => {
    return (
        <button className="dark_button group" onClick={onClick}>
            {text}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 dark_button-arrow group-hover:translate-x-1">
                <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
}
