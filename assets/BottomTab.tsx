// system imports
import React, { Component, useEffect, useRef } from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Animated, Platform, Text, TouchableOpacity, View } from 'react-native';

// style import
import styles, { vw, vh, vmax, vmin } from './stylesheet';

// screen import
import Home from '../screens/Home';
import CatePage from '../screens/CatePage';
import FormularPage from '../screens/FormularPage';
import User from '../screens/User';

import * as SVG from './svgXml';
import * as STORAGEFNC from '../data/storageFunc'
import { SvgXml } from 'react-native-svg';
import * as CLASS from './Class';
import * as CTEXT from './CustomText';
import clrStyle, { NGHIASTYLE } from './componentStyleSheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as CUSTOMCACHE from '../data/store';
import { UserFormat } from '../data/interfaceFormat';
import getColor from './getColor';

const VH_VW = vw(100) > vh(100) ? true : false
const BOTTOM_TAB_ICON_SIZE = VH_VW ? vh(6) : vw(6)
const BOTTOM_TAB_ICON_PADDING = VH_VW ? vh(2) : vw(2)
const BOTTOM_TAB_ICON_HEIGHT = VH_VW ? vh(14) : vw(14)
const BOTTOM_TAB_HEIGHT = VH_VW ? vh(16) : vw(16)
const COLORFOCUS = getColor('Main mode/100')
const COLORNOTFOCUS = NGHIASTYLE.NghiaWarning500
const LABELTEXTCLASS = CTEXT.Be14Med

