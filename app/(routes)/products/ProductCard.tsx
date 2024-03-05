import React from 'react';
import {Product} from "@prisma/client";
import Image from "next/image";

const ProductCard = ({product}: { product: Product }) => {
    return (
        <div className="card card-image-cover">
            <Image width={300} layout={"responsive"} className={"w-full"} height={400} src={product.thumbnail}
                   alt="product-img"/>
            <div className="card-body">
                <h2 className="card-header">{product.name}</h2>
                <p className="text-content2">{product.description}</p>
                <div className="card-footer">
                    <button className="btn-secondary btn">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;