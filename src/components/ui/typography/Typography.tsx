//next/font/google
import { League_Spartan } from "next/font/google";

interface Props {
    text: string | number;
    variant: 'title' 
        | 'title_left'
        | 'subtitle'
        | 'subtitle_alt'
        | 'subtitle_2' 
        | 'subtitle_3' 
        | 'subtitle_text'
        | 'text'
        | 'text_sm'
        | 'text_label'
        | 'kpi_number'
        | 'kpi_text';
    className?: string;
}

let styles = {
    'title': 'title',
    'title_left': 'title-left',
    'subtitle': 'subtitle',
    'subtitle_alt': 'body title-md-strong pb-[24px] !font-light opacity-80',
    'subtitle_2': 'subtitle_2',
    'subtitle_3': 'title-sm-bold',
    'subtitle_text': 'subtitle-text',
    'text': 'text',
    'text_sm': 'text-sm',
    'text_label': 'label',
    'kpi_number': 'bold text-4xl',
    'kpi_text': 'caption  md:title-md-strong !font-light opacity-80'
}

const league_spartan = League_Spartan({ subsets: ["latin"] });

export const Typography = ({ text, variant = 'text', className = '' }: Props) => {
    
    return (
        <>
            {variant === 'title' && <h1 className={`${league_spartan.className} ${styles[variant]} ${className}`}>{text}</h1>}
            {variant === 'title_left' && <h1 className={`${league_spartan.className} ${styles[variant]} ${className}`}>{text}</h1>}
            {variant === 'subtitle' && <h2 className={`${league_spartan.className} ${styles[variant]} ${className}`}>{text}</h2>}
            {variant === 'subtitle_2' && <h3 className={`${styles[variant]} ${className}`}>{text}</h3>}
            {variant === 'subtitle_3' && <h4 className={`${styles[variant]} ${className}`}>{text}</h4>}
            {variant === 'subtitle_alt' && <p className={`${styles[variant]} ${className}`}>{text}</p>}
            {variant === 'subtitle_text' && <p className={`${styles[variant]} ${className}`}>{text}</p>}
            {variant === 'text' && <p className={`${styles[variant]} ${className}`}>{text}</p>}
            {variant === 'text_sm' && <p className={`${styles[variant]} ${className}`}>{text}</p>}
            {variant === 'text_label' && <p className={`${styles[variant]} ${className}`}>{text}</p>}
            {variant === 'kpi_number' && <p className={`${styles[variant]} ${className}`}>{text}</p>}
            {variant === 'kpi_text' && <p className={`${styles[variant]} ${className}`}>{text}</p>}
        </>
    );
}