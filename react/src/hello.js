var Hello = React.createClass({
  getInitialState () {
    return { num: 1 };
  },
  
  render () {
    return (
      <button onClick={ this.onClick }>
        Hello! { this.props.name }{ this.state.num }
      </button>
    )
  },
  
  onClick (e) {
    this.setState({ num: this.state.num + 1 });
    this.props.onClick(this.state.num);
  }
});

var Parent = React.createClass({
  render () {
    return (
      <Hello name="World" onClick={ this.onClick } />
    )
  },
  
  onClick (id) {
    alert(id);
  }
});

React.render(<Parent />, document.body);
