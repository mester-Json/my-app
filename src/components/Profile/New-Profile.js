import React, { useState } from "react";
import {
    StyleForm,
    StyleH2,
    StyleButton,
    StyleLabel,
    StyleSubmit,
} from "./New-Profile.style";

function Profile() {
    const [username, setUsername] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {

    };

    return (
        <div>
            <StyleH2>Mon Nouveau Compte </StyleH2>
            <StyleForm>
                <StyleLabel>Nom d'utilisateur:</StyleLabel>
                <StyleButton
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Votre Nom "
                />
                <StyleLabel>Adresse Mail:</StyleLabel>
                <StyleButton
                    type="mail"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    placeholder="Votre Mail "
                />
                <StyleLabel>Mot de passe:</StyleLabel>
                <StyleButton
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mon Mot De Passe"
                />
                <StyleLabel> Retaper le mot de passe:</StyleLabel>
                <StyleButton
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Retaper le mot de passe"
                />
                <StyleSubmit type="button" onClick={handleLogin}>
                    Se connecter
                </StyleSubmit>
            </StyleForm>
        </div>
    );
}

export default Profile;