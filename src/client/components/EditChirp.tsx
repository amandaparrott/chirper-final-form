import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const EditChirps: React.FC<IEditProps> = () => {

    const { chirpid } = useParams();
    const history = useHistory();

    const [user, setUser] = useState<string>('');
    const [text, setText] = useState<string>('');

    const handleUserChange = (e) => setUser(e.target.value);
    const handleTextChange = (e) => setText(e.target.value);
    const handleEditButton = (e) => {
        e.preventDefault();
        editChirp();
    }
    const handleDeleteButton = (e) => {
        e.preventDefault();
    }


    const editChirp = async () => {
        const chirp = {
            user: user,
            text: text
        };
        let res = await fetch(`/api/chirps/${chirpid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user, text })
        })
        if (res.ok) {
            history.push('/');
            console.log('chirp edited');

        } else {
            console.log('chirp edit failed');
        }
    }
    useEffect(() => {
        editChirp();
    }, []);

    const deleteChirp = async (e) => {
        e.preventDefault();
        let res = await fetch(`/chirps/${chirpid}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            console.log('chirp deleted');
            history.push('/');
        } else {
            console.log('delete not successful');
        }
    }
    useEffect(() => {
        (async () => {
            let res = await fetch(`/chirps/${chirpid}`);
            let chirp = await res.json();
            setUser(chirp.user);
            setText(chirp.text);
        })
    }, [chirpid]);

    return (
        <div className="card text-center d-flex justify-content-center m-3 shadow-lg border border-info rounded">
            <div className="card-body">
                <textarea className="card-text" onChange={e => handleUserChange(e)}>{user}</textarea>
                <textarea className="card-text" onChange={e => handleTextChange(e)}>{text}</textarea>
                <button className="btn btn-info rounded" onClick={e => handleEditButton(e)}>Save Edit</button>
                <button className="btn btn-info rounded" onClick={e => handleDeleteButton(e)}>Delete Chirp</button>
            </div>
        </div>
    )
}

interface IEditProps { }
export default EditChirps;