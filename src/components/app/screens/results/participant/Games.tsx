'use client'

//reusable
import { GamesList } from '@/components/reusable';

//interfaces
import { IGame } from '@/utils/interfaces/types';

interface props {
    games: IGame[]
}

const Games = ({ games }: props) => {
    
    //handle get gam
    return (
        <div className='space-y-4'>
            <GamesList games={games} showGoals={false} showPoints={true}/>
        </div>
    )
}

export default Games