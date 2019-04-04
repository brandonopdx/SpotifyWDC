/**
 * WARNING - copies are BY REFERENCE
 *
 * @param {Object} src Source Object
 * @param {Object} dest Target Object
 *
 * @returns {Undefined}
 */
export function copyFunctions (src, dest) {

    for (let key in src) {
        if (typeof src[key] === 'function') {
            dest[key] = src[key];
        }
    }
}

/**
* This function will link the given list of properties using getter/setter referencing
* the source. It's designed for 'by value' properties related to the qt.webchannel implementation for the new WebEngine
* 
* Important:
* The target object will be mutated
*             
* 
* @param {Object} source 
* @param {Object} target
* @param {Array} propertyList
* @returns {Undefined}
*/
export function linkObjectProperties (source, target, propertyList) {

    /**
     * Array.forEach ( supported by Edge )
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    */

    propertyList.forEach(function (propertyName) {

        Object.defineProperty(target, propertyName, {
            enumerable: true,
            configurable: true,
            get: function () {
                return source[propertyName];
            },
            set: function (value) {
                source[propertyName] = value;
            }
        });

    });

}

export let tableauProperties = [
    'authPurpose',
    'authType',
    'connectionData',
    'connectionName',
    'language',
    'locale',
    'logLevel',
    'password',
    'phase',
    'platformBuildNumber',
    'platformEdition',
    'platformOs',
    'platformVersion',
    'propertiesReady',
    'scriptVersion',
    'username',
    'usernameAlias',
    'APIVersion'
];
