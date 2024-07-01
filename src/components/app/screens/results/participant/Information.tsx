//interfaces
import { IUser } from '@/utils/interfaces/types'

interface Props {
    participant: IUser | null
}

const Information = ({ participant }: Props) => {
    
    return (
        <div className='space-y-4'>
            {participant?.data && (
                <>
                    {participant.data.responses && (
                        <div className='ds_container w-full'>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <p className='text'>Goleador</p>
                                    <p className='text bold'>{participant?.copamerica?.data?.responses?.more_goals}</p>
                                </div>
                                <div>
                                    <p className='text'>Marcador final</p>
                                    <p className='text bold'>{participant?.copamerica?.data?.responses?.final_score}</p>
                                </div>
                                <div>
                                    <p className='text'>¿Tiempo regular?</p>
                                    <p className='text bold'>{participant?.copamerica?.data?.responses?.regular_time || '-'}</p>
                                </div>
                                <div>
                                    <p className='text'>¿Tiempo Extra?</p>
                                    <p className='text bold'>{participant?.copamerica?.data?.responses?.extra_time || '-'}</p>
                                </div>
                                <div>
                                    <p className='text'>¿Penales?</p>
                                    <p className='text bold'>{participant?.copamerica?.data?.responses?.penalties || '-'}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default Information