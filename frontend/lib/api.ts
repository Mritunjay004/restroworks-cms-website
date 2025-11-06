const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

export async function getPage(slug: string, locale = "en") {
  try {
    const response = await fetch(
      `${API_URL}/pages?where[slug][equals]=${slug}&locale=${locale}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) throw new Error("Failed to fetch page");

    const data = await response.json();
    return data.docs[0] || null;
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
}

export async function submitContactForm(data: any) {
  const response = await fetch(`${API_URL}/contact-submissions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Failed to submit form");

  return response.json();
}
