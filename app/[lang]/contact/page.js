import { getDictionary } from "../dictionaries/dictionaries";


    export default async function Contact({ params: { lang } }) {
    const dict = await getDictionary(lang);

        return (
            <div className="p-20">
                <h1 className="text-3xl font-bold underline">{dict.contact}</h1>
            </div>
        );
}