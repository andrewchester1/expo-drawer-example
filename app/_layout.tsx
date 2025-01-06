import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
      <DrawerContentScrollView
          {...props}
      >
          <DrawerItemList {...props} />
              <DrawerItem
                  inactiveTintColor="white"
                  activeTintColor={"blue"}
                  onPress={() => null}
                  label="Account"
              />
      </DrawerContentScrollView>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'overview',
          }}
        />
        
        <Drawer.Screen
          name="explore" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Explore',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="test1" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Test1',
            title: 'Test1',
          }}
        />
        <Drawer.Screen
          name="test2" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Test2',
            title: 'Test2',
          }}
        />
        <Drawer.Screen
          name="test3" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'test3',
            title: 'test3',
          }}
        />
        <Drawer.Screen
          name="test4" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'test4',
            title: 'test4',
          }}
        />
        <Drawer.Screen
          name="test5" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'test5',
            title: 'test5',
          }}
        />
        <Drawer.Screen
          name="test6" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'test6',
            title: 'test6',
          }}
        />
        <Drawer.Screen
          name="test7" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'test7',
            title: 'test7',
          }}
        />
        <Drawer.Screen
          name="test8" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'test8',
            title: 'test8',
          }}
        />
        <Drawer.Screen
          name="test9" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'test9',
            title: 'test9',
          }}
        />
        <Drawer.Screen
          name="test10" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'test10',
            title: 'test10',
          }}
        />
        <Drawer.Screen
          name="test11" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'test11',
            title: 'test11',
          }}
        />
        <Drawer.Screen
          name="test12" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'test12',
            title: 'test12',
          }}
        />
        <Drawer.Screen
          name="test13" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'test13',
            title: 'test13',
          }}
        />
        <Drawer.Screen
          name="test14" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'test14',
            title: 'test14',
          }}
        />
        <Drawer.Screen
          name="test15" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'test15',
            title: 'test15',
          }}
        />
        <Drawer.Screen
          name="test16" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'test16',
            title: 'test16',
          }}
        />
        <Drawer.Screen
          name="test17" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'test17',
            title: 'test17',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}