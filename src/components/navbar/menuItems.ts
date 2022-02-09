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

    // {
    //     index: 3,
    //     linkTo: '/https://github.com/alextoro306',
    //     title: 'GitHub',
    // },

    // {
    //     index: 4,
    //     linkTo: '/',
    //     title: 'Games',
    // },
]
