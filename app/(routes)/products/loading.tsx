import React from 'react';
import Skeleton from "@/app/ui/Skeleton";

const Loading = () => {
    const products = [1, 2, 3, 4, 5,6]
    return (
        <div>
            <Skeleton className={"md:max-w-md p-4 m-2 dark:bg-gray-300"}/>
            <div className={"grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"}>
                {products.map(product => <div className={"w-full h-64 rounded-lg"} key={product}>
                    <Skeleton className={"h-52"}  />
                    <Skeleton height={32}  />
                    <Skeleton  />
                    <Skeleton  width={240} />
                    <Skeleton className={"my-4"} width={84} height={40}  />
                </div>)}
            </div>
        </div>
    );
};

export default Loading;