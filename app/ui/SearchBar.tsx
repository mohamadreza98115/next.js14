'use client'
import {useDebouncedCallback} from 'use-debounce'
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid'

const SearchBar = () => {
    const pathname = usePathname();
    const {replace} = useRouter();
    const searchParams = useSearchParams();
    const handleChange = useDebouncedCallback((e: { target: { value: string } }) => {
        const params = new URLSearchParams(searchParams);
        if (e.target.value) {
            e.target.value.length > 2 && params.set("query", e.target.value);
        } else {
            params.delete("query")
        }
        replace(`${pathname}?${params}`);
    }, 200)

    return (
        <div className={"form-field relative p-2"}>
            <input onChange={handleChange} type={'search'} name={"search"} id={'search'}
                   className={"input border rounded-md pl-8 md:min-w-[26rem]"} placeholder={"Search..."}/>
            <span className={"absolute inset-y-0 left-4 inline-flex items-center"}>
                 <MagnifyingGlassIcon className={"w-5 h-5 text-gray-400"}/>
            </span>
        </div>
    );
};

export default SearchBar;