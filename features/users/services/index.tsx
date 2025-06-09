import { Repo, User } from "@/types";

function parseNext(linkHeader: string): string | null {
  if (!linkHeader) return null;
  const links = linkHeader.split(",");

  for (const link of links) {
    const [urlPart, relPart] = link.split(";");
    const urlMatch = urlPart.match(/<([^>]+)>/);
    const relMatch = relPart?.match(/rel="([^"]+)"/);

    if (relMatch?.[1] === "next") {
      return urlMatch?.[1] ?? null;
    }
  }

  return null;
}

function extractSince(url: string): string | null {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.searchParams.get("since");
  } catch {
    return null;
  }
}

export const fetchUser = async (id: number) => {
  const res = await fetch(`https://api.github.com/user/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  });
  if (!res.ok) throw new Error(`Failed to fetch user ${id}`);
  return res.json();
};

export const fetchUserDetail = async (
  id: number
): Promise<{ user: User; repos: Repo[] }> => {
  const user = await fetchUser(id);
  const repos = await fetch(`https://api.github.com/user/${id}/repos`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  });
  if (!repos.ok) throw new Error(`Failed to fetch repos ${id}`);
  return { user, repos: await repos.json() };
};

export const fetchUsers = async ({
  perPageParam = "20",
  pageParam = "1",
  queryParam = "",
}) => {
  let url: string;
  const isSearch = !!queryParam;
  const page = isSearch
    ? Number(pageParam) < 1
      ? 1
      : Number(pageParam)
    : pageParam;

  if (isSearch) {
    url = `https://api.github.com/search/users?q=${encodeURIComponent(
      queryParam + " in:login"
    )}&page=${page}&per_page=${perPageParam}`;
  } else {
    url = `https://api.github.com/users?since=${pageParam}&per_page=${perPageParam}`;
  }

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  });

  if (!res.ok) throw new Error("Error fetching users");

  if (isSearch) {
    const data = await res.json();
    const hasMore = data.items && data.items.length === Number(perPageParam);
    return {
      users: data.items,
      nextSince: hasMore ? String(Number(page) + 1) : null, // increment page for next
    };
  } else {
    const data = await res.json();
    const linkHeader = res.headers.get("Link") ?? "";
    const nextUrl = parseNext(linkHeader);
    const nextSince = nextUrl ? extractSince(nextUrl) : null;
    return { users: data, nextSince };
  }
};
