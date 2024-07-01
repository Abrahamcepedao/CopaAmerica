// components/GameList.tsx
import React from 'react';
import { GameCard } from '@/components/ui';

//constants
import { countries } from '@/utils/constants/constants';

//interfaces
import { IGame } from '@/utils/interfaces/types';

interface GameListProps {
  games: IGame[];
  showGoals?: boolean;
  showPoints?: boolean;
}

export const GamesList: React.FC<GameListProps> = ({ games, showGoals = true, showPoints = false }) => {
  const gameTypes = Array.from(new Set(games.map(game => game.type)));

  return (
    <div className='space-y-16'>
      {gameTypes.map(type => (
        <div key={type} className='border border-white p-2 rounded-md'>
            <h2 className="text-2xl font-bold mb-4 text-center">
                {type === 'round8' ? 'Octavos de Final' :
                type === 'round4' ? 'Cuartos de Final' :
                type === 'round2' ? 'Semifinales' :
                type === 'final' ? 'Final' : type}
            </h2>
            <div className='space-y-8'>
                {games.filter(game => game.type === type).map(game => (
                    <GameCard key={game.num} game={game} countries={countries} showGoals={showGoals ? showGoals : game.type === 'round8'} showPoints={showPoints}/>
                ))}
            </div>
        </div>
      ))}
    </div>
  );
};