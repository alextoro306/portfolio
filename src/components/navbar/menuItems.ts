interface IMenuItem {
    title: string,
    linkTo: string,
    index: number,
}
export const MenuItems: IMenuItem[] = [
    {
        index: 0,
        linkTo: 'https://google.com',
        title: 'Home',
    },

    {
        index: 1,
        linkTo: 'https://yandex.com',
        title: 'Projects',
    },
    
    {
        index: 2,
        linkTo: 'https://duckduckgo.com',
        title: 'CV',
    },
]
