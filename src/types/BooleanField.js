'use strict';

var React = require('react'),
    createClass = require("create-react-class");

/**
 * Component for editing a boolean.
 * @param  {string} value The value of the boolean.
 */
var BooleanField = createClass({

	defaultValue: false,

	render: function render() {
		var className = 'jsonBoolean';

		return React.DOM.input({
			type: "checkbox",
			className: className,
			id: this.props.id,
			checked: this.props.value,
			onChange: this.updateValue
		});
	},

	updateValue: function updateValue(e) {
		this.props.onUpdated(e.target.checked);
	},

	isType: function isType(value) {
		return typeof value == 'boolean';
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (this.props.value != nextProps.value) this.setState({ value: nextProps.value });
	}
});

module.exports = BooleanField;