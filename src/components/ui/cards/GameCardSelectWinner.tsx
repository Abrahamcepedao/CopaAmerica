'use client'

// components/GameCard.tsx
import React, { useState, useEffect } from 'react';

//components
import { Typography } from '@/components/ui';

//icons
import { TbBuildingStadium, TbCalendar } from 'react-icons/tb';

//interfaces
import { IGame } from '@/utils/interfaces/types';

interface GameCardProps {
  game: IGame;
  countries: { name: string; img: string }[];
  onGameChange?: (game: IGame) => void;
}

export const GameCardSelectWinner: React.FC<GameCardProps> = ({ game, countries, onGameChange }) => {
    //countries
    const country1 = countries.find(country => country.name === game.country1);
    const country2 = countries.find(country => country.name === game.country2);

    //state - game
    const [selectedWinner, setSelectedWinner] = useState<number>(0)

    //useEffect
    useEffect(() => {
        setSelectedWinner(game.winner || 0)
    }, [game])


    //handle winner change
    const handleWinnerChange = (winner: number) => {

        setSelectedWinner(winner)
        if (onGameChange) {
            onGameChange({ ...game, winner: winner } as IGame)
        }
    }

    return (
        <div className='space-y-2'>
            <div className="rounded-lg flex_b_center">
                
                <div className="">
                    {/* <h3 className="font-bold">{game.country1}</h3> */}
                    <Typography variant="text" text={game?.country1 || ''} className='bold' />
                    {country1 ? (
                        <div className={`border-2 w-fit pointer rounded-lg p-1 ${selectedWinner === 1 ? 'border-white' : 'border-transparent'}`} onClick={() => handleWinnerChange(1)}>
                            <img src={country1?.img} alt={game?.country1} className="w-16 h-12 rounded-lg" />
                        </div>
                    ) : (
                        <div className="w-24 h-16 bg-white/10 rounded-lg" />
                    )}
                </div>
                
                <div className='flex_c_center gap-2'>
                    <div>
                        <Typography variant="subtitle" text="vs"/>
                    </div>
                </div>
                
                
                <div className="">
                    <Typography variant="text" text={game.country2} className='text-right bold' />
                    {country2 ? (
                        <div className={`border-2 w-fit pointer rounded-lg p-1 ${selectedWinner === 2 ? 'border-white' : 'border-transparent'}`} onClick={() => handleWinnerChange(2)}>
                            <img src={country2?.img} alt={game.country2} className="w-16 h-12 rounded-lg ml-auto" />
                        </div>
                    ) : (
                        <div className="w-24 h-16 bg-white/10 rounded-lg" />
                    )}
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
            </div>
        </div>
        
    );
};