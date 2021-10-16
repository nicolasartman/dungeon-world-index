import { get as calculateEditDistance } from "fast-levenshtein"
import { Box, Grommet, Heading, Text, TextInput } from "grommet"
import minBy from "lodash/minBy"
import { useMemo, useState } from "react"
import "./App.css"
import data from "./data"
import theme from "./theme"

const getResults = (searchTerms: Array<string>) =>
  searchTerms.map(
    (searchTerm) =>
      minBy(data, (datum) => calculateEditDistance(searchTerm, datum.name)) || {
        name: "Not found",
        description: `No result was found for ${searchTerm}`,
        category: "",
      },
  )

type ItemProps = {
  name: string
  description: string
  category: string
}

const Item = ({ name, description, category }: ItemProps) => (
  <Box
    direction="column"
    align="start"
    pad={{ bottom: "40px" }}
    width="768px"
    style={{ maxWidth: "100%" }}
  >
    <Box direction="row" fill align="end" justify="between">
      <Heading level="3" style={{ margin: "0" }}>
        {name}
      </Heading>
      <Box>
        <Text style={{ fontStyle: "italic", opacity: 0.7 }}>{category}</Text>
      </Box>
    </Box>
    <Box height="5px" />
    <Text textAlign="start" style={{ whiteSpace: "pre-wrap" }}>
      {description}
    </Text>
  </Box>
)

function App() {
  const [searchTerms, setSearchTerms] = useState<Array<string>>([])

  const results = useMemo(
    () => (searchTerms.length ? getResults(searchTerms) : data),
    [searchTerms],
  )

  return (
    <div className="App">
      <Grommet full="min" theme={theme} themeMode="dark">
        <Box fill pad={{ horizontal: "40px" }}>
          <Box fill direction="row" justify="center">
            <Heading level="1">Dungeon World Index</Heading>
          </Box>
          <Box direction="row" justify="center">
            <Box direction="row" width="100%" style={{ maxWidth: "500px" }}>
              <TextInput
                onChange={({ target: { value } }) => {
                  const terms = value
                    .split(",")
                    .map((term) => term.trim())
                    .filter((term) => term)
                  setSearchTerms(terms)
                }}
                placeholder="Enter term(s), separated by commas"
              />
            </Box>
          </Box>
          <Box height="40px" />
          <Box direction="column" align="center" fill>
            {results.map(({ name, description, category }) => (
              <Item key={name} name={name} description={description} category={category} />
            ))}
          </Box>
        </Box>
      </Grommet>
    </div>
  )
}

export default App
