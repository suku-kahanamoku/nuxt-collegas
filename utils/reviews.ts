export type ReviewSource = "google" | "seznam" | "facebook" | "other";

export const reviewSourceLabels: Record<ReviewSource, string> = {
  google: "Google",
  seznam: "Seznam.cz",
  facebook: "Facebook",
  other: "Klientská",
};

export function getReviewSource(source?: string, author?: string): ReviewSource {
  const normalizedSource = source?.toLowerCase();
  if (
    normalizedSource === "google" ||
    normalizedSource === "seznam" ||
    normalizedSource === "facebook"
  ) {
    return normalizedSource;
  }

  const normalizedAuthor = author?.toLowerCase() || "";
  if (normalizedAuthor.includes("seznam")) return "seznam";
  if (normalizedAuthor.includes("facebook")) return "facebook";
  if (normalizedAuthor.includes("google")) return "google";
  return "other";
}

export function getReviewerName(author: string) {
  return author.replace(/\s*\([^)]*recenze\)\s*$/i, "");
}
