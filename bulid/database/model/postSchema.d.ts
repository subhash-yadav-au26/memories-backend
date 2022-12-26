import mongoose from "mongoose";
export declare const Post: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    tag: string[];
    likeCount: number;
    message?: string;
    title?: string;
    creator?: string;
    selectedFile?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    tag: string[];
    likeCount: number;
    message?: string;
    title?: string;
    creator?: string;
    selectedFile?: string;
}>>;
