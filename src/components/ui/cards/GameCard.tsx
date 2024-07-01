// components/GameCard.tsx
import React from 'react';

//components
import { Typography } from '@/components/ui';

//icons
import { TbBuildingStadium, TbCalendar, TbTrophy } from 'react-icons/tb';

//interfaces
import { IGame } from '@/utils/interfaces/types';

interface GameCardProps {
  game: IGame;
  countries: { name: string; img: string }[];
  showGoals?: boolean;
  showPoints?: boolean;
}

export const GameCard: React.FC<GameCardProps> = ({ game, countries, showGoals = true, showPoints = false }) => {
  const country1 = countries.find(country => country.name === game.country1);
  const country2 = countries.find(country => country.name === game.country2);

  return (
    <div className='space-y-2'>
        <div>
            <div className="flex_b_center">
                
                <div className="">
                    <h3 className="font-bold">{game.country1}</h3>
                </div>
                
                <div className='flex_c_center gap-2'>
                    
                </div>
                
                
                <div className="">
                    <h3 className="bold text-right">{game.country2}</h3>
                </div>
            </div>
            <div className="flex_b_center">
                <div className="">
                    {country1 ? (
                        <div className={`border-2 w-fit rounded-lg p-1 ${game.winner === 1 ? 'border-white' : 'border-transparent'}`}>
                            <img src={country1?.img} alt={game?.country1} className="w-16 h-12 rounded-lg" />
                        </div>
                    ) : (
                        <div className="w-24 h-16 bg-white/10 rounded-lg" />
                    )}
                </div>
                <div className='flex_c_center gap-2'>
                    <div>
                        {showGoals && (
                            <Typography variant="title" text={game.country1Goals || "0"}/>
                        )}
                    </div>
                    <div>
                        <Typography variant="subtitle" text="vs"/>
                    </div>
                    <div>
                        {showGoals && (
                            <Typography variant="title" text={game.country2Goals || "0"}/>
                        )}
                    </div>
                </div>
                
                
                <div className="">
                    {country2 ? (
                        <div className={`border-2 ml-auto w-fit rounded-lg p-1 ${game.winner === 2 ? 'border-white' : 'border-transparent'}`}>
                            <img src={country2?.img} alt={game.country2} className="w-16 h-12 rounded-lg ml-auto" />
                        </div>
                    ) : (
                        <div className="w-24 h-16 bg-white/10 rounded-lg" />
                    )}
                </div>
            </div>
        </div>
        


        <div className='space-y-1'>
            <div className='flex_s_center gap-2'>
                <TbCalendar />
                <p className="text-sm">{game.date} | {game.time}</p>
            </div>
            <div className='flex_s_center gap-2'>
                <TbBuildingStadium />
                <p className="text-sm">{game.stadium}</p>
            </div>
            {showPoints && (
                <div className='flex_s_center gap-2'>
                    <TbTrophy />
                    <p className="text-sm">+{game.points !== undefined ? game.points?.toString() : "0"}</p>
                </div>
            )}
        </div>
    </div>
    
  );
};