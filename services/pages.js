import { createClient, predicate } from '../prismicio';

export async function getListByType(type) {
  const client = createClient();
  const name = type.toLowerCase();

  try {
    const results = await client.getAllByType(
      name,
      { lang: 'pt-br' },
    );

    return results;
  } catch {
    return {};
  }
}