// icon generator
const iconData: { page: any, icon: string, iconActive: string, title: string }[] = [
    {
        page: Home,
        icon: `<svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.7499 7.51252L15.5624 0.962523C13.9624 -0.312477 11.4624 -0.324977 9.87486 0.950023L1.68736 7.51252C0.512357 8.45002 -0.200144 10.325 0.0498559 11.8L1.62486 21.225C1.98736 23.3375 3.94986 25 6.08736 25H19.3374C21.4499 25 23.4499 23.3 23.8124 21.2125L25.3874 11.7875C25.6124 10.325 24.8999 8.45002 23.7499 7.51252Z" fill="#C1C7A4"/><path d="M12.7124 20.9375C12.1999 20.9375 11.7749 20.5125 11.7749 20V16.25C11.7749 15.7375 12.1999 15.3125 12.7124 15.3125C13.2249 15.3125 13.6499 15.7375 13.6499 16.25V20C13.6499 20.5125 13.2249 20.9375 12.7124 20.9375Z" fill="#64721C"/></svg>`,
        iconActive: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 23.4375C14.4875 23.4375 14.0625 23.0125 14.0625 22.5V18.75C14.0625 18.2375 14.4875 17.8125 15 17.8125C15.5125 17.8125 15.9375 18.2375 15.9375 18.75V22.5C15.9375 23.0125 15.5125 23.4375 15 23.4375Z" fill="#6D6E6F"/><path d="M22 28.2H8.00001C5.72501 28.2 3.65001 26.45 3.27501 24.2125L1.61251 14.25C1.33751 12.7 2.10001 10.7125 3.33751 9.72502L12 2.78752C13.675 1.43752 16.3125 1.45002 18 2.80002L26.6625 9.72502C27.8875 10.7125 28.6375 12.7 28.3875 14.25L26.725 24.2C26.35 26.4125 24.225 28.2 22 28.2ZM14.9875 3.66252C14.325 3.66252 13.6625 3.86252 13.175 4.25002L4.51251 11.2C3.81251 11.7625 3.31251 13.0625 3.46251 13.95L5.12501 23.9C5.35001 25.2125 6.66251 26.325 8.00001 26.325H22C23.3375 26.325 24.65 25.2125 24.875 23.8875L26.5375 13.9375C26.675 13.0625 26.175 11.7375 25.4875 11.1875L16.825 4.26252C16.325 3.86252 15.65 3.66252 14.9875 3.66252Z" fill="#6D6E6F"/></svg>`,
        title: 'Trang chủ'
    },
    {
        page: CatePage,
        icon: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.8375 0H18.4625C15.7375 0 14.3 1.4375 14.3 4.1625V6.5375C14.3 9.2625 15.7375 10.7 18.4625 10.7H20.8375C23.5625 10.7 25 9.2625 25 6.5375V4.1625C25 1.4375 23.5625 0 20.8375 0Z" fill="#C4CF8C"/><path d="M6.55 14.2876H4.175C1.4375 14.2876 0 15.7251 0 18.4501V20.8251C0 23.5626 1.4375 25.0001 4.1625 25.0001H6.5375C9.2625 25.0001 10.7 23.5626 10.7 20.8376V18.4626C10.7125 15.7251 9.275 14.2876 6.55 14.2876Z" fill="#C4CF8C"/><path d="M5.3625 10.725C8.32413 10.725 10.725 8.32413 10.725 5.3625C10.725 2.40087 8.32413 0 5.3625 0C2.40087 0 0 2.40087 0 5.3625C0 8.32413 2.40087 10.725 5.3625 10.725Z" fill="#64721C"/><path d="M19.6375 24.9999C22.5992 24.9999 25 22.599 25 19.6374C25 16.6758 22.5992 14.2749 19.6375 14.2749C16.6759 14.2749 14.275 16.6758 14.275 19.6374C14.275 22.599 16.6759 24.9999 19.6375 24.9999Z" fill="#64721C"/></svg>`,
        iconActive: `<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.4167 13.4375H21.9167C18.8917 13.4375 17.2292 11.775 17.2292 8.75V6.25C17.2292 3.225 18.8917 1.5625 21.9167 1.5625H24.4167C27.4417 1.5625 29.1042 3.225 29.1042 6.25V8.75C29.1042 11.775 27.4417 13.4375 24.4167 13.4375ZM21.9167 3.4375C19.9417 3.4375 19.1042 4.275 19.1042 6.25V8.75C19.1042 10.725 19.9417 11.5625 21.9167 11.5625H24.4167C26.3917 11.5625 27.2292 10.725 27.2292 8.75V6.25C27.2292 4.275 26.3917 3.4375 24.4167 3.4375H21.9167Z" fill="#6D6E6F"/><path d="M9.41669 28.4375H6.91669C3.89169 28.4375 2.22919 26.775 2.22919 23.75V21.25C2.22919 18.225 3.89169 16.5625 6.91669 16.5625H9.41669C12.4417 16.5625 14.1042 18.225 14.1042 21.25V23.75C14.1042 26.775 12.4417 28.4375 9.41669 28.4375ZM6.91669 18.4375C4.94169 18.4375 4.10419 19.275 4.10419 21.25V23.75C4.10419 25.725 4.94169 26.5625 6.91669 26.5625H9.41669C11.3917 26.5625 12.2292 25.725 12.2292 23.75V21.25C12.2292 19.275 11.3917 18.4375 9.41669 18.4375H6.91669Z" fill="#6D6E6F"/><path d="M8.16669 13.4375C4.89169 13.4375 2.22919 10.775 2.22919 7.5C2.22919 4.225 4.89169 1.5625 8.16669 1.5625C11.4417 1.5625 14.1042 4.225 14.1042 7.5C14.1042 10.775 11.4417 13.4375 8.16669 13.4375ZM8.16669 3.4375C5.92919 3.4375 4.10419 5.2625 4.10419 7.5C4.10419 9.7375 5.92919 11.5625 8.16669 11.5625C10.4042 11.5625 12.2292 9.7375 12.2292 7.5C12.2292 5.2625 10.4042 3.4375 8.16669 3.4375Z" fill="#6D6E6F"/><path d="M23.1667 28.4375C19.8917 28.4375 17.2292 25.775 17.2292 22.5C17.2292 19.225 19.8917 16.5625 23.1667 16.5625C26.4417 16.5625 29.1042 19.225 29.1042 22.5C29.1042 25.775 26.4417 28.4375 23.1667 28.4375ZM23.1667 18.4375C20.9292 18.4375 19.1042 20.2625 19.1042 22.5C19.1042 24.7375 20.9292 26.5625 23.1667 26.5625C25.4042 26.5625 27.2292 24.7375 27.2292 22.5C27.2292 20.2625 25.4042 18.4375 23.1667 18.4375Z" fill="#6D6E6F"/></svg>`,
        title: 'Danh mục'
    },
    {
        page: FormularPage,
        icon: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" d="M18.2375 0.5H7.7625C3.2125 0.5 0.5 3.2125 0.5 7.7625V18.225C0.5 22.7875 3.2125 25.5 7.7625 25.5H18.225C22.775 25.5 25.4875 22.7875 25.4875 18.2375V7.7625C25.5 3.2125 22.7875 0.5 18.2375 0.5Z" fill="#64721C"/><path d="M24.625 13.2871H20.275C19.05 13.2871 17.9625 13.9621 17.4125 15.0621L16.3625 17.1371C16.1125 17.6371 15.6125 17.9496 15.0625 17.9496H10.9625C10.575 17.9496 10.025 17.8621 9.6625 17.1371L8.6125 15.0746C8.0625 13.9871 6.9625 13.2996 5.75 13.2996H1.375C0.8875 13.2996 0.5 13.6871 0.5 14.1746V18.2496C0.5 22.7871 3.225 25.4996 7.775 25.4996H18.25C22.5375 25.4996 25.175 23.1496 25.5 18.9746V14.1621C25.5 13.6871 25.1125 13.2871 24.625 13.2871Z" fill="#64721C"/><path d="M14.9375 7.75H11.0625C10.575 7.75 10.1875 7.3625 10.1875 6.875C10.1875 6.3875 10.575 6 11.0625 6H14.9375C15.425 6 15.8125 6.3875 15.8125 6.875C15.8125 7.3625 15.4125 7.75 14.9375 7.75Z" fill="#64721C"/><path d="M15.9125 11.2373H10.0875C9.6 11.2373 9.2125 10.8498 9.2125 10.3623C9.2125 9.87481 9.6 9.4873 10.0875 9.4873H15.9C16.3875 9.4873 16.775 9.87481 16.775 10.3623C16.775 10.8498 16.3875 11.2373 15.9125 11.2373Z" fill="#64721C"/></svg>`,
        iconActive: `<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0833 28.4375H11.5833C4.79581 28.4375 1.89581 25.5375 1.89581 18.75V11.25C1.89581 4.4625 4.79581 1.5625 11.5833 1.5625H19.0833C25.8708 1.5625 28.7708 4.4625 28.7708 11.25V18.75C28.7708 25.5375 25.8708 28.4375 19.0833 28.4375ZM11.5833 3.4375C5.82081 3.4375 3.77081 5.4875 3.77081 11.25V18.75C3.77081 24.5125 5.82081 26.5625 11.5833 26.5625H19.0833C24.8458 26.5625 26.8958 24.5125 26.8958 18.75V11.25C26.8958 5.4875 24.8458 3.4375 19.0833 3.4375H11.5833Z" fill="#6D6E6F"/><path d="M17.5333 22.1875H13.1208C11.7458 22.1875 10.6583 21.5125 10.0458 20.2875L8.9333 18.05C8.6708 17.5125 8.1333 17.1875 7.5333 17.1875H2.8208C2.3083 17.1875 1.8833 16.7625 1.8833 16.25C1.8833 15.7375 2.3208 15.3125 2.8333 15.3125H7.5333C8.8458 15.3125 10.0208 16.0375 10.6083 17.2125L11.7208 19.45C12.0083 20.025 12.4708 20.3125 13.1208 20.3125H17.5333C18.1333 20.3125 18.6708 19.9875 18.9333 19.45L20.0458 17.2125C20.6333 16.0375 21.8083 15.3125 23.1208 15.3125H27.7958C28.3083 15.3125 28.7333 15.7375 28.7333 16.25C28.7333 16.7625 28.3083 17.1875 27.7958 17.1875H23.1208C22.5208 17.1875 21.9833 17.5125 21.7208 18.05L20.6083 20.2875C20.0208 21.4625 18.8458 22.1875 17.5333 22.1875Z" fill="#6D6E6F"/><path d="M17.4208 9.6875H13.2583C12.7333 9.6875 12.3083 9.2625 12.3083 8.75C12.3083 8.2375 12.7333 7.8125 13.2458 7.8125H17.4083C17.9208 7.8125 18.3458 8.2375 18.3458 8.75C18.3458 9.2625 17.9333 9.6875 17.4208 9.6875Z" fill="#6D6E6F"/><path d="M18.4583 13.4375H12.2083C11.6958 13.4375 11.2708 13.0125 11.2708 12.5C11.2708 11.9875 11.6958 11.5625 12.2083 11.5625H18.4583C18.9708 11.5625 19.3958 11.9875 19.3958 12.5C19.3958 13.0125 18.9708 13.4375 18.4583 13.4375Z" fill="#6D6E6F"/></svg>`,
        title: 'Công thức'
    },
    {
        page: User,
        icon: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" d="M25.5 7.7625V18.2375C25.5 21.75 23.8875 24.1625 21.05 25.075C20.225 25.3625 19.275 25.5 18.2375 25.5H7.7625C6.725 25.5 5.775 25.3625 4.95 25.075C2.1125 24.1625 0.5 21.75 0.5 18.2375V7.7625C0.5 3.2125 3.2125 0.5 7.7625 0.5H18.2375C22.7875 0.5 25.5 3.2125 25.5 7.7625Z" fill="#64721C"/><path d="M21.0502 25.0754C20.2252 25.3629 19.2752 25.5004 18.2377 25.5004H7.7627C6.7252 25.5004 5.7752 25.3629 4.9502 25.0754C5.3877 21.7754 8.8377 19.2129 13.0002 19.2129C17.1627 19.2129 20.6127 21.7754 21.0502 25.0754Z" fill="#64721C"/><path d="M17.4749 12.475C17.4749 14.95 15.4749 16.9625 12.9999 16.9625C10.5249 16.9625 8.5249 14.95 8.5249 12.475C8.5249 10 10.5249 8 12.9999 8C15.4749 8 17.4749 10 17.4749 12.475Z" fill="#64721C"/></svg>`,
        iconActive: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.7502 28.4374H11.2502C9.60018 28.4374 8.22518 28.275 7.06268 27.925C6.63768 27.8 6.36268 27.3874 6.38768 26.9499C6.70018 23.2124 10.4877 20.2749 15.0002 20.2749C19.5127 20.2749 23.2877 23.1999 23.6127 26.9499C23.6502 27.3999 23.3752 27.8 22.9377 27.925C21.7752 28.275 20.4002 28.4374 18.7502 28.4374ZM8.40018 26.3249C9.22518 26.4874 10.1627 26.5624 11.2502 26.5624H18.7502C19.8377 26.5624 20.7752 26.4874 21.6002 26.3249C20.9377 23.9249 18.2002 22.1499 15.0002 22.1499C11.8002 22.1499 9.06268 23.9249 8.40018 26.3249Z" fill="#6D6E6F"/><path d="M18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 23.475 3.925 26.0625 7.325 27.025C7.6 23.775 10.9375 21.2125 15 21.2125C19.0625 21.2125 22.4 23.775 22.675 27.025C26.075 26.0625 27.5 23.475 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5ZM15 17.7125C12.525 17.7125 10.525 15.7 10.525 13.225C10.525 10.75 12.525 8.75 15 8.75C17.475 8.75 19.475 10.75 19.475 13.225C19.475 15.7 17.475 17.7125 15 17.7125Z" stroke="#6D6E6F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.9999 18.65C12.0124 18.65 9.5874 16.2125 9.5874 13.225C9.5874 10.2375 12.0124 7.8125 14.9999 7.8125C17.9874 7.8125 20.4124 10.2375 20.4124 13.225C20.4124 16.2125 17.9874 18.65 14.9999 18.65ZM14.9999 9.6875C13.0499 9.6875 11.4624 11.275 11.4624 13.225C11.4624 15.1875 13.0499 16.775 14.9999 16.775C16.9499 16.775 18.5374 15.1875 18.5374 13.225C18.5374 11.275 16.9499 9.6875 14.9999 9.6875Z" fill="#6D6E6F"/></svg>`,
        title: 'Cá nhân'
    },
]

