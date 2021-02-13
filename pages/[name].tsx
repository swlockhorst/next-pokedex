import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import React from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";

export async function getStaticPaths() {
  const Pokedex = require("pokedex-promise-v2");
  const P = new Pokedex();

  const pokemonsList = await P.getGenerationByName("generation-i")
    .then(function (response) {
      return response.pokemon_species;
    })
    .catch(function (error) {
      console.log("There was an ERROR: ", error);
      return error;
    });

  return {
    paths: pokemonsList.map((pokemon) => {
      return {
        params: {
          name: `${pokemon.name}`,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const Pokedex = require("pokedex-promise-v2");
  const P = new Pokedex();

  // fetch single pokemon detail
  const pokemon = await P.getPokemonByName(params.name)
    .then(function (response) {
      console.log("response >>", response);
      return response;
    })
    .catch(function (error) {
      console.log("There was an ERROR: ", error);
      return error;
    });

  return {
    props: {
      pokemon: pokemon,
    },
  };
}

function Detail({ pokemon }) {
  return (
    <div className="container">
      <>
        <Head>
          <title>{pokemon.name}</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
          />
        </Head>

        <main>
          <Container className="p-4">
            <Row>
              <Col lg="5" className="mb-3">
                <Card className="p-2">
                  <Card.Img
                    variant="top"
                    src={pokemon.sprites.other.dream_world.front_default}
                  />
                  <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>

                    <Card.Text>
                      Species: {pokemon.species.name}
                      <br />
                      Base XP: {pokemon.base_experience}
                      <br />
                      Height: {pokemon.height}
                      <br />
                      Weight: {pokemon.weight}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Hidden</th>
                      <th>Slot</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pokemon.abilities.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.ability.name}</td>
                          <td>{item.is_hidden ? "Yes" : "No"}</td>
                          <td>{item.slot}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>

                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Base State</th>
                      <th>Effort</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pokemon.stats.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.stat.name}</td>
                          <td>{item.base_stat}</td>
                          <td>{item.effort}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>

                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Slot</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pokemon.types.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.slot}</td>
                          <td>{item.type.name}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </main>
      </>
    </div>
  );
}

export default Detail;
