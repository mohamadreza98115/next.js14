import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import delay from "delay";

const Loading = async () => {
    await delay(1500);
    return (
        <div>
            <Skeleton className={"max-w-md"}/>
            <Skeleton count={3}/>
        </div>
    );
};

export default Loading;