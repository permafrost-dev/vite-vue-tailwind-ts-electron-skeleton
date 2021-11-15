export interface State {
    debug: boolean;
    isInitialized: boolean;
    count: number;
}

export const state: State = {
    debug: import.meta.env.MODE === 'development',
    isInitialized: false,
    count: 0,
};
