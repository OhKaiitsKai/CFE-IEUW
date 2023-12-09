import React from "react";
import * as Components from '../components/Components';
import AppWrapper from "../components/AppWrapper";

const SignUpLogIn = () => {
  const [signIn, toggle] = React.useState(true);
  return(
    <AppWrapper>
     <Components.thebody>
      <Components.Container>
          <Components.SignUpContainer signinIn={signIn}>
              <Components.Form>
                  <Components.Title>Crear Cuenta</Components.Title>
                  <Components.Input type='text' placeholder='Nombre' />
                  <Components.Input type='email' placeholder='Correo electrónico' />
                  <Components.Input type='password' placeholder='Contraseña' />
                  <Components.Button>Crear</Components.Button>
              </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
               <Components.Form>
                   <Components.Title>Inicio de sesión</Components.Title>
                   <Components.Input type='email' placeholder='Correo electrónico' />
                   <Components.Input type='password' placeholder='Contraseña' />
                   <Components.Anchor href='#'>¿Olvidaste tu contraseña?</Components.Anchor>
                   <Components.Button>Iniciar sesión</Components.Button>
               </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signinIn={signIn}>
              <Components.Overlay signinIn={signIn}>

              <Components.LeftOverlayPanel signinIn={signIn}>
                  <Components.Title>¡Bienvenido a CFE!</Components.Title>
                  <Components.Paragraph>
                      Si ya tienes una cuenta inicia sesión para ver tus últimos movimientos.
                  </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(true)}>
                      Iniciar sesión
                  </Components.GhostButton>
                  </Components.LeftOverlayPanel>

                  <Components.RightOverlayPanel signinIn={signIn}>
                    <Components.Title>CFE</Components.Title>
                    <Components.Paragraph>
                        ¡Regístrate para consultar y pagar tus recibos!
                    </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Crear cuenta
                        </Components.GhostButton> 
                  </Components.RightOverlayPanel>

              </Components.Overlay>
          </Components.OverlayContainer>

      </Components.Container>
      </Components.thebody>
      </AppWrapper>
  )
};

export default SignUpLogIn;