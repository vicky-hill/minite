class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const name = this.queryStr.name ? {
            name: {
                $regex: this.queryStr.name,
                $options: 'i'
            }
        } : {}

        const heatLevel = this.queryStr.heatLevel ? {
            heatLevel: {
                $regex: this.queryStr.heatLevel,
                $options: 'i'
            }
        } : {}

        this.query = this.query.find({ ...name, ...heatLevel });

        return this;
    }

    filter() {
        const queryCopy = { ...this.queryStr }

        // Remove fields from query
        const removeFields = [];
        removeFields.forEach(field => delete queryCopy[field]);

        this.query = this.query.find(this.queryCopy);
        return this;
    }
}

export default ApiFeatures;