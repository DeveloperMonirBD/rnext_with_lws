import { getDictionary } from "./dictionaries/dictionaries"

export default async function HomePage({ params: { lang } }) {
  const dict = await getDictionary(lang);
  
  return (
    <h1>{dict.hello}</h1>
  )
}
