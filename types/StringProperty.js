var React = require('react');

/**
 * Component for editing a string.
 * @param  {string} value The value of the string.
 * @param  {Mixed} original The value of the component it the original json.
 * @param {FreezerNode} parent The parent node to let the string component update its value.
 */
var StringAttribute = React.createClass({
	getInitialState: function(){
		return this.getStateFromProps( this.props );
	},

	getStateFromProps: function( props ){
		return {
			editing: props.settings.editing || false,
			value: props.value
		};
	},

	defaultValue: '',

	render: function(){
		var className = 'jsonString';

		if( !this.state.editing )
			return React.DOM.span( {onClick: this.setEditMode, className: className}, this.props.value );

		return React.DOM.input({
			type: 'text',
			value: this.state.value,
			placeholder: this.props.settings.placeholder || '',
			onChange: this.updateValue,
			onBlur: this.setValue,
			ref: 'input',
			onKeyDown: this.handleKeyDown,
			className: className
		});
	},

	componentDidUpdate: function( prevProps, prevState ){
		if( this.state.editing && ! prevState.editing ){
			this.focus();
		}
	},

	componentDidMount: function(){
		if( this.state.editing )
			this.focus();
	},

	componentWillReceiveProps: function( nextProps ){
		if( this.props.value != nextProps.value )
			this.setState( { value: nextProps.value } );
		else if( this.props.settings.editing != nextProps.settings.editing )
			this.setState({ editing: nextProps.editing });
	},

	setEditMode: function(){
		this.setState({editing: true});
	},

	setValue: function(){
		if( this.state.editing != 'always' )
			this.setState({editing: false});
		this.props.onUpdated( this.state.value );
	},

	updateValue: function( e ){
		this.setState({ value: e.target.value });
	},

	handleKeyDown: function( e ){
		if( e.which == 13 )
			this.setValue();
	},
	toggleEditing: function(){
		this.setState({ editing: !this.state.editing });
	},

	isType: function( value ){
		return typeof value != 'object';
	},

	focus: function(){
		var node = this.refs.input.getDOMNode();
		node.focus();
		node.value = node.value;
	}
});

module.exports = StringAttribute;