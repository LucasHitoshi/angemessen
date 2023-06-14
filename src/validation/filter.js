const filters = {
    "sort": [
        "asc",
        "desc"
    ]
};

const validateFilterName = (
    /** @type {string} */ filterName
) => {
    return Object.keys(filters).includes(filterName);
}

const validateFilterQuery = (
    /** @type {string} */ filterName,
    /** @type {string} */ filterQuery
) => {
    if (!/^[A-Za-z0-9]*$/.test(filterQuery)) return false;
    return filters[filterName].includes(filterQuery);
}
