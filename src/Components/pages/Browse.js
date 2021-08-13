import React from "react";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/HeaderContainer";
import { useContent } from "../../customs/use-content";
import { BrowseContainer } from "../containers/browse";
export default function Browse() {
  const {series} = useContent('series');
  const {films} = useContent('films');

  const slides = selectionFilter({series,films})
  // console.log(slides);
  return (
    <>
      <BrowseContainer slides={slides}/>

    </>
  );
}

function selectionFilter({ series, films }) {
  return {
    series: [
      { title: 'Documentaries', data: series?.filter((item) => item.genre === 'documentaries') },
      { title: 'Comedies', data: series?.filter((item) => item.genre === 'comedies') },
      { title: 'Children', data: series?.filter((item) => item.genre === 'children') },
      { title: 'Crime', data: series?.filter((item) => item.genre === 'crime') },
      { title: 'Feel Good', data: series?.filter((item) => item.genre === 'feel-good') },
    ],
    films: [
      { title: 'Drama', data: films?.filter((item) => item.genre === 'drama') },
      { title: 'Thriller', data: films?.filter((item) => item.genre === 'thriller') },
      { title: 'Children', data: films?.filter((item) => item.genre === 'children') },
      { title: 'Suspense', data: films?.filter((item) => item.genre === 'suspense') },
      { title: 'Romance', data: films?.filter((item) => item.genre === 'romance') },
    ],
  };
}
