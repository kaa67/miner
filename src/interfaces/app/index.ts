export type TGameMode = 'standBy' | 'config' | 'game' | 'success' | 'fail'

export interface IDimension {
    width: number
    height: number
}

export interface IAppData {
    gameMode: TGameMode
    dimension: IDimension
    timer: number
}
