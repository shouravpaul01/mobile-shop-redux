
export const generateTotalPaginatePages = (totalPages:number) => {
    const pages = []
    for (let index = 1; index <= totalPages; index++) {
        pages.push(index)

    }
    return pages
}


