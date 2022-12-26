/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export declare class PostHelpers {
    static findAll: () => Promise<(import("mongoose").Document<unknown, any, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        tag: string[];
        likeCount: number;
        message?: string;
        title?: string;
        creator?: string;
        selectedFile?: string;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        tag: string[];
        likeCount: number;
        message?: string;
        title?: string;
        creator?: string;
        selectedFile?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    static findOne: (id: any) => Promise<import("mongoose").Document<unknown, any, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        tag: string[];
        likeCount: number;
        message?: string;
        title?: string;
        creator?: string;
        selectedFile?: string;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        tag: string[];
        likeCount: number;
        message?: string;
        title?: string;
        creator?: string;
        selectedFile?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    static create: (document: any) => Promise<import("mongoose").Document<unknown, any, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        tag: string[];
        likeCount: number;
        message?: string;
        title?: string;
        creator?: string;
        selectedFile?: string;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        tag: string[];
        likeCount: number;
        message?: string;
        title?: string;
        creator?: string;
        selectedFile?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    static findByIDAndUpdate: (id: any, postData: any) => Promise<import("mongoose").Document<unknown, any, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        tag: string[];
        likeCount: number;
        message?: string;
        title?: string;
        creator?: string;
        selectedFile?: string;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        tag: string[];
        likeCount: number;
        message?: string;
        title?: string;
        creator?: string;
        selectedFile?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    static updateLikePost: (id: any) => Promise<import("mongoose").Document<unknown, any, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        tag: string[];
        likeCount: number;
        message?: string;
        title?: string;
        creator?: string;
        selectedFile?: string;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        tag: string[];
        likeCount: number;
        message?: string;
        title?: string;
        creator?: string;
        selectedFile?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    static findByIdAndDelete: (id: any) => Promise<import("mongoose").Document<unknown, any, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        tag: string[];
        likeCount: number;
        message?: string;
        title?: string;
        creator?: string;
        selectedFile?: string;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        tag: string[];
        likeCount: number;
        message?: string;
        title?: string;
        creator?: string;
        selectedFile?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
