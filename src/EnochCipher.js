import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Badge,
} from "react-bootstrap";
import AlphabetTable from "./components/AlphabetTable";

class EnochCipher extends Component {
  state = {
    alphabet: [
      ["ሀ", "ሁ", "ሂ", "ሃ", "ሄ", "ህ", "ሆ"],
      ["ለ", "ሉ", "ሊ", "ላ", "ሌ", "ል", "ሎ"],
      ["ሐ", "ሑ", "ሒ", "ሓ", "ሔ", "ሕ", "ሖ"],
      ["መ", "ሙ", "ሚ", "ማ", "ሜ", "ም", "ሞ"],
      ["ሠ", "ሡ", "ሢ", "ሣ", "ሤ", "ሥ", "ሦ"],
      ["ረ", "ሩ", "ሪ", "ራ", "ሬ", "ር", "ሮ"],
      ["ሰ", "ሱ", "ሲ", "ሳ", "ሴ", "ስ", "ሶ"],
      ["ሸ", "ሹ", "ሺ", "ሻ", "ሼ", "ሽ", "ሾ"],
      ["ቀ", "ቁ", "ቂ", "ቃ", "ቄ", "ቅ", "ቆ"],
      ["በ", "ቡ", "ቢ", "ባ", "ቤ", "ብ", "ቦ"],
      ["ተ", "ቱ", "ቲ", "ታ", "ቴ", "ት", "ቶ"],
      ["ቸ", "ቹ", "ቺ", "ቻ", "ቼ", "ች", "ቾ"],
      ["ኀ", "ኁ", "ኂ", "ኃ", "ኄ", "ኅ", "ኆ"],
      ["ነ", "ኑ", "ኒ", "ና", "ኔ", "ን", "ኖ"],
      ["ኘ", "ኙ", "ኚ", "ኛ", "ኜ", "ኝ", "ኞ"],
      ["አ", "ኡ", "ኢ", "ኣ", "ኤ", "እ", "ኦ"],
      ["ከ", "ኩ", "ኪ", "ካ", "ኬ", "ክ", "ኮ"],
      ["ኸ", "ኹ", "ኺ", "ኻ", "ኼ", "ኽ", "ኾ"],
      ["ወ", "ዉ", "ዊ", "ዋ", "ዌ", "ው", "ዎ"],
      ["ዐ", "ዑ", "ዒ", "ዓ", "ዔ", "ዕ", "ዖ"],
      ["ዘ", "ዙ", "ዚ", "ዛ", "ዜ", "ዝ", "ዞ"],
      ["ዠ", "ዡ", "ዢ", "ዣ", "ዤ", "ዥ", "ዦ"],
      ["የ", "ዩ", "ዪ", "ያ", "ዬ", "ይ", "ዮ"],
      ["ደ", "ዱ", "ዲ", "ዳ", "ዴ", "ድ", "ዶ"],
      ["ዸ", "ዹ", "ዺ", "ዻ", "ዼ", "ዽ", "ዾ"],
      ["ጀ", "ጁ", "ጂ", "ጃ", "ጄ", "ጅ", "ጆ"],
      ["ገ", "ጉ", "ጊ", "ጋ", "ጌ", "ግ", "ጎ"],
      ["ጠ", "ጡ", "ጢ", "ጣ", "ጤ", "ጥ", "ጦ"],
      ["ጨ", "ጩ", "ጪ", "ጫ", "ጬ", "ጭ", "ጮ"],
      ["ጰ", "ጱ", "ጲ", "ጳ", "ጴ", "ጵ", "ጶ"],
      ["ጸ", "ጹ", "ጺ", "ጻ", "ጼ", "ጽ", "ጾ"],
      ["ፀ", "ፁ", "ፂ", "ፃ", "ፄ", "ፅ", "ፆ"],
      ["ፈ", "ፉ", "ፊ", "ፋ", "ፌ", "ፍ", "ፎ"],
      ["ፐ", "ፑ", "ፒ", "ፓ", "ፔ", "ፕ", "ፖ"],
    ],
    encryptedAlphabet: [],
    encryptPair: {},
    decryptPair: {},
    plainText: "",
    encryptedText: "",
    horizontalCount: 0,
    verticalCount: 0,
  };
  handleHorizontalCount = (count) => {
    let newCount = this.state.horizontalCount + count;
    if (newCount >= 0 && newCount <= 7) {
      this.setState(
        {
          ...this.state,
          horizontalCount: newCount,
        },
        () => this.updateEncryptedAlphabet()
      );
    }
  };
  handleVerticalCount = (count) => {
    let newCount = this.state.verticalCount + count;
    if (newCount >= 0 && newCount <= this.state.alphabet.length) {
      this.setState(
        {
          ...this.state,
          verticalCount: newCount,
        },
        () => this.updateEncryptedAlphabet()
      );
    }
  };

  updateEncryptedAlphabet = () => {
    const { horizontalCount, verticalCount } = this.state;
    let horizontallyShifted = [];
    //Update horizontally
    for (let i = 0; i < this.state.alphabet.length; i++) {
      let inner = [];
      for (let j = horizontalCount; j < this.state.alphabet[0].length; j++) {
        inner.push(this.state.alphabet[i][j]);
      }
      for (let j = 0; j < horizontalCount; j++) {
        inner.push(this.state.alphabet[i][j]);
      }
      horizontallyShifted.push(inner);
    }

    //Update virtically
    let verticallyShifted = [];
    for (let i = verticalCount; i < this.state.alphabet.length; i++) {
      verticallyShifted.push(horizontallyShifted[i]);
    }
    for (let i = 0; i < verticalCount; i++) {
      verticallyShifted.push(horizontallyShifted[i]);
    }

    let encryptPair = {};
    let decryptPair = {};
    for (let i = 0; i < this.state.alphabet.length; i++) {
      for (let j = 0; j < this.state.alphabet[i].length; j++) {
        encryptPair[this.state.alphabet[i][j]] = verticallyShifted[i][j];
        decryptPair[verticallyShifted[i][j]] = this.state.alphabet[i][j];
      }
    }

    //Update state
    this.setState({
      ...this.state,
      encryptedAlphabet: verticallyShifted,
      encryptPair,
      decryptPair,
    });
  };

