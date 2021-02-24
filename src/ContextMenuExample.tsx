
import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu
} from "react-contexify";

import "./features/organization/components/node_modules/react-contexify/dist/ReactContexify.css";

const MENU_ID = "menu-id";

export default function App() {
  // 🔥 you can use this hook from everywhere. All you need is the menu id
  const { show } = useContextMenu({
    id: MENU_ID
  });
 //@ts-ignore
  function handleItemClick({ event, props, triggerEvent, data }){
    console.log(event, props, triggerEvent, data );
  }
//@ts-ignore
  function displayMenu(e){
    // put whatever custom logic you need
    // you can even decide to not display the Menu
    show(e);
  }
  return (
    <div>
      {/* just display the menu on right click */}
      <div onContextMenu={show}>
        Right click inside the box
      </div>
      {/* run custom logic then display the menu */}
      <div onContextMenu={displayMenu}>
        Right click inside the box
      </div>


      <Menu id={MENU_ID}>
        <Item >
          Item 1
        </Item>
        <Item >
          Item 2
        </Item>
        <Separator />
        <Item disabled>Disabled</Item>
        <Separator />
        <Submenu label="Submenu">
          <Item >
            Sub Item 1
          </Item>
          <Item>Sub Item 2</Item>
        </Submenu>
      </Menu>
    </div>
  );
}