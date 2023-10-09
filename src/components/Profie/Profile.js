import { StyleForm, StyleH2, StyleButton, StyleLabel, StyleSubmit } from './Profile.style';


function Profile() {
    return (
        <div>
            <StyleH2>
                Mon Profile
            </StyleH2>
            <StyleForm>
                <StyleLabel> Nom : </StyleLabel>
                <StyleButton type='text' placeholder='Nom' />

                <StyleLabel> Mail : </StyleLabel>
                <StyleButton type='mail' placeholder='Mail' />

                <StyleLabel> Mot De Passe : </StyleLabel>
                <StyleButton type='password' placeholder='Mot De Passe ' />

                <StyleSubmit type='submit' value={"Continuer"} />
            </StyleForm>
        </div>
    )
}

export default Profile; 