  handleEncrypt = () => {
    const { plainText } = this.state;
    let encryptedText = "";
    for (let i = 0; i < plainText.length; i++) {
      if (plainText[i] in this.state.encryptPair) {
        encryptedText += this.state.encryptPair[plainText[i]];
      } else {
        encryptedText += plainText[i];
      }
    }
    this.setState({
      ...this.state,
      encryptedText,
    });
  };

  handleDecrypt = () => {
    const { encryptedText } = this.state;
    let plainText = "";
    for (let i = 0; i < encryptedText.length; i++) {
      if (encryptedText[i] in this.state.decryptPair) {
        plainText += this.state.decryptPair[encryptedText[i]];
      } else {
        plainText += encryptedText[i];
      }
    }
    this.setState({
      ...this.state,
      plainText,
    });
  };

  handleClearAll = () => {
    this.setState({
      alphabet: this.state.alphabet,
      encryptedAlphabet: this.state.alphabet,
      encryptPair: {},
      decryptPair: {},
      plainText: "",
      encryptedText: "",
      horizontalCount: 0,
      verticalCount: 0,
    });
  };
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1 style={style.headerStyle}>Enoch Cipher</h1>
            <p style={style.headerDescription}>
              <strong>Enoch Cipher</strong> is a basic shift cypher for amharic
              language.
            </p>
            <p style={style.headerDescription}>
              Created By:{" "}
              <strong>
                <a href="https://www.linkedin.com/in/henok-tasissa/">
                  Henok Tasissa
                </a>
              </strong>
            </p>

            <p style={{ textAlign: "center", fontSize: "12px", margin: 0 }}>
              Source Code:{" "}
              <strong>
                <a href="https://github.com/Henok-tasissa/enoch-cipher">
                  Github
                </a>
              </strong>
            </p>
          </Container>
        </Jumbotron>
        <Container>
          <Row style={style.row}>
            <Col xs={5}>
              <Form>
                <Form.Group>
                  <Form.Label>Plain text</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={(e) => {
                      this.setState({
                        ...this.state,
                        plainText: e.target.value,
                      });
                    }}
                    value={this.state.plainText}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col xs={2} style={{ alignSelf: "center" }}>
              <div style={style.buttonContainer}>
                <Button
                  variant="primary"
                  style={style.button}
                  onClick={() => this.handleEncrypt()}
                >
                  {"Encrypt >>"}
                </Button>
                <Button
                  variant="primary"
                  style={style.button}
                  onClick={() => this.handleDecrypt()}
                >
                  {"<< Decrypt"}
                </Button>
                <Button
                  variant="danger"
                  style={style.button}
                  onClick={() => this.handleClearAll()}
                >
                  Clear All
                </Button>
              </div>
            </Col>
            <Col xs={5}>
              <Form>
                <Form.Group>
                  <Form.Label>Cipher text</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={(e) => {
                      this.setState({
                        ...this.state,
                        encryptedText: e.target.value,
                      });
                    }}
                    value={this.state.encryptedText}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={{ span: 5, offset: 4 }}>
              <Row>
                <Col>
                  <Form.Label>
                    Horizontal Shift (Max: {this.state.alphabet[0].length})
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text
                        onClick={() => this.handleHorizontalCount(-1)}
                      >
                        -
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Badge variant="info" style={{ fontSize: "30px" }}>
                      {this.state.horizontalCount}
                    </Badge>
                    <InputGroup.Prepend>
                      <InputGroup.Text
                        onClick={() => this.handleHorizontalCount(1)}
                      >
                        +
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                  </InputGroup>
                </Col>
                <Col>
                  <Form.Label>
                    Vertical Shift (Max: {this.state.alphabet.length})
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text
                        onClick={() => this.handleVerticalCount(-1)}
                      >
                        -
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Badge variant="info" style={{ fontSize: "30px" }}>
                      {this.state.verticalCount}
                    </Badge>
                    <InputGroup.Prepend>
                      <InputGroup.Text
                        onClick={() => this.handleVerticalCount(1)}
                      >
                        +
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                  </InputGroup>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={style.row}>
            <Col xs={5}>
              <AlphabetTable
                alphabets={this.state.alphabet}
                plainAlphabets={true}
                handlePlainAlphabetPress={(text) => {
                  this.setState({
                    ...this.state,
                    plainText: this.state.plainText + text,
                  });
                }}
              />
            </Col>
            <Col xs={2}></Col>
            <Col xs={5}>
              <AlphabetTable
                alphabets={
                  this.state.encryptedAlphabet.length > 0
                    ? this.state.encryptedAlphabet
                    : this.state.alphabet
                }
                encryptedAlphabets={true}
                handleEncryptedAlphabetPress={(text) => {
                  this.setState({
                    ...this.state,
                    encryptedText: this.state.encryptedText + text,
                  });
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const style = {
  headerStyle: {
    textAlign: "center",
  },
  headerDescription: {
    textAlign: "center",
  },
  row: {
    margin: 15,
  },
  button: {
    margin: "3px",
    width: "100%",
    padding: "3px",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
};
export default EnochCipher;
