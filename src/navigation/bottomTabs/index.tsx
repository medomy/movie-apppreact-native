import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useMemo } from 'react'
import { createBottomTabNavigator, BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/home';
import ToWatchScreen from '../../screens/toWatchScreen';
import { COLORS, SIZES } from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import { } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

const MainTabBar = createBottomTabNavigator();
const TabBarLabel = ({ focused, color, children }: {
    focused: boolean;
    color: string;
    //position: LabelPosition;
    children: string;
}) => (<>
    {focused && <Text style={{ color, marginLeft: 15 }}>{children}</Text>}
</>)
const TabBarBtn = ({ children, onPress, accessibilityState }: BottomTabBarButtonProps) => {
    const isSelected = useMemo(() => {
        return accessibilityState?.selected;
    }, [accessibilityState])
    if (isSelected) {
        return (
            <TouchableOpacity onPress={onPress} style={styles.btmBtn}>
                {children}
            </TouchableOpacity>
        )
    }
    else {
        return (
            <TouchableOpacity onPress={onPress}>
                {children}
            </TouchableOpacity>
        )
    }
};
const BottomTabBarMain = () => {
    return (
        <MainTabBar.Navigator initialRouteName='Home' screenOptions={({ }) => (
            {
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: COLORS.white,
                tabBarInactiveTintColor: COLORS.offWhite,
                tabBarLabelPosition: "beside-icon",
                tabBarActiveBackgroundColor: COLORS.tintColor,
                tabBarInactiveBackgroundColor: COLORS.transparent,
                
                //tabBarLabel: TabBarLabel,
            }
        )}>
            <MainTabBar.Screen name='Home' component={HomeScreen} options={({ }) => (
                {
                    tabBarLabel: ({ focused, color }) => (<TabBarLabel focused={focused} children='Movies' color={color} />),
                    tabBarIcon: ({ color, size }) => (<Icon color={color} size={size} name='movie-open-outline' />),
                    //tabBarButton: TabBarBtn,
                    tabBarItemStyle: styles.btmBtn
                }
            )} />
            <MainTabBar.Screen name='ToWatchList' component={ToWatchScreen} options={({ }) => (
                {
                    tabBarLabel: ({ focused, color }) => (<TabBarLabel focused={focused} children='To-watch' color={color} />),
                    tabBarIcon: ({ color, size }) => (<Icon color={color} size={size} name='bookmark-multiple-outline' />),
                    //tabBarButton: TabBarBtn,
                    tabBarItemStyle: styles.btmBtn
                }
            )} />
            <MainTabBar.Screen name='any' component={HomeScreen} options={({ }) => (
                {
                    tabBarLabel: ({ focused, color }) => (<TabBarLabel focused={focused} children='any' color={color} />),
                    tabBarIcon: ({ color, size }) => (<Icon color={color} size={size} name='account-outline' />),
                    //tabBarButton: TabBarBtn,
                    tabBarItemStyle: styles.btmBtn
                }
            )} />
        </MainTabBar.Navigator>
    )
}

export default BottomTabBarMain

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: COLORS.primary,
        opacity: 0.9,
        paddingVertical: SIZES.padding2,
        paddingHorizontal: SIZES.padding2,
    },
    btmBtn: {
        flex: 0.7,
        borderRadius: SIZES.radius,
        width: "50%",
        paddingVertical: 0.5 * SIZES.padding,
        height: "100%",
        alignSelf: "center",
        bottom: 0.5 * SIZES.padding2,
        justifyContent: "center",
        alignItems: "center"
    }
})