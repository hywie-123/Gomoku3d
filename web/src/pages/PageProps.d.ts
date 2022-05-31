export type PageName = 'home' | 'game' | 'gameResult';

export interface PageProps {
    pageName: PageName  , setPageName: (page    : PageName  ) => void,
    userName: string    , setUserName: (userName: string    ) => void,
    gameId  : string    , setGameId  : (gameId  : string    ) => void,
}