class RenderLabel extends Component<{ focused: boolean, title: string }, {}> {
    render(): React.ReactNode {
        return (
            //FIXME: CUSTOM THIS APP: only show label when focused
            this.props.focused ? <LABELTEXTCLASS style={{ color: this.props.focused ? COLORFOCUS : COLORNOTFOCUS }}>{this.props.title}</LABELTEXTCLASS> : null
        );
    }
}

// // ____________________END OF IMPORT_______________________

const BottomTab = () => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const Tab = createBottomTabNavigator();
    const [CurrentCache, dispatch] = React.useContext(CUSTOMCACHE.RootContext);

    useEffect(() => {
        const fetchUser = async () => {
            let user: UserFormat | false = await STORAGEFNC.getUser();
            if (user && user.name) {
                dispatch(CUSTOMCACHE.currentSetUser(user));
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Onboard' as never }],
                });
            }
        };
        fetchUser();
    }, []);

    return (
        <Tab.Navigator
            tabBar={props => <BottomTabBar {...props} />}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: BOTTOM_TAB_HEIGHT + insets.bottom,
                    // display: 'flex',
                    // flexDirection: 'row',
                    // justifyContent: 'space-between',
                    // alignItems: 'center',
                    paddingHorizontal: vw(6),
                    paddingBottom: insets.bottom + vh(0.5),
                },
            }}
        >
            <Tab.Screen name={iconData[0].title} component={iconData[0].page}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgXml xml={focused ? iconData[0].icon : iconData[0].iconActive} width={BOTTOM_TAB_ICON_SIZE} height={BOTTOM_TAB_ICON_SIZE} />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <RenderLabel focused={focused} title={iconData[0].title} />
                    ),
                }} />
            <Tab.Screen name={iconData[1].title} component={iconData[1].page}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgXml xml={focused ? iconData[1].icon : iconData[1].iconActive} width={BOTTOM_TAB_ICON_SIZE} height={BOTTOM_TAB_ICON_SIZE} />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <RenderLabel focused={focused} title={iconData[1].title} />
                    ),
                }} />
            <Tab.Screen name={iconData[2].title} component={iconData[2].page}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgXml xml={focused ? iconData[2].icon : iconData[2].iconActive} width={BOTTOM_TAB_ICON_SIZE} height={BOTTOM_TAB_ICON_SIZE} />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <RenderLabel focused={focused} title={iconData[2].title} />
                    ),
                }} />
            <Tab.Screen name={iconData[3].title} component={iconData[3].page}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgXml xml={focused ? iconData[3].icon : iconData[3].iconActive} width={BOTTOM_TAB_ICON_SIZE} height={BOTTOM_TAB_ICON_SIZE} />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <RenderLabel focused={focused} title={iconData[3].title} />
                    ),
                }} />
        </Tab.Navigator>
    );
};

export default BottomTab;