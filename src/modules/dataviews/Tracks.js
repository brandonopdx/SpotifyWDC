
import DataView from './DataView';
import Q from 'q';
import _ from 'lodash';
import TableauShim from '../TableauShim';

/**
 * 
 */
class Tracks extends DataView {

    /**
     * 
     * @param {Object} $0
     * @param {Array} $0.columns
     * 
     * @returns {Object} this
     */
    defineMappingRules ({ columns } = {}) {

        let [...rules] = columns;

        for (let i = 0; i < rules.length; i++) {

            let col = rules[i];

            switch (col.id) {
                case 'added_at':
                    col.lookup = 'added_at';
                    break;
                case 'album_id':
                    col.lookup = 'track.album.id';
                    break;
                case 'artist_id':
                    col.lookup = 'track.artists[0].id';
                    break;
                case 'artist_name':
                    col.lookup = 'track.artists[0].name';
                    break;
                case 'duration_ms':
                    col.lookup = 'track.duration_ms';
                    break;
                case 'explicit':
                    col.lookup = 'track.explicit';
                    break;
                case 'href':
                    col.lookup = 'track.href';
                    break;
                case 'id':
                    col.lookup = 'track.id';
                    break;
                case 'name':
                    col.lookup = 'track.name';
                    break;
                case 'preview_url':
                    col.lookup = 'track.preview_url';
                    break;
                case 'track_number':
                    col.lookup = 'track.track_number';
                    break;
                case 'uri':
                    col.lookup = 'track.uri';
                    break;
            }
        }

        this.mapping.addRules(rules);

        return this;
    }

    /**
     * 
     * Using recursion for pagination
     * 
     * @param {Object} $0
     * @param {Function} $0.dataProgressCallback callback to send the data to Tableau
     * @param {Function<Q.Deferred>} $0.defer Deferred object to pass the promise along the recursion
     * @param {Number} $0.offset offset to be incremented on each iteration
     * 
     * @returns {Object} Promise/A+
     * 
     */
    getFlattenedData ({ dataProgressCallback, defer = Q.defer(), offset = 0 } = {}) {

        this.requestor.getTracks({ offset }).then((response) => {

            /**
             * Assing the paging object values
             * @see https://developer.spotify.com/documentation/web-api/reference/library/get-users-saved-tracks/
             */
            let { items, next, offset, limit, total } = _.get(response, 'body');

            let flattenedData = this.mapping.flattenData(items);

            TableauShim.reportProgress(`Retrieving Tracks:\ntotal: ${total}\n offet:${offset} \n limit: ${limit}`);

            /**
             * Send the flattened data to tableau and release memory
             */
            dataProgressCallback(flattenedData);

            /**
             * No more data?
             * Resolve the promise and return it
             */
            if (!next) {
                defer.resolve();
                return defer.promise;
            }

            /**
             * oh! we have more data
             * Let's get it!
             * Increment the offset to get the next page
             */
            this.getFlattenedData({ dataProgressCallback, defer, offset: offset + limit });

        }).catch(defer.reject);

        return defer.promise;
    }
}

export default Tracks;
