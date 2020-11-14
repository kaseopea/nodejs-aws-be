import AWS from 'aws-sdk';

const BUCKET = 'photo-wish-products-import';

export const handler = async (event) => {
    const importName = event.queryStringParameters.name || 'undefinedName.csv';
    const importPath = `uploaded/${importName}`;

    const s3 = new AWS.S3({
        region: 'eu-west-1'
    });
    const params = {
        Bucket: BUCKET,
        Key: importPath,
        Expires: 60,
        ContentType: 'text/csv'
    };

    return new Promise((resolve, reject) => {
        s3.getSignedUrl('putObject', params, (error, url) => {
            if (error) {
                reject(error);
            }

            resolve({
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: url
            });
        });
    });
}
