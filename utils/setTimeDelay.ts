interface TimeData {
    seconds: number;
}

protected async setDelay(seconds: number): Promise<TimeData> {
    return new Promise<TimeData>((resolve) => {
        // Convert milliseconds to seconds
        setTimeout(() => resolve({ seconds }), seconds * 1000);
    });
}
