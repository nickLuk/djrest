import React from "react";

class UserItem extends React.Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    email: this.props.email,
    massage: this.props.massage,
    created_at: this.props.created_at,
  };
  render() {
    const { id, name, email, massage, created_at } = this.state;
    // console.log("singleUserState => ", this.state);
    //console.log(this.props);
    return (
      <tbody>
        <tr className="priority-200">
          <td className="name">{id}</td>
          <td className="clicks">{name}</td>
          <td className="priority">{email}</td>
          <td className="impressions">{massage}</td>
          <td className="delete">
            <button className="delete-btn" onClick={this.props.onDeleteItem}>
              <i className="fas fa-trash-alt" title="delete row"></i>
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default UserItem;