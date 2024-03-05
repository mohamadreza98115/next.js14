import prisma from "@/prisma/client";
import ProductCard from "@/app/(routes)/products/ProductCard";
import SearchBar from "@/app/ui/SearchBar";
import delay from "delay";
import Pagination from "@/app/ui/Pagination";

type Props = {
    searchParams: { query: string; page: string }
}

const ProductPage = async ({searchParams}: Props) => {
    const query = searchParams.query;
    const page = parseInt(searchParams.page) || 1;
    const pageSize: number = 6;

    const where = {
        ...((query) && {name: {contains: query}})
    };

    const productsCount = await prisma.product.count({where});
    const products = await prisma.product.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize
    });

    return (
        <div>
            <SearchBar/>
            <div className={"grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"}>

                {products.map(product => <ProductCard key={product.id} product={product}/>)}

            </div>
            <Pagination pageSize={pageSize} currentPage={page} itemCount={productsCount}/>
        </div>
    );
};

export default ProductPage;