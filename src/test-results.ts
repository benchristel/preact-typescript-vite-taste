import "./test-results.css"
import type {TestResult} from "@benchristel/taste"

if ((import.meta as any).env.DEV) {
    (import.meta as any).glob("./**/*.test.*", {eager: true})
    runAllTests()
        .then(({report, allPassed}) => {
            const reportElement = document.getElementById("test-results")!
            reportElement.innerText = report
            reportElement.setAttribute("class", allPassed ? "pass" : "fail")
        })
        .catch(console.error)
}

async function runAllTests(): Promise<{report: string; allPassed: boolean}> {
    const {
        getAllTests,
        runTests,
        formatTestResultsAsText,
    } = await import("@benchristel/taste")
    const {results} = await runTests(getAllTests())
    const allPassed = results.every(passed)
    const report = formatTestResultsAsText({results})
    return {report, allPassed}
}

function passed(test: TestResult): boolean {
    return test.error == null
}
