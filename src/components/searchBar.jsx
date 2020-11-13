import React, { useState } from "react"
import { TextField, Button, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const SearchBar = ({ fetchQuery, setRecipies }) => {
  
  const [search, setSearch] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    if (search.trim() !== "") {
      setRecipies(null)

      fetchQuery(search)
    } else {
      return;
    }
  }

  const isDisabled = () => {
    if (search === "") {
      return true
    } else {
      return false
    }
  }

  const styles = useStyles()

  return (
    <Box 
      boxShadow={3}
      border={0.1}
      borderColor="white"
      borderRadius="5px" 
      m={5} 
    >
      <form className="search-form" onSubmit={handleSubmit}>
        <TextField
          className={styles.textInput}
          autoFocus={false}
          variant="filled"
          color="primary"
          placeholder="search"
          required={true}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Button
          className={styles.button}
          variant="contained"
          disabled={isDisabled()}
          type="submit"
          disableElevation
        >
          Search
        </Button>
      </form>
    </Box>
  )
}

const useStyles = makeStyles({
  button: {
    borderRadius: "2px",
  },
  textInput: {
    margin: "15px",
    width: "60%",
  },
})

export default SearchBar
