import React from "react";
import { Menu, Input } from "semantic-ui-react";

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => {
  return (
    <Menu secondary>
      <Menu.Item
        name="all"
        active={filterBy === "all"}
        onClick={setFilter.bind(this, "all")}
      >
        All
      </Menu.Item>
      <Menu.Item
        name="price_high"
        active={filterBy === "price_high"}
        onClick={setFilter.bind(this, "price_high")}
      >
        Price (high)
      </Menu.Item>
      <Menu.Item
        name="price (low)"
        active={filterBy === "price_low"}
        onClick={setFilter.bind(this, "price_low")}
      >
        Price (low)
      </Menu.Item>
      <Menu.Item
        name="author"
        active={filterBy === "author"}
        onClick={setFilter.bind(this, "author")}
      >
        Author
      </Menu.Item>
      <Menu.Item>
        <Input
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          icon="search"
          placeholder="Search..."
        />
      </Menu.Item>
    </Menu>
  );
};

export default Filter;
