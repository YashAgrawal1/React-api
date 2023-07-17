import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Typography,
  Container,
  Box,
} from "@mui/material";

export const Search = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchCharacter(query) {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?name=${query}`
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error in fetching characters:", error);
      return [];
    }
  }

  async function handleSearch() {
    const characters = await fetchCharacter(searchQuery);
    setCharacters(characters);
    console.log("yash", characters);
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Typography variant="h4" align="center">
        Characters
      </Typography>

      <Container style={{ maxWidth: "400px" }}>
        <Box mt={5} p={3} bgcolor="white" boxShadow={3}>
          <div>
            <TextField
              label="Search Characters"
              variant="outlined"
              onChange={handleSearchChange}
            />
            <button
              type="text"
              onClick={() => {
                if (searchQuery.length) handleSearch();
              }}
            >
              Search
            </button>
          </div>
        </Box>
      </Container>

      {filteredCharacters.length ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCharacters.map((character) => (
              <TableRow>
                <TableCell>{character.name}</TableCell>
                <TableCell>{character.created}</TableCell>
                <TableCell>{character.status}</TableCell>
                <TableCell>{character.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <></>
      )}
    </>
  );
};
