import React from "react";
import "./SidebarComponent.css";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import axios from "axios";

// TODO - make sure SidebarComponent is expecting the right props!
export const SidebarComponent = ({ dataChoice, setDataChoice }) => {
  // TODO - reflect expanded/collapsed state in sidebar's className
  // TODO - make sure the classNames in the SidebarComponent.css match up with the classes you choose!

  <style>
@import url('https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap');
</style>

  const handleChange = event => {
    setDataChoice(event.target.value);
  };

  return (
    <div className={"sidebar"}>
      {/* TODO - flesh out this component to include all controls for configuring your data retrieval.
             This must include the category (books/characters/houses)
        */}

      <div className="sidebar">
        <form className="search-bar">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Enter search..."
          />{" "}
          <br></br>
          <br></br>
          <Button variant="contained" color="secondary">
            SEARCH
          </Button>
        </form>
        <br />
        <FormControl component="fieldset">
          <FormLabel component="legend">Select Option</FormLabel>
          <RadioGroup
            aria-label="data"
            name="data"
            value={dataChoice}
            onChange={handleChange}
          >
            <FormControlLabel
              value="houses"
              control={<Radio />}
              label="Houses"
            />
            <FormControlLabel
              value="characters"
              control={<Radio />}
              label="Characters"
            />
            <FormControlLabel value="books" control={<Radio />} label="Books" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};
