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

export const fetchUsers = async ({ pageParam = "0" }) => {
  const res = await fetch(
    `https://api.github.com/users?per_page=20&since=${pageParam}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    }
  );
  if (!res.ok) throw new Error("Error fetching users");
  const data = await res.json();
  const linkHeader = res.headers.get("Link") ?? "";
  const nextUrl = parseNext(linkHeader);
  const nextSince = nextUrl ? extractSince(nextUrl) : null;
  return { users: data, nextSince };
};
