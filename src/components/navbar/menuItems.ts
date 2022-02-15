interface IMenuItem {
    title: string,
    linkTo: string,
    index: number,
}
export const MenuItems: IMenuItem[] = [
    {
        index: 0,
        linkTo: '/',
        title: 'Home',
    },

    {
        index: 1,
        linkTo: '/projects',
        title: 'Projects',
    },
    
    {
        index: 2,
        linkTo: '/Cv',
        title: 'CV',
    },
]
