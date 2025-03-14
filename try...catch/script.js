let result = 0

try {
    if (result === 0) {
        throw new Error("The value is equals a zero");
    }
} catch (error) {
    console.log(error)
} finally {
    console.log("End")
}

