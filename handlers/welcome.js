
export const handler = async (event) => {
    return await Promise.resolve({
        statusCode: 200,
        message: 'Hello from products service',
    });
}