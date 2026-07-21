// Maps Scraper — Dashboard Logic
// No auth, no limits — direct download

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var table = newTabulator("#example-table", {
    layout: "fitData",
    placeholder: "No leads data loaded...",
    selectable: true,
});

// Download CSV — no quota check, direct download
document.getElementById("download-csv").addEventListener("click", function () {
    table.download("csv", "leads.csv");
    trackExport();
});

// Download XLSX — no quota check, direct download
document.getElementById("download-xlsx").addEventListener("click", function () {
    table.download("xlsx", "leads.xlsx", { sheetName: "Leads Data" });
    trackExport();
});

// Track export count (for stats display in popup)
function trackExport() {
    chrome.storage.local.get(["exportCount"], (data) => {
        const count = (data.exportCount || 0) + 1;
        chrome.storage.local.set({ exportCount: count });
        const el = document.getElementById("export-info");
        if (el) {
            el.textContent = `✓ Export #${count} complete`;
            el.style.color = "#10b981";
        }
    });
}

function flattenObject(obj, prefix = "") {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        const newKey = prefix ? `${prefix}_${key}` : key;
        if (typeof value === "object" && value !== null) {
            Object.assign(result, flattenObject(value, newKey));
        } else {
            result[newKey] = value;
        }
    }
    return result;
}

function generateColumns(allKeys) {
    const priorityFields = new Set(
        "name phone email website address instagram facebook twitter linkedin yelp youtube placeID cID category reviewCount averageRating latitude longitude".split(
            " ",
        ),
    );

    const columns = [];

    priorityFields.forEach((field) => {
        columns.push({
            title: capitalizeFirstLetter(field),
            field: field,
            width: 200,
            resizable: true,
        });
    });

    Array.from(allKeys)
        .sort()
        .forEach((key) => {
            if (!priorityFields.has(key)) {
                columns.push({
                    title: capitalizeFirstLetter(key),
                    field: key,
                    width: 200,
                    resizable: true,
                });
            }
        });

    table.setColumns(columns);
}

function showData() {
    chrome.storage.local.get(null, function (data) {
        const leads = data.leads || [];
        const allKeys = new Set();
        const processedData = [];

        for (let i = 0; i < leads.length; i++) {
            const flat = flattenObject(leads[i]);
            processedData.push(flat);
            Object.keys(flat).forEach((key) => allKeys.add(key));
        }

        generateColumns(allKeys);
        table.setData(processedData);

        // Update lead count badge
        const countEl = document.getElementById("lead-count");
        if (countEl) {
            countEl.textContent = `${leads.length} leads found`;
        }
    });
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", function () {
    showData();
});
