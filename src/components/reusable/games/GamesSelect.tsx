// components/GameList.tsx
import React from 'react';

//ui
import { GameCardSelect, GameCardSelectWinner } from '@/components/ui';

//constants
import { countries } from '@/utils/constants/constants';

//interfaces
import { IGame } from '@/utils/interfaces/types';

interface GameListProps {
  games: IGame[];
  onGameChange?: (game: IGame) => void;
}

export const GamesSelect: React.FC<GameListProps> = ({ games, onGameChange }) => {
  const gameTypes = Array.from(new Set(games.map(game => game.type)));

  return (
    <div className='border border-white/30 p-2 rounded-md space-y-16'>
      {gameTypes.map(type => (
        <div key={type}>
            <h2 className="text-2xl font-bold mb-4 text-center">
                {type === 'round4' ? 'Cuartos de Final' :
                type === 'round2' ? 'Semifinales' :
                type === 'third' ? 'Tercer Lugar' :
                type === 'final' ? 'Final' : type}
            </h2>
            <div className='space-y-8'>
                {games.filter(game => game.type === type).map(game => (
                    <>
                        {type === 'round4' ? <GameCardSelect key={game.num} game={game} countries={countries} onGameChange={onGameChange}/> : <GameCardSelectWinner key={game.num} game={game} countries={countries} onGameChange={onGameChange}/>}
                    </>
                ))}
            </div>
        </div>
      ))}
    </div>
  );
};