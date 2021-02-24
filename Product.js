.header {
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header__logo {
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
}
.header__search {
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
}

.header__searchInput {
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
}
.header__searchIcon {
  padding: 5px;
  height: 22px;
  background-color: orange;
}
.header__optionLineOne {
    font-size: 10px;
}
.header__optionLineTwo {
    font-size: 13px;
    font-weight: 800;
}
.header__optionBasket {
    display:flex;
    align-items:center;
    color:white;
}
.header__basketCount {
    margin-left: 10px;
    margin-right: 10px;
}
.header__nav {
  display: flex;
  justify-content: space-evenly;
}
.header__option {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
}
