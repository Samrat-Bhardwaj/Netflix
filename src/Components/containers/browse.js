import React, { useContext, useState, useEffect } from "react";
import Fuse from "fuse.js"
import { SelectProfileContainer } from "./proflie";
import { FirebaseContext } from "../../context/firebase";
import Header from "../header/Header";
import FooterContainer from "../containers/footer";
import logo from "./logo.svg";
import Card from "../Card/Card";
import Player from "../player/player";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [slidesRows, setSlidesRows] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("series");
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setSlidesRows(slides[category]);
  }, [slides, category]);


    useEffect(()=>{
      const fuse=new Fuse(slidesRows,{keys:['data.description','data.title','data.genre']});
    const results = fuse.search(searchTerm).map(({item})=>item);

      if (slidesRows.length > 0 && searchTerm.length>3 && results.length>0){
        setSlidesRows(results);
      } else {
        setSlidesRows(slides[category]);
      }
    },[searchTerm])
  return profile.displayName ? (
    <>
      <Header src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={"/"} src={logo} alt="Netflix" />
            <Header.TextLink
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>

                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slidesRows.map((slideItem) => {
          return (
            <Card>
              <Card.Title>{slideItem.title}</Card.Title>

              <Card.Entities>
                {slideItem.data.map((item) => {
                  return (
                    <Card.Item key={item.docId} item={item}>
                      <Card.Image
                        src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                      ></Card.Image>
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  );
                })}
              </Card.Entities>

              <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4"></Player.Video>
              </Player>
              </Card.Feature>
            </Card>
          );
        })}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer
      user={user}
      setProfile={setProfile}
    ></SelectProfileContainer>
  );
}
