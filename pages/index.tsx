import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { Container, ListGroup, Pagination } from "react-bootstrap";

export async function getStaticProps() {
  const Pokedex = require("pokedex-promise-v2");
  const P = new Pokedex();

  const pokemonsList = await P.getGenerationByName("generation-i")
    .then(function (response) {
      // console.log(response.pokemon_species);
      return response.pokemon_species;
    })
    .catch(function (error) {
      console.log("There was an ERROR: ", error);
      return error;
    });

  const chunk = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const paginated = chunk(pokemonsList, 51);

  return {
    props: {
      paginated,
    },
  };
}

export default function Home({ paginated }) {
  const [active, setActive] = useState(1);

  return (
    <div className="container">
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
      </Head>
      {paginated && (
        <main>
          <Container className="p-5">
            <>
              <Pagination>
                <Pagination.First
                  disabled={active === 1}
                  onClick={() => {
                    setActive(1);
                  }}
                />
                <Pagination.Prev
                  disabled={active === 1}
                  onClick={() => {
                    setActive(active - 1);
                  }}
                />
                {paginated.map((item, index) => {
                  return (
                    <Pagination.Item
                      key={index}
                      active={index + 1 === active}
                      onClick={() => {
                        setActive(index + 1);
                      }}
                    >
                      {index + 1}
                    </Pagination.Item>
                  );
                })}
                <Pagination.Next
                  disabled={active === paginated.length}
                  onClick={() => {
                    setActive(active + 1);
                  }}
                />
                <Pagination.Last
                  disabled={active === paginated.length}
                  onClick={() => {
                    setActive(paginated.length);
                  }}
                />
              </Pagination>

              <ListGroup>
                {paginated[active - 1].map((item, index) => {
                  return (
                    <Link href={`/${item.name}`} key={index}>
                      <a>
                        <ListGroup.Item key={index}>{item.name}</ListGroup.Item>
                      </a>
                    </Link>
                  );
                })}
              </ListGroup>
            </>
          </Container>
        </main>
      )}
    </div>
  );
}
