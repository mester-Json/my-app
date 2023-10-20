import React, { useState } from "react";
import {
    StyleForm,
    StyleH2,
    StyleButton,
    StyleLabel,
    StyleSubmit,
    StyleText
} from "./Profile.style";

function Profile() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Tentative de connexion avec le nom d'utilisateur : ", username);
    };

    return (
        <div>
            <StyleH2>Connexion</StyleH2>
            <StyleForm>
                <StyleLabel>Nom d'utilisateur:</StyleLabel>
                <StyleButton
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Votre Nom "
                />
                <StyleLabel>Mot de passe:</StyleLabel>
                <StyleButton
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mon Mot De Passe"
                />
                <StyleSubmit type="button" onClick={handleLogin}>
                    Se connecter
                </StyleSubmit>
                <StyleText href="http://localhost:3000/" > <p> Crée Mon Profile  </p></StyleText>
            </StyleForm>
        </div>
    );
}

export default Profile;