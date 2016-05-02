/* @flow */
import request from 'request';
import _ from 'lodash';
import {readFile as read, writeFile as write} from 'fs';

/**
 * Callback for encode/decode functions
 *
 * @callback base64Callback
 * @param
 * @param
 */
type Callback<T> = (err: ?Error, x?: T) => void;

/**
 *  Encodes a remote or local image to Base64 encoded string or Buffer
 *  @param {string} url - URL of remote image or local path to image
 *  @param {Object} [options={}] - Options object for extra configuration
 *  @param {base64Callback} callback - Callback function containing an Error object or the encoded image
 */
export function encode(url: string, options: Object = {}, callback: Callback<string>) {
  if (_.isUndefined(url) || _.isNull(url) || !_.isString(url)) {
    return callback(new Error('URL is undefined or not properly formatted'));
  }

  if (!_.isFunction(callback)) {
    return callback(new Error('Callback needs to be a function'));
  }
};

/**
 *  Decodes an base64 encoded image buffer and saves it to disk
 *  @param {Buffer} imageBuffer
 *  @param {Object} [options={}] - Options object for extra configuration
 *  @param {callback} callback - Callback function containing an Error object or a successful message
 */
export function decode(imageBuffer: any, options: Object = {}, callback: Callback<string>) {
  if (!_.isBuffer(imageBuffer)) {
    return callback(new Error('URL is undefined or not properly formatted'));
  }
};
