//ui
import { Typography } from "@/components/ui";

interface Props {
    sport: string;
}

const variants = {
    'sport': 'bg-green_alt text-green',
    'board': 'bg-blue_alt text-blue',
    'video': 'bg-purple_alt text-purple',
}

const games = {
    'soccer': 'sport',
    'basketball': 'sport',
    'volleyball': 'sport',
    'tennis': 'sport',
    'table tennis': 'sport',
    'chess': 'board',
    'checkers': 'board',
    'video games': 'video'
}

export const GameChip = ({ sport }: Props) => {
    return (
        <div className={`flex_s_center gap-2 ${variants[games[sport as 'soccer'] as 'sport' || 'sport']} rounded-md px-3 py-1 w-fit`}>
            <Typography text={sport} variant='text_sm' />
        </div>
    );
}