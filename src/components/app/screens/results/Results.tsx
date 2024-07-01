'use client';

//react
import { useState, useEffect } from 'react'

//next
import { useRouter } from 'next/navigation';

//ui
import { Typography, Loader } from '@/components/ui'

//hooks
import { useLeaderboard } from '@/utils/hooks';

//react-simple-pull-to-refresh
import PullToRefresh from 'react-simple-pull-to-refresh';

//utils
import { formatMoney } from '@/utils/functions/utility_functions';

//interfaces
import { ILeaderboardPos } from '@/utils/interfaces/types';

const Results = () => {
    //hooks
    const { leaderboard, loading: loadingLeaderboard , refetchData } = useLeaderboard()

    //next
    const { push } = useRouter()

    //state - leaderboardPositions
    const [leaderboardPositions, setLeaderboardPositions] = useState<ILeaderboardPos[]>([])

    //useState - loading
    const [loading, setLoading] = useState(true)

    //useEffect
    useEffect(() => {

        if(!loadingLeaderboard) {
            if(leaderboard) {
                setLeaderboardPositions(leaderboard.positions || [])
            }
            setLoading(false)
        }

    }, [loadingLeaderboard, leaderboard])


    //handle refresh
    const handleRefresh = async () => {
        setLoading(true)
        await refetchData()
    }

    //handle participant click
    const handleParticipantClick = (uid: string) => {
        push(`/app/results/${uid}`)
    }

    if(loading) return <Loader />

    return (
        <PullToRefresh onRefresh={handleRefresh} className="text-white" refreshingContent={<Loader />}>
            <div className="px-4 min-h-[400px] space-y-2">
                <div className='flex_b_center gap-4'>
                    <div className='flex_s_center gap-2'>
                        <Typography variant='text' text={`Bolsa:`} className='text-white'/>
                        <Typography variant='text' text={`${formatMoney(leaderboard?.bolsa || 0)}`} className='text-white bold'/>
                    </div>
                </div>
                <div className='overflow-hidden primary_back space-y-2'>
                    {leaderboardPositions.length > 0 ? leaderboardPositions.map((pos) => (
                        <div key={pos.uid} className={`flex_b_center pointer gap-4 bg-white/10 p-4 rounded-xl text-white`} onClick={() => handleParticipantClick(pos.uid)}>
                            <div className='w-[40px] text-left'>{pos.position}</div>
                            <div className='w-full text-left'>
                                {/* <div className=''>{pos.nickname}</div> */}
                                <Typography variant='subtitle_3' text={pos.nickname} className='bold'/>
                                {/* <p>{pos.points} pts</p> */}
                                <Typography variant='text_sm' text={`${pos.points} pts`} />
                            </div>
                            <div className=' w-[100px] text-right'>${pos.money || 0}</div>
                        </div>
                    )) : (
                        <div className='flex_center h-[200px] border rounded-md bg-white/10 border-dashed'>
                            <Typography variant='text' text='No hay resultados todavía' />
                        </div>
                    )}
                </div>
            </div>
        </PullToRefresh>
    );
}

export default Results