/**
 * @fileoverview Options configuration for optionator.
 * @author Ian VanSchooten
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _optionator = require('optionator');

var _optionator2 = _interopRequireDefault(_optionator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//------------------------------------------------------------------------------
// Initialization and Public Interface
//------------------------------------------------------------------------------


exports.default = (0, _optionator2.default)({
  prepend: 'usage: eslint-nibble [file.js] [dir]',
  options: [{
    heading: 'Options'
  }, {
    option: 'help',
    alias: 'h',
    type: 'Boolean',
    description: 'Show help'
  }, {
    option: 'version',
    alias: 'v',
    type: 'Boolean',
    description: 'Outputs the version number'
  }, {
    option: 'ext',
    type: '[String]',
    default: '.js',
    description: 'Specify JavaScript file extensions'
  }, {
    option: 'config',
    alias: 'c',
    type: 'path::String',
    description: 'Use configuration from this file or shareable config'
  }]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvb3B0aW9ucy5qcyJdLCJuYW1lcyI6WyJwcmVwZW5kIiwib3B0aW9ucyIsImhlYWRpbmciLCJvcHRpb24iLCJhbGlhcyIsInR5cGUiLCJkZXNjcmlwdGlvbiIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFFQTs7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7a0JBR2UsMEJBQVc7QUFDeEJBLFdBQVMsc0NBRGU7QUFFeEJDLFdBQVMsQ0FBQztBQUNSQyxhQUFTO0FBREQsR0FBRCxFQUVOO0FBQ0RDLFlBQWEsTUFEWjtBQUVEQyxXQUFhLEdBRlo7QUFHREMsVUFBYSxTQUhaO0FBSURDLGlCQUFhO0FBSlosR0FGTSxFQU9OO0FBQ0RILFlBQWEsU0FEWjtBQUVEQyxXQUFhLEdBRlo7QUFHREMsVUFBYSxTQUhaO0FBSURDLGlCQUFhO0FBSlosR0FQTSxFQVlOO0FBQ0RILFlBQWEsS0FEWjtBQUVERSxVQUFhLFVBRlo7QUFHREUsYUFBYSxLQUhaO0FBSURELGlCQUFhO0FBSlosR0FaTSxFQWlCTjtBQUNESCxZQUFhLFFBRFo7QUFFREMsV0FBYSxHQUZaO0FBR0RDLFVBQWEsY0FIWjtBQUlEQyxpQkFBYTtBQUpaLEdBakJNO0FBRmUsQ0FBWCxDIiwiZmlsZSI6Im9wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgT3B0aW9ucyBjb25maWd1cmF0aW9uIGZvciBvcHRpb25hdG9yLlxuICogQGF1dGhvciBJYW4gVmFuU2Nob290ZW5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUmVxdWlyZW1lbnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgb3B0aW9uYXRvciBmcm9tICdvcHRpb25hdG9yJztcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEluaXRpYWxpemF0aW9uIGFuZCBQdWJsaWMgSW50ZXJmYWNlXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbmF0b3Ioe1xuICBwcmVwZW5kOiAndXNhZ2U6IGVzbGludC1uaWJibGUgW2ZpbGUuanNdIFtkaXJdJyxcbiAgb3B0aW9uczogW3tcbiAgICBoZWFkaW5nOiAnT3B0aW9ucydcbiAgfSwge1xuICAgIG9wdGlvbiAgICAgOiAnaGVscCcsXG4gICAgYWxpYXMgICAgICA6ICdoJyxcbiAgICB0eXBlICAgICAgIDogJ0Jvb2xlYW4nLFxuICAgIGRlc2NyaXB0aW9uOiAnU2hvdyBoZWxwJ1xuICB9LCB7XG4gICAgb3B0aW9uICAgICA6ICd2ZXJzaW9uJyxcbiAgICBhbGlhcyAgICAgIDogJ3YnLFxuICAgIHR5cGUgICAgICAgOiAnQm9vbGVhbicsXG4gICAgZGVzY3JpcHRpb246ICdPdXRwdXRzIHRoZSB2ZXJzaW9uIG51bWJlcidcbiAgfSwge1xuICAgIG9wdGlvbiAgICAgOiAnZXh0JyxcbiAgICB0eXBlICAgICAgIDogJ1tTdHJpbmddJyxcbiAgICBkZWZhdWx0ICAgIDogJy5qcycsXG4gICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IEphdmFTY3JpcHQgZmlsZSBleHRlbnNpb25zJ1xuICB9LCB7XG4gICAgb3B0aW9uICAgICA6ICdjb25maWcnLFxuICAgIGFsaWFzICAgICAgOiAnYycsXG4gICAgdHlwZSAgICAgICA6ICdwYXRoOjpTdHJpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnVXNlIGNvbmZpZ3VyYXRpb24gZnJvbSB0aGlzIGZpbGUgb3Igc2hhcmVhYmxlIGNvbmZpZydcbiAgfV1cbn0pO1xuIl19