import React from 'react';
import ChirpBody from './ChirpBody';
import { useState, useEffect } from 'react';

const Chirps: React.FC<IChirpsProps> = props => {
    const [chirps, setChirps] = useState<IChirp[]>([])

    useEffect(() => {
        const getChirps = async () => {
            let res = await fetch('/api/chirps');
            if (res.ok) {
                let chirps = await res.json();
                setChirps(chirps);
            }
        };

        getChirps();
    }, []);
// map through chirps
    return (
        <div>
            {chirps.map((chirp) => (  <ChirpBody  chirp={chirp} key={chirp.id} />))}
        </div>

    )

}

interface IChirp {
    id: string,
    user: string,
    text: string
}

interface IChirpsProps {}

export default Chirps;