import React from "react";
import JumbotronContainer from "../containers/jumbotron";
import Faqs from "../containers/faqs";
import { Feature } from "../header/styles/styles";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/HeaderContainer";
import { OptForm } from "../opt-form/OptForm";

export default function Home() {
  return (
    <>
      <HeaderContainer>
      <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer></JumbotronContainer>
      <Faqs></Faqs>
      <FooterContainer></FooterContainer>
    </>
  );
}
