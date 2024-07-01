'use client'

//react
import { useEffect, useState } from "react";

//components - ui
import { Typography, Button, Form } from "@/components/ui";

//components - reusable
import { GamesSelect } from "@/components/reusable";

//react-icons
import { TbInfoCircle } from "react-icons/tb";

//redux
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setReduxUser } from "@/app/GlobalRedux/Features/auth/authSlice";

//lib
import { participantService } from "@/database/functions/DbService";

//antd
import { message } from "antd";

//uitls
import { getFormValue } from "@/utils/functions/utility_functions";

//constants
import { games as tempGames } from "@/utils/constants/constants";

//interfaces
import { IUser, IGame, IInput } from "@/utils/interfaces/types";

const Selection = () => {
    //redux
    const reduxUser: IUser | null = useSelector(selectUser);
    const dispatch = useDispatch();

    //state - games
    const [round8Games, setRound8Games] = useState<IGame[]>([]);
    const [round4Games, setRound4Games] = useState<IGame[]>([]);
    const [round2Games, setRound2Games] = useState<IGame[]>([]);
    const [finalGames, setFinalGames] = useState<IGame[]>([]);

    //state - inputs
    const [inputs, setInputs] = useState<IInput[]>([
        { name: 'more_goals', label: 'Campeón goleador a partir de octavos', placeholder: 'Ej: Messi', type: 'text', value: '', variant: 'filled' },
        { name: 'final_score', label: '¿Cuál será el marcador de la final?', placeholder: 'Ej: 0-0', type: 'text', value: '', variant: 'filled' },
        { name: 'regular_time', label: '¿La final se define en tiempo regular?', placeholder: 'Ej: (si/no)', type: 'text', value: '', variant: 'filled' },
        { name: 'extra_time', label: '¿La final se define en tiempos extras?', placeholder: 'Ej: (si/no)', type: 'text', value: '', variant: 'filled' },
        { name: 'penalties', label: '¿La final se define en penales?', placeholder: 'Ej: (si/no)', type: 'text', value: '', variant: 'filled' },
        
    ])

    //useState - uploading
    const [uploading, setUploading] = useState(false);

    //useState - disabled
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        //initialize games
        setRound8Games(tempGames.filter(game => game.type === 'round8'));
        setRound4Games(tempGames.filter(game => game.type === 'round4'));
        setRound2Games(tempGames.filter(game => game.type === 'round2'));
        setFinalGames(tempGames.filter(game => game.type === 'final'));
    }, []);

    //useEffect - verify games and inputs to enable submit
    useEffect(() => {
        const allGames = round8Games.concat(round4Games, round2Games, finalGames);
        const gamesSelected = round8Games.concat(round4Games, round2Games, finalGames).filter(game => game.winner);
        const inputsFilled = inputs.every(input => input.value);

        if (gamesSelected.length === allGames.length && inputsFilled) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [round8Games, round4Games, round2Games, finalGames, inputs]);

    //Handle game change
    const handleGameChange = (updatedGame: IGame) => {
        const updateGames = (games: IGame[], setGames: React.Dispatch<React.SetStateAction<IGame[]>>) => {
            setGames(games.map(game => game.num === updatedGame.num ? updatedGame : game));
        };

        const updateNextStage = (winnerKey: string, winnerValue: string) => {
            let nextStageGames: IGame[] = [];
            let setNextStageGames: React.Dispatch<React.SetStateAction<IGame[]>>;

            if (updatedGame.type === 'round8') {
                nextStageGames = round4Games;
                setNextStageGames = setRound4Games;
            } else if (updatedGame.type === 'round4') {
                nextStageGames = round2Games;
                setNextStageGames = setRound2Games;
            } else if (updatedGame.type === 'round2') {
                nextStageGames = finalGames;
                setNextStageGames = setFinalGames;
            } else {
                return;
            }

            setNextStageGames(nextStageGames.map(game => {
                if (game.winner1 === winnerKey) {
                    return { ...game, country1: winnerValue };
                }
                if (game.winner2 === winnerKey) {
                    return { ...game, country2: winnerValue };
                }
                return game;
            }));
        };

        switch (updatedGame.type) {
            case 'round8':
                updateGames(round8Games, setRound8Games);
                if (updatedGame.winner === 1) {
                    updateNextStage(`W${updatedGame.num}`, updatedGame.country1);
                } else if (updatedGame.winner === 2) {
                    updateNextStage(`W${updatedGame.num}`, updatedGame.country2);
                }
                break;
            case 'round4':
                updateGames(round4Games, setRound4Games);
                if (updatedGame.winner === 1) {
                    updateNextStage(`W${updatedGame.num}`, updatedGame.country1);
                } else if (updatedGame.winner === 2) {
                    updateNextStage(`W${updatedGame.num}`, updatedGame.country2);
                }
                break;
            case 'round2':
                updateGames(round2Games, setRound2Games);
                if (updatedGame.winner === 1) {
                    updateNextStage(`W${updatedGame.num}`, updatedGame.country1);
                } else if (updatedGame.winner === 2) {
                    updateNextStage(`W${updatedGame.num}`, updatedGame.country2);
                }
                break;
            case 'final':
                updateGames(finalGames, setFinalGames);
                break;
        }
    };

    //handle input change
    const handleInputChange = (n: number, value: string) => {
        let tempInputs = [...inputs];
        tempInputs[n].value = value;
        setInputs(tempInputs);
    };

    //hnadle verify
    const handleVerify = () => {

        //check if all games are selected
        if (round8Games.some(game => !game.winner) || round4Games.some(game => !game.winner) || round2Games.some(game => !game.winner) || finalGames.some(game => !game.winner)) {
            message.error('¡Debes seleccionar un ganador para todos los partidos!');
            return false
        }

        //check if all inputs are filled
        if (inputs.some(input => !input.value)) {
            message.error('¡Debes llenar todos los campos!');
            return false
        }

        return true;
    }

    //handle submit
    const handleSubmit = async () => {
        if(!handleVerify()) return;
        try {
            //set uploading
            setUploading(true);

            //set disabled
            setDisabled(true);

            //update user
            const updatedUser: IUser = {
                ...reduxUser!,
                hasSelected: true,
                data: {
                    round8Games,
                    round4Games,
                    round2Games,
                    finalGames,
                    responses: {
                        more_goals: getFormValue('more_goals', inputs),
                        final_score: getFormValue('final_score', inputs),
                        regular_time: getFormValue('regular_time', inputs),
                        extra_time: getFormValue('extra_time', inputs),
                        penalties: getFormValue('penalties', inputs),
                    }
                }
            };
            console.log(updatedUser);

            //update user
            const res = await participantService.update(reduxUser?.uid || '', updatedUser);
            console.log(res);

            if(res.status === 200) {
                dispatch(setReduxUser(updatedUser));
                //show message
                message.success('¡Tu pronóstico ha sido guardado exitosamente!');
            } else {
                message.error('¡Ocurrió un error al guardar tu pronóstico!');
            }
        } catch (error) {
            console.log(error);
            message.error('¡Ocurrió un error al guardar tu pronóstico!');
        } finally {
            setDisabled(false);
            setUploading(false);
        }
    }

    return (
        <div className="space-y-4">
            <div>
                <Typography variant="subtitle" text="¡Es momento de seleccionar tu predicción!" className="text-center"/>
            </div>
            <div className="space-y-8">
                <GamesSelect games={round8Games} onGameChange={handleGameChange} />
                <GamesSelect games={round4Games} onGameChange={handleGameChange} />
                <GamesSelect games={round2Games} onGameChange={handleGameChange} />
                <GamesSelect games={finalGames} onGameChange={handleGameChange} />
            </div>

            <div>
                <Typography variant="subtitle" text="¡Contesta las preguntas de desempate!" className="text-center"/>
            </div>

            <div>
                <Form form={inputs} handleInputChange={handleInputChange} onSubmit={() => {}}/>
            </div>

            <div className="space-y-2">
                <div className="flex items-center bg-white/10 p-4 rounded-lg">
                    <div>
                        <TbInfoCircle className="mr-2"/>
                    </div>
                    <Typography variant="text" text="Una vez guardado tu pronóstico, no podrás modificarlo. Así que asegúrate de revisar bien tus selecciones. ¡Suerte!" className="text-justify"/>
                </div>
                <Button text="Guardar predicción" variant="primary" loading={uploading} disabled={disabled || uploading} onClick={handleSubmit}/>
            </div>
        </div>
    );
};

export default Selection;