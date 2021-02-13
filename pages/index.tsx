import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { Container, ListGroup, Pagination } from "react-bootstrap";

export default function Home({ paginated }) {
  const [active, setActive] = useState(1);

  return (
    <div className="container">
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container className="p-5">
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
        </Container>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const Pokedex = require("pokedex-promise-v2");
  const P = new Pokedex();
  const list = await P.getPokemonsList();

  const chunk = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const paginated = chunk(list.results, 250);
  return { props: { paginated } };
}
