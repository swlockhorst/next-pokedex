import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "next/app";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { Pokedex } from "pokeapi-js-wrapper";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";

function Detail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const P = new Pokedex();

  useEffect(() => {
    (async function () {
      const pokemon = await P.getPokemonByName(router.query.name);
      setData(pokemon);
      setLoading(false);
    })();
  }, [router]);

  return (
    <div className="container">
      {loading && <div>Loading</div>}
      {!loading && data && (
        <>
          <Head>
            <title>{data.name}</title>
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
                      src={data.sprites.other.dream_world.front_default}
                    />
                    <Card.Body>
                      <Card.Title>{data.name}</Card.Title>

                      <Card.Text>
                        Species: {data.species.name}
                        <br />
                        Base XP: {data.base_experience}
                        <br />
                        Height: {data.height}
                        <br />
                        Weight: {data.weight}
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
                      {data.abilities.map((item, index) => {
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
                      {data.stats.map((item, index) => {
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
                      {data.types.map((item, index) => {
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
      )}
    </div>
  );
}

export default Detail;
