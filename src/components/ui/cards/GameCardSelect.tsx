'use client'

// components/GameCard.tsx
import React, { useState, useEffect } from 'react';

//components
import { Typography, ButtonIcon } from '@/components/ui';

//icons
import { TbBuildingStadium, TbCalendar, TbSquareRoundedChevronDown, TbSquareRoundedChevronUp, } from 'react-icons/tb';

//interfaces
import { IGame } from '@/utils/interfaces/types';

interface GameCardProps {
  game: IGame;
  countries: { name: string; img: string }[];
  onGameChange?: (game: IGame) => void;
}

export const GameCardSelect: React.FC<GameCardProps> = ({ game, countries, onGameChange }) => {
    //countries
    const country1 = countries.find(country => country.name === game.country1);
    const country2 = countries.find(country => country.name === game.country2);

    //state - game
    const [gameState, setGameState] = useState<IGame | null>(null)

    //useEffect
    useEffect(() => {
        setGameState({ 
            ...game,
            country1Goals: game.country1Goals || 0,
            country2Goals: game.country2Goals || 0
        })
    }, [])

    //handle score change
    const handleScoreChange = (key: 'country1Goals' | 'country2Goals', value: number) => {
        console.log(key, value)
        //update winner
        let tempGame: IGame = { ...gameState, [key]: value } as IGame;
        tempGame = { ...tempGame, winner: tempGame.country1Goals === tempGame.country2Goals ? 0 : tempGame.country1Goals! > tempGame.country2Goals! ? 1 : 2 }

        setGameState({ ...tempGame } as IGame)

        if (onGameChange) {
            onGameChange(tempGame)
        }
    }

    //handle winner change
    const handleWinnerChange = (winner: number) => {
        //return if goals are not the same
        if (gameState?.country1Goals !== gameState?.country2Goals) return;

        setGameState({ ...gameState, winner: winner } as IGame)
        if (onGameChange) {
            onGameChange({ ...gameState, winner: winner } as IGame)
        }
    }
    

    return (
        <div className='space-y-2'>
            <div className="rounded-lg flex_b_center">
                
                <div className="">
                    <Typography variant="text" text={gameState?.country1 || ''} className='bold' />
                    {country1 ? (
                        <div className={`border-2 pointer rounded-lg p-1 w-fit ${gameState?.winner === 1 ? 'border-white' : 'border-transparent'}`} onClick={() => handleWinnerChange(1)}>
                            <img src={country1?.img} alt={gameState?.country1} className="w-16 h-12 rounded-lg" />
                        </div>
                    ) : (
                        <div className="w-24 h-16 bg-white/10 rounded-lg" />
                    )}
                </div>
                
                <div className='flex_c_center gap-2'>
                    <div>
                        <Typography variant="title" text={gameState?.country1Goals || "0"} className='text-center'/>
                        <div className='flex_b_center'>
                            <ButtonIcon icon={<TbSquareRoundedChevronDown className='text-white'/>} onClick={() => handleScoreChange('country1Goals', gameState?.country1Goals! - 1)}/>
                            <ButtonIcon icon={<TbSquareRoundedChevronUp className='text-white'/>} onClick={() => handleScoreChange('country1Goals', gameState?.country1Goals! + 1)}/>
                        </div>
                    </div>
                    <div>
                        <Typography variant="subtitle" text="vs"/>
                    </div>
                    <div className=''>
                        <Typography variant="title" text={gameState?.country2Goals || 0} className='text-center'/>
                        <div className='flex_b_center'>
                            <ButtonIcon icon={<TbSquareRoundedChevronDown className='text-white'/>} onClick={() => handleScoreChange('country2Goals', gameState?.country2Goals! - 1)}/>
                            <ButtonIcon icon={<TbSquareRoundedChevronUp className='text-white'/>} onClick={() => handleScoreChange('country2Goals', gameState?.country2Goals! + 1)}/>
                        </div>
                    </div>
                </div>
                
                
                <div className="">
                    <Typography variant="text" text={game.country2} className='text-right bold' />
                    {country2 ? (
                        <div className={`border-2 pointer rounded-lg ml-auto p-1 w-fit ${gameState?.winner === 2 ? 'border-white' : 'border-transparent'}`} onClick={() => handleWinnerChange(2)}>
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