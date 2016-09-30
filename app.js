// TODO
var GroceryList = (props) => (
  <ul>
    {
      props.groceryItem.map(groceryItem => 
        <GroceryListItem key={groceryItem} groceryItem={groceryItem} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      bolded: false
    };
  }

  onMouseEnter(event) {
    this.setState({
      bolded: !this.state.bolded
    });
  }

  onMouseLeave(event) {
    this.setState({
      bolded: !this.state.bolded
    });
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.bolded ? 'bold' : 'normal'
    };
    return (
      <li style={style} 
      onMouseEnter={this.onMouseEnter.bind(this)}
      onMouseLeave={this.onMouseLeave.bind(this)}
      onClick={this.onListItemClick.bind(this)}
      >
      {this.props.groceryItem}
      </li>
    );
  }
}


var groceryList = ['Apple', 'Orange', 'Banana'];

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceryItem={groceryList}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
