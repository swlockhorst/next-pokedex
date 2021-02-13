import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, ListGroup, Pagination } from "react-bootstrap";

export default function Home() {
  const [active, setActive] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const Pokedex = require("pokedex-promise-v2");
  const P = new Pokedex();
  const chunk = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  useEffect(() => {
    (async function () {
      const pokemon = await P.getPokemonsList();
      const paginated = chunk(pokemon.results, 250);
      setData(paginated);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container className="p-5">
          {loading && <div>Loading</div>}
          {!loading && data && (
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
                {data.map((item, index) => {
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
                  disabled={active === data.length}
                  onClick={() => {
                    setActive(active + 1);
                  }}
                />
                <Pagination.Last
                  disabled={active === data.length}
                  onClick={() => {
                    setActive(data.length);
                  }}
                />
              </Pagination>

              <ListGroup>
                {data[active - 1].map((item, index) => {
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
          )}
        </Container>
      </main>
    </div>
  );
}
