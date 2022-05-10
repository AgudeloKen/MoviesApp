import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input, Li, Nav, P, Ul } from "./Nav.Styled";
import { FaSearch, FaRegPlayCircle } from "react-icons/fa";
import { BsFillTvFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navigation = ({
  handleChange,
  handleSubmit,
  input,
  restartSearch,
  Tvseries,
}) => {
  const [search, setSearch] = useState(false);
  const handleSearch = () => setSearch(!search);

  return (
    <>
      <Nav>
        <Ul search={search}>
          <Li search={search}>
            {search ? (
              <>
                <AiOutlineCloseCircle
                  className="search-close"
                  onClick={handleSearch}
                />
                <Form id="form" onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={input}
                    onChange={handleChange}
                    search={search}
                  />
                  <Button search={search} onClick={handleSubmit}>
                    <Link className="Link" to="/search">
                      <FaSearch className="min-search" />
                    </Link>
                  </Button>
                </Form>
              </>
            ) : (
              <FaSearch className="search" onClick={handleSearch} />
            )}
          </Li>
          <Li>
            <Link className="Link" to="/" onClick={restartSearch}>
              <FaRegPlayCircle className="icon" />
              {search ? <P search={search}>Movies</P> : ""}
            </Link>
          </Li>
          <Li>
            <Link className="Link" to="/series" onClick={Tvseries}>
              <BsFillTvFill className="icon" />
              {search ? <P search={search}>TV Series</P> : ""}
            </Link>
          </Li>
        </Ul>
      </Nav>
    </>
  );
};

export default Navigation;
