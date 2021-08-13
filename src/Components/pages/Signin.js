import React, { useState ,useContext} from "react";
import {FirebaseContext} from "../../context/firebase"
import FooterContainer from "../containers/footer";
import Form from "../form/form";
import { useHistory } from "react-router";


import HeaderContainer from "../containers/HeaderContainer";
export default function Signin() {
  const [email, setEmail] = useState('');
  const history=useHistory();
  const [pass, setPass] = useState('');
  const {firebase} = useContext(FirebaseContext);
  const [error, setError] = useState('');
const isInvalid= pass === '' || email==='';

  function handleSignIn(event) {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,pass)
    .then(()=>{
        history.push("/browse")
    })
    .catch((error)=>{
        setEmail('');
        setPass('');
        setError(error.message);
    })
  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>SignIn</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              value={pass}
              onChange={({ target }) => setPass(target.value)}
            />

            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
              New to Netflix Najafgarh?
              <Form.Link to="/signup"> Sign up now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
              This page is protected by God himself to ensure you're not 
              a bot. 
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
