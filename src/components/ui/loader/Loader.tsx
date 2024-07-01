'use client'

import { StageSpinner } from "react-spinners-kit";

export const Loader = () => {
    return (
        <div className="mx-auto w-fit">
            <StageSpinner size={80} color="#FFF" loading={true} />
        </div>
    )
}