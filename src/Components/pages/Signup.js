import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../context/firebase";
import FooterContainer from "../containers/footer";
import Form from "../form/form";
import { useHistory } from "react-router";
import HeaderContainer from "../containers/HeaderContainer";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState();

  const isInvalid = name === "" || pass === "" || pass === "";

  const handleSignUp = (e) => {
    e.preventDefault();

    firebase.
    auth().
    createUserWithEmailAndPassword(email,pass)
    .then((result)=>{
      result.user.updateProfile({
        displayName: name,
        photoURL : Math.floor(Math.random()*5) + 1,
      }).then(()=>{
        history.push("/browse");
      })
      .catch((error)=>{
        setName('');
        setPass('');
        setError(error.message);
      })
    });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.error>{error}</Form.error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First Name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            ></Form.Input>
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
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by God himself to ensure you're not a bot.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
