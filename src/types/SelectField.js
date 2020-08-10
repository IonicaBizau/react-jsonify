'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var React = require('react'),
    createClass = require("create-react-class");

/**
 * Component for editing a boolean.
 * @param  {string} value The value of the boolean.
 */
var SelectType = createClass({

	defaultValue: '',

	getInitialState: function getInitialState() {
		return {
			value: this.props.value
		};
	},

	render: function render() {
		var className = 'jsonSelect';

		return React.DOM.select({
			className: className,
			id: this.props.id,
			value: this.props.value,
			onChange: this.updateValue
		}, this.renderOptions());
	},

	renderOptions: function renderOptions() {
		var opts = this.props.settings.options,
		    options = [];

		if (!opts || !opts.length) return options;

		opts.forEach(function (opt) {
			var data = opt;
			if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) != 'object') data = { value: opt, label: opt };

			options.push(React.DOM.option({ value: data.value, key: data.value }, data.label));
		});

		return options;
	},

	updateValue: function updateValue(e) {
		this.props.onUpdated(e.target.value);
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (this.props.value != nextProps.value) this.setState({ value: nextProps.value });
	}
});

module.exports = SelectType;