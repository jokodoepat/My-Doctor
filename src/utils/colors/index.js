const mainColors = {
    yellow1: '#f1c40f',
    yellow2: '#ECE4C7',
    dark1: '#112340',
    dark2: '#495A75',
    grey1: '#7D8797',
    whiteDark: '#F0F0F0'
};

export const colors = {
    primary: mainColors.yellow1,
    secondary: mainColors.dark1,
    white: 'white',
    black: 'black',
    grey: mainColors.grey1,
    text: {
        primary: mainColors.dark1,
        secondary: mainColors.grey1,
        menuInActive: mainColors.dark2,
        menuActive: mainColors.yellow1
    },
    button: {
        primary: {
            background: mainColors.yellow1,
            text: 'white'
        },
        secondary: {
            backgroud: 'white',
            text: 'black'
        }
    },
    border: mainColors.whiteDark,
    cardLight: mainColors.yellow2,
}