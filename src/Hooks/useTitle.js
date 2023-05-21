import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Bingo Toy | ${title}`;
    }, [title]);
}

export default useTitle;