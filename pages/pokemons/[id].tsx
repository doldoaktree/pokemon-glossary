import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PokemonDetails } from "../../components/pokemon-details";

export default function PokemonDetailsPage() {
  const [details, setDetails] = useState<undefined | PokemonDetails>();
  const router = useRouter();

  useEffect(() => {
    if (router.query.id == null) return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.id}`)
      .then((response) => response.json())
      .then((body) => setDetails(body));
  }, [router.query.id]);

  return <div>{details?.name}</div>;
}
