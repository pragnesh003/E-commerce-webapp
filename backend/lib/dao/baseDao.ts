"use strict";

class BaseDao {
    Model;

    constructor(dbModel: any) {
        this.Model = dbModel;
    }

    save(object: any) {
        return this.Model.create(object);
    }

    findOne(query: any) {
        return this.Model.findOne(query).exec();
    }

    find(query: any) {
        return this.Model.find(query).sort({ createdOn: -1 }).exec();
    }

    findOneAndUpdate(query: any, update: any, options: any) {
        if (!options) {
            options = {};
        }
        return this.Model.findOneAndUpdate(query, update, options).exec();
    }

    findAndModify(query: any, update: any, options: any) {
        return this.Model.findAndModify(query, update, options).exec();
    }

    customFind(query: any, projection: any, limit: any, condition: any) {
        return this.Model.find(query, projection)
            .limit(limit)
            .sort(condition)
            .exec();
    }

    update(query: any, update: any, options: any) {
        if (!options) {
            options = {};
        }
        return this.Model.update(query, update, options).exec();
    }

    updateMany(query: any, update: any, options: any) {
        if (!options) {
            options = {};
        }
        return this.Model.updateMany(query, update, options).exec();
    }

    remove(query: any) {
        return this.Model.remove(query).exec();
    }

    findByIdAndRemove(query: any) {
        return this.Model.findByIdAndRemove(query).exec();
    }

    aggregate(aggPipe: any) {
        return this.Model.aggregate(aggPipe).exec();
    }

    findByIdAndUpdate(query: any, update: any, options: any) {
        return this.Model.findByIdAndUpdate(query, update, options).exec();
    }

    findById(query: any) {
        return this.Model.findById(query).exec();
    }

    count(query: any) {
        return this.Model.count(query).exec();
    }

    findOneAndDelete(query: any) {
        return this.Model.findOneAndDelete(query);
    }

    findWithPagination(query: any, skip: any, limit: any) {
        return this.Model.find(query)
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })
            .exec();
    }

    distinct(query: any) {
        return this.Model.distinct(query).exec();
    }

    findSortingAndLimit(query: any, condition: any, limit: any, projection: any) {
        return this.Model.find(query, projection)
            .limit(limit)
            .sort(condition)
            .exec();
    }

    findAndSort(query: any, projection: any, sort: any) {
        return this.Model.find(query, projection).sort(sort).exec();
    }

    findOneAndSort(query: any, projection: any, sort: any) {
        return this.Model.findOne(query, projection).sort(sort).exec();
    }

    findSortWithPagination(query: any, projection: any, sort: any, skip: any, limit: any) {
        return this.Model.find(query, projection)
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .exec();
    }

    insertMany(array: any) {
        return this.Model.insertMany(array);
    }

    countDocuments(query: any) {
        return this.Model.find(query).countDocuments().exec();
    }

}

export default BaseDao;
