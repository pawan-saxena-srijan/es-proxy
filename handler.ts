import { Handler } from 'aws-lambda';
import *  as Utilities from './src/lib/utilities/Utilities';
import { HttpStatusCode } from './src/lib/HttpResponseCodes'
import { Config } from "./config";
const request = require('request-promise-native');

export const sendEvent: Handler = async event => {
    
    let params = [];
    let promiseArray = [];
    try {
        /**
         * Initialize all required variables.
         */
        params = Utilities.extractParams(event);
        console.log("params", params);
        if(params === undefined) {
            return {
                statusCode: HttpStatusCode.UNPROCESSABLE_ENTITY,
                body: { message: "objectKeys cannot be empty."}
            };
        }
        params.forEach(objectKey => {
            let options = {
                uri: Config.ETL_URL + Config.ETL_S3_EVENT_URL,
                method: 'GET',
                json: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${Config.AUTHORIZATION}`
                }
            }
            options.uri = options.uri.replace(/\/?$/, '/') + "?" + Config.OBJECT_ID_KEY + "=" + objectKey;
            promiseArray.push(new Promise((resolve) => {
                resolve(request(options));
            }));
        });
        let details = [];
        await Promise.all(promiseArray).
            then((data) => {
                data.forEach(item => {
                    details.push(item);
                });
                
                return {
                    statusCode: HttpStatusCode.OK,
                    body: { message: " :: SUCCESS :: " + JSON.stringify(details, null, 2) }
                };
            }).catch((err) => {
                console.log("::Error occured ::" + err);
                throw Error(err);
            });
    } catch (err) {
        console.log(err);
        return {
            statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
            body: { message: " Error Occured : " + JSON.stringify(err) }
        };
    }
}
