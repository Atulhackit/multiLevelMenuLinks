import { useState, useCallback } from "react";
import { menuLinks } from "./data";
const Home = () => {
  console.log(menuLinks);
  const [rows, setRows] = useState(menuLinks);
  const handleSubmenuChange = useCallback(
    (rowItem, i) => {
      let dupLicateRows = [...rows];
      let modifiedItem = {
        ...rowItem,
        isSubMenu: !rowItem.isSubMenu
      };

      if (modifiedItem.isSubMenu) {
        modifiedItem.subMenu.push(configState?.global?.header?.menuLinks);
      } else {
        modifiedItem.subMenu = [];
      }

      dupLicateRows.splice(i, 1, modifiedItem);
      setRows(dupLicateRows);
    },
    [rows]
  );
  const handleInputChange = (e, i) => {
    let dupLicateRows = [...rows];
    let modifiedItem = {
      ...dupLicateRows[i],
      name: e.target.value
    };
    dupLicateRows.splice(i, 1, modifiedItem);

    setRows(dupLicateRows);
  };

  const addSingleRow = () => {
    let obj = {
      id: rows.length,
      name: "",
      pathName: "",
      isSubMenu: false,
      subMenu: []
    };
    setRows((prevState) => [...prevState, obj]);
  };
  const deleteParticularRow = (index) => {
    rows.splice(index, 1);
    setRows([...rows]);
  };

  const addSubRow = (i) => {
    let dupLicateRows = [...rows];
    let obj = { id: rows[i].subMenu.length, name: "", pathName: "" };
    dupLicateRows[i].subMenu.push(obj);
    setRows(dupLicateRows);
  };

  const deleteSubRow = (i, index) => {
    let dupLicateRows = [...rows];
    dupLicateRows[i].subMenu.splice(index, 1);
    setRows(dupLicateRows);
  };
  return (
    <div>
      <div className="menuBodyDesc">
        {rows &&
          rows?.map((item, i) => {
            //console.log(item)
            return (
              <div key={i}>
                <div className="headerDetailsSubMenuContainer menuWidthAdj">
                  <input
                    className="textComon"
                    label="menu name"
                    type="text"
                    placeholder="Menu Name"
                    value={item.name}
                    handleChange={(e) => handleInputChange(e, i)}
                  />
                  <input
                    className="textComon"
                    label="path name"
                    type="text"
                    value={item.pathname}
                    handleChange={(e) => handleInputChange(e, i)}
                    placeholder="Path Name"
                  />
                  {/* <input label="to" type="text" /> */}
                  <div className="textComon switchWidthAdj">
                    <input
                      label="Submenu"
                      type="checkbox"
                      checked={item.isSubMenu}
                      value={item.isSubMenu}
                      onChange={() => handleSubmenuChange(item, i)}
                      // onChange={() => handleSubmenuChange2(item, i)}
                    />
                  </div>
                  {/* <button onClick={() => deleteParticularRow(i)}>del</button> */}

                  <div className="textComon ButtonStyleHeader">
                    <button
                      disabled={rows.length === 1 ? true : false}
                      // url={minusButton}
                      onClick={() => deleteParticularRow(i)}
                    />
                    <button
                      className={`addRow ${
                        rows.length - 1 === i ? "show" : "hide"
                      }`}
                      // url={addButton}
                      onClick={addSingleRow}
                    />
                  </div>
                </div>
                <div className="subMenu">
                  {item?.isSubMenu && (
                    <div className="submenuTitle">{rows[i].name} Submenu</div>
                  )}
                  {item?.isSubMenu &&
                    item?.subMenu.length > 0 &&
                    item?.subMenu?.map((subItem, index) => {
                      console.log(subItem);
                      return (
                        <div
                          className="headerDetailsSubMenuContainer menuWidthAdj"
                          key={index}
                        >
                          <input
                            className="textComon"
                            label="name"
                            type="text"
                            value={subItem.name}
                            handleChange={(e) => handleInputChange(e, i)}
                            placeholder="Menu Name"
                          />
                          <input
                            className="textComon"
                            label="pathname"
                            value={subItem.pathname}
                            handleChange={(e) => handleInputChange(e, i)}
                            type="text"
                            placeholder="Path Name"
                          />
                          {/* <input label="to" type="text" /> */}
                          <div className="textComon switchWidthAdj"></div>
                          <div className="textComon ButtonStyleHeader">
                            <button
                              disabled={
                                item.subMenu.length === 1 ? true : false
                              }
                              // url={minusButton}
                              className={`deleteRow  `}
                              onClick={() => deleteSubRow(i, index)}
                            />
                            <button
                              className={`addRow ${
                                item?.subMenu.length - 1 === index
                                  ? "show"
                                  : "hide"
                              }  `}
                              // url={addButton}
                              onClick={() => addSubRow(i)}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div className="border-bottom"></div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
