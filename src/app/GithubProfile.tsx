"use client";

import Image from "next/image";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";

async function getProfile(username: string) {
  await new Promise((resolve) => setTimeout(resolve, 1e3));
  const res = await fetch(`https://api.github.com/users/${username}`);
  return await res.json();
}

export default function Github() {
  useSearchParams();
  const { data } = useSWR("dbk91", getProfile, {
    suspense: true,
  });

  return (
    <div className="text-center">
      <h2 className="text-xl">{data.name}</h2>
      <p className="text-gray-800">{data.bio}</p>
    </div>
  );
}
