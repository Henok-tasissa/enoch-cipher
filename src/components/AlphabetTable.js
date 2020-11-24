import React, { Component } from "react";
import { Table } from "react-bootstrap";
class AlphabetTable extends Component {
  componentDidMount = () => {};
  render() {
    return (
      <div>
        <Table striped bordered hover>
          <tbody>
            {this.props.alphabets
              ? this.props.alphabets.map((alphabet, key) => {
                  return (
                    <tr key={key}>
                      {alphabet.map((alpha, key) => {
                        return (
                          <td
                            style={style.alphabet}
                            key={key}
                            onClick={(text) =>
                              this.props.plainAlphabets
                                ? this.props.handlePlainAlphabetPress(alpha)
                                : this.props.encryptedAlphabets
                                ? this.props.handleEncryptedAlphabetPress(alpha)
                                : null
                            }
                          >
                            {alpha}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
      </div>
    );
  }
}
const style = {
  alphabet: {
    textAlign: "center",
  },
};
export default AlphabetTable;
