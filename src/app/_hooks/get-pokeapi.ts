import { useQuery } from '@tanstack/react-query';

const fetchPokemon = async (page: number) => {
  const limit = 20;
  const offset = (page - 1) * limit;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  return res.json();
};

export const usePokemonQuery = (page: number) => {
  return useQuery({
    queryKey: ['pokemon', page], // 페이지 번호별로 캐싱
    queryFn: () => fetchPokemon(page),
  });
};
