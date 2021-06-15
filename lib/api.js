async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAboutPage() {
  const data = fetchAPI(`
    query AboutPage {
      about {
        id,
        description
      }
    }
  `);
  return data;
}

export async function getContactPage() {
  const data = fetchAPI(`
    query ContactPage {
      contact {
        id,
        description
      }
    }
  `);
  return data;
}

export async function getMenuItems() {
  const data = fetchAPI(
    `
    query Dishes {
      dishes {
        id,
        slug,
        name,
        image {
          url,
        },
        short_description,
        price
      }
    }
  `
  );

  return data;
}

export async function getSingleMenuItem(slug) {
  const data = fetchAPI(
    `
    query Dishes {
      dishes (where: {slug: "${slug}"}) {
        id,
        slug,
        name,
        image {
          url,
        },
        short_description,
        price
      }
    }
  `,
    {
      where: {
        slug,
      },
    }
  );

  return data;
}

export const getBaseURL = () => process.env.NEXT_PUBLIC_ASSETS_URL;
