'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var React = require('react'),
    LeafMixin = require('../../mixins/LeafFieldMixin'),
    createClass = require("create-react-class");

/**
 * Component for editing a string.
 * @param  {string} value The value of the string.
 * @param  {Mixed} original The value of the component it the original json.
 * @param {FreezerNode} parent The parent node to let the string component update its value.
 */
var StringField = createClass({
	mixins: [LeafMixin],
	typeClass: 'jsonString',
	inputType: 'text',
	defaultValue: '',

	getInitialState: function getInitialState() {
		return this.getStateFromProps(this.props);
	},

	render: function render() {
		return this.renderInput();
	},

	updateValue: function updateValue(e) {
		this.setState({ value: e.target.value });
	},

	isType: function isType(value) {
		return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object';
	}
});

module.exports = StringField;