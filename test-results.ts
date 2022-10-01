if ((import.meta as any).env.DEV) {
  import("@benchristel/taste").then(
    ({ getAllTests, runTests, formatTestResultsAsText }) => {
      runTests(getAllTests())
        .then(formatTestResultsAsText)
        .then((results: string) => {
          const resultsElement = document.getElementById("test-results");
          if (resultsElement == null) {
            throw Error("test-results element not found");
          }

          resultsElement.innerText = results;
          if (results.includes("fail")) {
            resultsElement.setAttribute("class", "fail");
          } else {
            resultsElement.setAttribute("class", "pass");
          }
        });
    }
  );
}
