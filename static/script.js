// Wait for the whole page to load before running any of this code.
document.addEventListener("DOMContentLoaded", function () {

  const submitBtn = document.getElementById("submit-btn");
  const clearBtn  = document.getElementById("clear-btn");
  const loading   = document.getElementById("loading");

  // ── Clear button ──────────────────────────────────────────────
  // Finds every checkbox on the page and unticks it.
  clearBtn.addEventListener("click", function () {
    document.querySelectorAll("input[type='checkbox']").forEach(function (cb) {
      cb.checked = false;
    });
  });

  // ── Submit button ─────────────────────────────────────────────
  submitBtn.addEventListener("click", async function () {

    // Collect the names of every city that has been checked.
    const checked = Array.from(
      document.querySelectorAll("input[type='checkbox']:checked")
    ).map(function (cb) { return cb.value; });

    if (checked.length === 0) {
      alert("Please select at least one city before downloading.");
      return;
    }

    // Show the loading animation and disable the buttons so the user
    // can't click Submit twice while we're waiting for the server.
    loading.classList.remove("hidden");
    submitBtn.disabled = true;
    clearBtn.disabled  = true;

    try {
      // Send the list of city names to Flask as JSON.
      // "POST" means we're sending data to the server (vs. "GET" which just asks for a page).
      const response = await fetch("/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cities: checked }),
      });

      if (!response.ok) {
        alert("Something went wrong fetching temperatures. Please try again.");
        return;
      }

      // The server sends back the Excel file as raw bytes.
      // We turn those bytes into a temporary URL and click it — that's what
      // triggers the "Save file" download in the browser.
      const blob = await response.blob();
      const url  = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href     = url;
      link.download = "temperatures.xlsx";
      link.click();
      URL.revokeObjectURL(url);   // clean up the temporary URL right away

    } finally {
      // Hide the loading animation and re-enable the buttons whether
      // the download succeeded or failed.
      loading.classList.add("hidden");
      submitBtn.disabled = false;
      clearBtn.disabled  = false;
    }
  });

});
