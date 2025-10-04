import { notFound } from "next/navigation";

export default function Review({params}) {
    const { id, reviewId } = params;

    if (reviewId > 4) {
        notFound();
    }

    return (
        <div>
            <h1>
                product {id} and Review ID: {reviewId}
            </h1>
        </div>
    );
}