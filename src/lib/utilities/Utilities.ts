/**
 * @param eventsReceived
 * @returns number
 * Function to extract process breaches ids from the event.
 */
function extractParams(event) {
    let objectKeys = [];
    event.Records.forEach(eventsReceived => {
        console.log("eventsReceived",eventsReceived);process.exit();
        try {
            if (eventsReceived.s3.object.key !== undefined) {
                objectKeys.push(eventsReceived.s3.object.key);
            }
        }
        catch (error) {
            throw new Error(" ::: method - extractAnalysisId ::: Cannot parse event body due to improper structure due to ::: " + error.toString());
        }
    });
    return objectKeys;
}
export { extractParams };
