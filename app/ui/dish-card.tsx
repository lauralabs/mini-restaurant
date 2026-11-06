import Image from "next/image"
import { Dish } from "@/app/lib/definitions"
import { urlFor } from "@/sanity/lib/image"

type DishCardProps ={

    dish:Dish
}

export default function DishCard ({dish} : DishCardProps) {
    return (
        <article className="dish-card">
            {dish.image && (
        <Image
          src={urlFor(dish.image).width(600).height(400).url()}
          alt={dish.name}
          width={600}
          height={400}
        />
      )}
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <p>Price: ${dish.price.toFixed(2)}</p>
        </article>



    )

}