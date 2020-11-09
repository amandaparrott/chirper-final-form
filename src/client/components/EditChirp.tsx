import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, RouteComponentProps } from 'react-router-dom';

const EditChirps: React.FC<IEditProps> = (props: IEditProps) => {

    const [user, setUser] = useState<string>('');
    const [text, setText] = useState<string>('');

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/chirps/${props.match.params.id}`);
            let chirp = await res.json();
            setUser(chirp.user);
            setText(chirp.text);
        })()
    }, []);

    const handleUserChange = (e) => setUser(e.target.value);
    const handleTextChange = (e) => setText(e.target.value);

    const editChirp = async (id: string) => {
        const chirp = {
            user: user,
            text: text
        };

        let res = await fetch(`/api/chirps/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(chirp)
        })

        if (res.ok) {
            props.history.push('/');
            console.log('chirp edited');
        } else {
            console.log('chirp edit failed');
        }
    }

    const deleteChirp = async (id: string) => {
        let res = await fetch(`/api/chirps/${id}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            console.log('chirp deleted');
            props.history.push('/');
        } else {
            console.log('delete not successful');
        }
    }

    return (
        <div className="card text-center d-flex justify-content-center m-3 shadow-lg border border-info rounded">
            <div className="card-body">
                <textarea className="card-text" defaultValue={user} onChange={(e) => handleUserChange(e)}></textarea>
                <textarea className="card-text" defaultValue={text} onChange={(e) => handleTextChange(e)}></textarea>
                <button className="btn btn-info rounded" onClick={() => editChirp(props.match.params.id)}>Save Edit</button>
                <button className="btn btn-info rounded" onClick={() => deleteChirp(props.match.params.id)}>Delete Chirp</button>
            </div>
        </div>
    )
}

interface IEditProps extends RouteComponentProps<{id: string}> { }
export default EditChirps;