import React, { useState } from "react";
import axios from "axios";

import {
    StyleForm,
    StyleButton,
    StyleLabel,
    StyleSubmit,
    StyleText
} from "./Profile.style";

function Profile() {
    const [user, setuser] = useState("");
    const [password, setpassword] = useState("");

    const handleLogin = async () => {
        try {
            if (!user || !password) {
                alert("Veuillez remplir tous les champs.");
                return;
            }
            await axios({
                method: "post",
                url: "http://localhost:3000/revendeur/user",
                data: { user, password },
                withCredentials: true,

            });
            window.location.href = "http://localhost:3000/";
        } catch (err) {


        };
    };


    return (
        <div>
            <StyleForm>
                <StyleLabel>Nom d'utilisateur ou Mail :</StyleLabel>
                <StyleButton
                    type="text"
                    value={user}
                    onChange={(e) => setuser(e.target.value)}
                    placeholder="Votre Nom ou Mail"
                />
                <StyleLabel>Mot de passe :</StyleLabel>
                <StyleButton
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    placeholder="Mon Mot De Passe"
                />

                <StyleSubmit type="button" onClick={handleLogin}>
                    Se connecter
                </StyleSubmit>

                <StyleText href="http://localhost:3000/NewProfile">
                    <p> Crée Mon Profile  </p>
                </StyleText>
            </StyleForm>
        </div>
    );
}

export default Profile;
