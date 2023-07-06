import { 
    Airplane, 
    Alarm,
    AmericanFootball,
    Bag,
    Book,
    Beer,
    Cafe,
    Camera,
    Cart,
    Clipboard,
    Cloud,
    Flask,
    Heart,
    Map,
    Paw,
    School
} from 'react-ionicons';

const iconGrey = "gainsboro";
const iconPrimary = "#05B3D7";
const iconDark = "#333B3F";

let iconSize = "17px";
// if(window.innerWidth < 400) {
//     iconSize = "20px"
// }



export const darkIcons = {
    camera: <Camera height={iconSize} />,
    airplane: <Airplane height={iconSize} />,
    school: <School height={iconSize} />,
    alarm: <Alarm height={iconSize} />,
    americanfootball: <AmericanFootball height={iconSize} />,
    bag: <Bag height={iconSize} />,
    book: <Book height={iconSize} />,
    beer: <Beer height={iconSize} />,
    cafe: <Cafe height={iconSize} />,
    cart: <Cart height={iconSize} />,
    clipboard: <Clipboard height={iconSize} />,
    cloud: <Cloud height={iconSize}/>,
    flask: <Flask height={iconSize} />,
    heart: <Heart height={iconSize} />,
    map: <Map height={iconSize}/>,
    paw: <Paw height={iconSize}/>
}

export const icons = [
    { name: 'airplane', darkIcon: <Airplane color={iconDark} />,greyIcon: <Airplane color={iconGrey} />, primaryIcon: <Airplane color={iconPrimary} /> },
    { name: 'alarm', darkIcon: <Alarm color={iconDark} />,greyIcon: <Alarm color={iconGrey} />, primaryIcon: <Alarm color={iconPrimary} /> },
    { name: 'americanfootball', darkIcon: <AmericanFootball color={iconDark} />,greyIcon: <AmericanFootball color={iconGrey} />, primaryIcon: <AmericanFootball color={iconPrimary} /> },
    { name: 'bag', darkIcon: <Bag color={iconDark} />,greyIcon: <Bag color={iconGrey} />, primaryIcon: <Bag color={iconPrimary} /> },
    { name: 'book', darkIcon: <Book color={iconDark} />,greyIcon: <Book color={iconGrey} />, primaryIcon: <Book color={iconPrimary} /> },
    { name: 'beer', darkIcon: <Beer color={iconDark} />,greyIcon: <Beer color={iconGrey} />, primaryIcon: <Beer color={iconPrimary} /> },
    { name: 'cafe', darkIcon: <Cafe color={iconDark} />,greyIcon: <Cafe color={iconGrey} />, primaryIcon: <Cafe color={iconPrimary} /> },
    { name: 'camera', darkIcon: <Camera color={iconDark} />,greyIcon: <Camera color={iconGrey} />, primaryIcon: <Camera color={iconPrimary} />  },
    { name: 'cart', darkIcon: <Cart color={iconDark} />,greyIcon: <Cart color={iconGrey} />, primaryIcon: <Cart color={iconPrimary} /> },
    { name: 'clipboard', darkIcon: <Clipboard color={iconDark} />,greyIcon: <Clipboard color={iconGrey} />, primaryIcon: <Clipboard color={iconPrimary} /> },
    { name: 'cloud', darkIcon: <Cloud color={iconDark} />,greyIcon: <Cloud color={iconGrey} />, primaryIcon: <Cloud color={iconPrimary} /> },
    { name: 'flask', darkIcon: <Flask color={iconDark} />,greyIcon: <Flask color={iconGrey} />, primaryIcon: <Flask color={iconPrimary} /> },
    { name: 'heart', darkIcon: <Heart color={iconDark} />,greyIcon: <Heart color={iconGrey} />, primaryIcon: <Heart color={iconPrimary} /> },
    { name: 'map', darkIcon: <Map color={iconDark} />,greyIcon: <Map color={iconGrey} />, primaryIcon: <Map color={iconPrimary} /> },
    { name: 'paw', darkIcon: <Paw color={iconDark} />,greyIcon: <Paw color={iconGrey} />, primaryIcon: <Paw color={iconPrimary} /> },
    { name: 'school', darkIcon: <School color={iconDark} />,greyIcon: <School color={iconGrey} />, primaryIcon: <School color={iconPrimary} /> },
]

