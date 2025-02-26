'use client';

import { usePokemonQuery } from '@/app/_hooks/get-pokeapi';
import Image from 'next/image';
import { useState } from 'react';

export const ApiComponent = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = usePokemonQuery(page);

  return (
    <section className="p-4">
      {/* 포켓몬 리스트 */}
      <div className="grid grid-cols-4 gap-4">
        {data?.results.map((pokemon) => (
          <div key={pokemon.name} className="border p-4 flex flex-col items-center">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon.url.split('/')[6]
              }.png`}
              alt={pokemon.name}
              width={600}
              height={400}
            />
            <p className="capitalize">{pokemon.name}</p>
          </div>
        ))}
      </div>

      {/* 페이지네이션 버튼 */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1 || isFetching}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          이전
        </button>
        <span className="px-4 py-2">Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={isFetching || !data?.next} // 다음 페이지 없으면 비활성화
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          다음
        </button>
      </div>
    </section>
  );
};
