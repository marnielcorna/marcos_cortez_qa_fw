export class Env {
    public static readonly BASE_URL = Env.getEnvVar('BASE_URL');

    private static getEnvVar(key: string): string {
        const value = process.env[key];
        if (!value) {
            throw new Error(`Environment ${key} is not set correctly`);
        }
        return value;
    }
}